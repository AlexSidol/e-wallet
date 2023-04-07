import {
  Alert,
  AlertIcon,
  AlertTitle,
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useEffect, useState } from 'react';
import { MdMail, MdLock } from 'react-icons/md';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { reduceError } from 'redux/auth/authSlice';
const { getError } = authSelectors;

let schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('E-mail is required'),
  password: yup
    .string()
    .min(6, 'Password is too short')
    .max(12, 'Password is too long')
    .required('Password is required'),
});

export function LoginForm() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const handleClick = () => setShow(!show);

  useEffect(() => {
    dispatch(reduceError());
  }, [dispatch]);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(logIn(values));
        actions.setSubmitting(false);
      }}
    >
      {props => (
        <Form>
          <Stack spacing={'30px'}>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children={<MdMail />}
                    />
                    <Input {...field} variant="flushed" placeholder="E-mail" />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.password && form.touched.password}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children={<MdLock />}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? (
                          <IoMdEyeOff size={'1.3em'} />
                        ) : (
                          <IoMdEye size={'1.3em'} />
                        )}
                      </Button>
                    </InputRightElement>
                    <Input
                      {...field}
                      variant="flushed"
                      placeholder="Password"
                      type={show ? 'text' : 'password'}
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              _hover={{
                background: '#13f0bf',
              }}
              mt={4}
              py="13px"
              color="#FFFFFF"
              bgColor="#24CCA7"
              borderRadius="20px"
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              LOG IN
            </Button>
            <Link to="/sign-up">
              <Button
                py="13px"
                w="100%"
                borderRadius="20px"
                colorScheme="blue"
                variant="outline"
              >
                REGISTER
              </Button>
            </Link>
            {error && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>Failed to log in.</AlertTitle>
              </Alert>
            )}
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
