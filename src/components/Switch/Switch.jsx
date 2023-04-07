import { Stack, Switch, Text } from '@chakra-ui/react';
import './Switch.modules.css';
import { BsPlusLg } from 'react-icons/bs';
import { FiMinus } from 'react-icons/fi';

const { useField } = require('formik');

export function MyCheckbox({ children, ...props }) {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  console.log(meta);
  return (
    <div>
      <Stack direction={['row']} spacing="5px" align="center" justify="center">
        <Text color={field.value ? '#D9D9D9' : '#24CCA7'} as="b">
          Income
        </Text>

        <Switch
          children={
            !field.value ? (
              <BsPlusLg
                onClick={() => field.onChange(field.name)}
                className="chakra-switch__label plus"
                size="20px"
              />
            ) : (
              <FiMinus className="chakra-switch__label minus" size="30px" />
            )
          }
          size="lg"
          {...field}
          {...props}
          defaultChecked={field.value}
          colorScheme="pink"
        />
        <Text color={!field.value ? '#D9D9D9' : '#FF6596'} as="b">
          Expense
        </Text>
      </Stack>
      {children}
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
}
