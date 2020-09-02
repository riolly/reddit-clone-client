import React from 'react'
import { Box } from '@chakra-ui/core';

interface WrapperProps {
  variant?: 'regular' | 'small';  
}

export const Wrapper: React.FC<WrapperProps> = ({ children, variant = 'regular' }) => {
    return (
      <Box
        mt={4}
        mx="auto"
        maxW={variant === 'regular' ? "800px" : "400px"}
        w="100%"
      >
        { children }
      </Box>
    );
}