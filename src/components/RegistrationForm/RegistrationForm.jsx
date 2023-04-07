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
import PasswordStrengthBar from 'react-password-strength-bar';
import { useEffect, useState } from 'react';
import { MdMail, MdLock, MdPerson } from 'react-icons/md';
import { IoMdEyeOff, IoMdEye } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import authSelectors from 'redux/auth/authSelectors';
import { reduceError } from 'redux/auth/authSlice';
const { getError } = authSelectors;

let schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('E-mail is required'),
  password: yup
    .string()
    .min(6, 'Password should have at least 6 characters')
    .max(12, 'Sorry, password is too long - maximum 12 characters')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password, otherwise the world will end')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  username: yup
    .string()
    .min(2, 'Name should have at least 2 chararacters')
    .max(12, 'Sorry, name is too long')
    .required('Name is required'),
});

export function RegistrationForm() {
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
        confirmPassword: '',
        username: '',
      }}
      validationSchema={schema}
      onSubmit={(values, actions) => {
        const { email, password, username } = values;
        dispatch(register({ email, password, username }));
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
                  <PasswordStrengthBar
                    barColors={[
                      '#ddd',
                      '#13f0bf',
                      '#13f0bf',
                      '#13f0bf',
                      '#13f0bf',
                    ]}
                    scoreWords={[]}
                    shortScoreWord=""
                    minLength={6}
                    password={form.values.password}
                  />
                  <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="confirmPassword">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.confirmPassword && form.touched.confirmPassword
                  }
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children={<MdLock />}
                    />
                    <Input
                      {...field}
                      variant="flushed"
                      placeholder="Confirm Password"
                      type="password"
                    />
                  </InputGroup>
                  <FormErrorMessage>
                    {form.errors.confirmPassword}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="username">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.username && form.touched.username}
                >
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      color="gray.300"
                      fontSize="1.2em"
                      children={<MdPerson />}
                    />
                    <Input
                      {...field}
                      variant="flushed"
                      placeholder="First name"
                    />
                  </InputGroup>
                  <FormErrorMessage>{form.errors.username}</FormErrorMessage>
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
              isLoading={props.isSubmitting}
              type="submit"
            >
              REGISTER
            </Button>
            <Link to="/sign-in">
              <Button
                py="13px"
                w="100%"
                borderRadius="20px"
                colorScheme="blue"
                variant="outline"
              >
                LOG IN
              </Button>
            </Link>
            {error && (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle>
                  Failed to register. Invalid data entered
                </AlertTitle>
              </Alert>
            )}
          </Stack>
        </Form>
      )}
    </Formik>
  );
}
