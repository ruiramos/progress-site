import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = {
  colors: {
    primary: "#000"
  }
};

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Head>
            <title>Progress bot - async team standups on Slack</title>
          </Head>
          <CssBaseline />
          <Component {...pageProps} />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

export default MyApp;
