import { Link, Container, Typography, Grid } from "@material-ui/core";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const success = () => {
  return (
    <Layout>
      <Header />
      <Typography>
        Error, please <Link href="/">try again</Link>.
      </Typography>
    </Layout>
  );
};

export default success;
