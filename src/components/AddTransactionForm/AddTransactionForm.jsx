import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Select,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { addTransaction } from 'redux/transaction/transactionOperations';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
import { MyCheckbox } from 'components/Switch/Switch';
import time from 'service/date';
import { isModalAddTransaction } from 'redux/modal/modalSlice';
const { getCategories, getError } = transactionSelectors;

const { date } = time;

let schema = yup.object().shape({
  transactionDate: yup.date().required('Please, selecta a date'),
  type: yup.bool().required(),
  categoryId: yup.string(),
  comment: yup.string().max(50, 'Sorry, comment is too long'),
  amount: yup.number().required('Please insert an amount'),
});

export const AddTransactionForm = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const categories = useSelector(getCategories).filter(
    item => item.type !== 'INCOME'
  );
  const error = useSelector(getError);

  const clickOnsubmit = (values, actions) => {
    const newTransaction = {
      ...values,
      amount: values.type ? -Math.abs(values.amount) : values.amount,
      categoryId: values.type
        ? values.categoryId
        : '063f1132-ba5d-42b4-951d-44011ca46262',
      type: values.type ? 'EXPENSE' : 'INCOME',
    };
    if (values.type && values.categoryId === '')
      newTransaction.categoryId = 'c9d9e447-1b83-4238-8712-edc77b18b739';
    dispatch(addTransaction(newTransaction));
    actions.setSubmitting(false);
    actions.resetForm();
    dispatch(isModalAddTransaction(false));
    if (!error) {
      toast({
        title: 'Transaction added.',
        position: 'bottom-right',
        variant: 'subtle',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Formik
      initialValues={{
        transactionDate: date.toISOString().split('T')[0],
        type: true,
        categoryId: '',
        comment: '',
        amount: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        clickOnsubmit(values, actions);
      }}
    >
      {props => (
        <Form height="100%">
          <Stack spacing={5}>
            <MyCheckbox name="type" checked={props.values.type} />
            {props.values.type && (
              <Field name="categoryId">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.categoryId && form.touched.categoryId
                    }
                  >
                    <Select
                      {...field}
                      placeholder="Select a category"
                      variant="flushed"
                    >
                      {categories.map(category => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </Select>
                    <FormErrorMessage>
                      {form.errors.categoryId}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            )}
            <Stack direction={['column', 'row']} spacing="24px">
              <Field name="amount">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.amount && form.touched.amount}
                  >
                    <Input
                      {...field}
                      type="number"
                      textAlign="center"
                      fontWeight="600"
                      placeholder="0.00"
                      variant="flushed"
                    />
                    <FormErrorMessage>{form.errors.amount}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="transactionDate">
                {({ field, form }) => (
                  <FormControl
                    isInvalid={
                      form.errors.transactionDate &&
                      form.touched.transactionDate
                    }
                  >
                    <Input
                      {...field}
                      type="date"
                      color="black"
                      textAlign="center"
                      variant="flushed"
                    />
                    <FormErrorMessage>
                      {form.errors.transactionDate}
                    </FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Stack>
            <Field name="comment">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.comment && form.touched.comment}
                >
                  <Input {...field} variant="flushed" placeholder="Comment" />
                  <FormErrorMessage>{form.errors.comment}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              _hover={{
                background: '#13f0bf',
              }}
              py="13px"
              color="#FFFFFF"
              bgColor="#24CCA7"
              borderRadius="20px"
              colorScheme="teal"
              type="submit"
              mt={4}
              isLoading={props.isSubmitting}
            >
              ADD
            </Button>
            <Button
              py="13px"
              w="100%"
              borderRadius="20px"
              colorScheme="blue"
              variant="outline"
              onClick={() => dispatch(isModalAddTransaction(false))}
            >
              CANCEL
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
