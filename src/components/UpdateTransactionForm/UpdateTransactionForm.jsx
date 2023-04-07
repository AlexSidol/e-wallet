import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { updateTransaction } from 'redux/transaction/transactionOperations';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import transactionSelectors from 'redux/transaction/transactionSelectors';
import time from 'service/date';
import { isModalUpdateTransaction } from 'redux/modal/modalSlice';
import { useTransactions } from 'hooks/useTransactions';

const { getError } = transactionSelectors;

const { date } = time;

let schema = yup.object().shape({
  transactionDate: yup.date(),
  comment: yup.string().max(50, 'Sorry, comment is too long'),
});

export const UpdateTransactionForm = () => {
  const dispatch = useDispatch();
  const { oneTransaction } = useTransactions();

  const toast = useToast();

  const error = useSelector(getError);

  const clickOnsubmit = (values, actions) => {
    const newTransaction = {
      ...values,
      id: oneTransaction.id,
      amount: oneTransaction.amount,
      categoryId: oneTransaction.categoryId,
      type: oneTransaction.type === '-' ? 'EXPENSE' : 'INCOME',
      balanceAfter: oneTransaction.balanceAfter,
    };
    // console.log(oneTransaction);
    // console.log(newTransaction);
    dispatch(updateTransaction(newTransaction));
    actions.setSubmitting(false);
    actions.resetForm();
    dispatch(isModalUpdateTransaction(false));
    if (!error) {
      toast({
        title: 'Transaction edited.',
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
        comment: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        clickOnsubmit(values, actions);
      }}
    >
      {props => (
        <Form height="100%">
          <Stack spacing={5}>
            <Stack direction={['column', 'row']} spacing="24px">
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
              Edit
            </Button>
            <Button
              py="13px"
              w="100%"
              borderRadius="20px"
              colorScheme="blue"
              variant="outline"
              onClick={() => dispatch(isModalUpdateTransaction(false))}
            >
              CANCEL
            </Button>
          </Stack>
        </Form>
      )}
    </Formik>
  );
};
