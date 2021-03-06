
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Head from 'next/head'

import { customTheme } from "./Theme";
import Navbar from "./UI/Navbar";

interface Props {
  children: JSX.Element;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Five Fingers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={customTheme}>
      <CssBaseline />
        <Navbar />        
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;
