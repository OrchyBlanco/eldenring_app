
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./Theme";
import Navbar from "./UI/Navbar";

interface Props {
  children: JSX.Element;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Navbar />
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default Layout;


