import React from 'react';
import { SnackbarProvider, useSnackbar } from 'notistack';
import styled from 'styled-components'
import Footer from 'components/Footer'
import Header from 'components/HeaderAuth'
import Main from 'components/ExchangeItems/Main'
import ProgressBarProfile from 'components/ProgressBarProfile'

const Register: React.FC = (props) => {
  return (
    <Container>
      <Header />
      <ProgressBarProfile />
      <Main />
      <Footer />
    </Container>
  );
}

export default Register;

const Container = styled.div`

`