import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    // Initialize styled-components stylesheet on server
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    // Return styles so we can append them in the document Head
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="nl">
        <Head>
          {this.props.styleTags}
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10" />
        </Head>
        <body>
          <Main />
          <div id="modal" />
          <NextScript />
        </body>
      </html>
    );
  }
}
