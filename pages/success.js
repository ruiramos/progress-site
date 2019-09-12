import { Container, Typography, Grid } from "@material-ui/core";
import Header from "../components/header";

const success = () => {
  return (
    <Container className="root">
      <Header />
      <Typography>Success!</Typography>
    </Container>
  );
};

export default success;
