import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import withReduxStore from 'services/withReduxStore';

import GlobalStyling from 'styles';
import theme from 'styles/theme';

class Top2000Importer extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <>
        <GlobalStyling />
        <ThemeProvider theme={theme}>
          <Container>
            <Provider store={reduxStore}>
              <>
                <Component {...pageProps} />
              </>
            </Provider>
          </Container>
        </ThemeProvider>
      </>
    );
  }
}

export default withReduxStore(Top2000Importer);
