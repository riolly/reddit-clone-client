import React from 'react'
import { Formik, Form } from 'formik';
import { Button, Box } from '@chakra-ui/core';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';

interface registerProps {

}

const Register: React.FC<registerProps> = ({}) => {
  return (
    <Wrapper variant="small">
      <Formik 
        initialValues={{ username: '', password: '' }}
        onSubmit={(values) => console.log(values)}
      >
        {({isSubmitting}) => (
          <Form>
            <InputField name='username' placeholder='username' label='username' />
            
            <Box mt={4}>
              <InputField type='password' name='password' placeholder='password' label='password' />
            </Box>
            
            <Button mt={4} type='submit' variantColor='teal' isLoading={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Wrapper>

  );
}

export default Register; 