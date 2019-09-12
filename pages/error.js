import { Link, Container, Typography, Grid } from "@material-ui/core";
import Header from "../components/header";

const success = () => {
  return (
    <Container className="root">
      <Header />
      <Typography>
        Error, please <Link href="/">try again</Link>.
      </Typography>
    </Container>
  );
};

export default success;
