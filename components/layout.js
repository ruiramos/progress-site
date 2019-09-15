import { Container, Typography, Grid } from "@material-ui/core";
import styled from "styled-components";

const AppContainer = styled(Container)`
  padding: 64px 0 0;
`;

const Layout = props => {
  return <AppContainer>{props.children}</AppContainer>;
};

export default Layout;
