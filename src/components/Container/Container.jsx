import { Container as Box } from '@chakra-ui/react';

const Container = ({ children, ...props }) => {
  return (
    <Box
      maxW={{ sm: 'container.sm', md: 'container.md', lg: 'container.lg' }}
      paddingInlineStart={{ sm: '20px', md: '32px', lg: '16px' }}
      paddingInlineEnd={{ sm: '20px', md: '32px', lg: '16px' }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Container;
