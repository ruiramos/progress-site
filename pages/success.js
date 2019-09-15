import { Container, Typography, Grid } from "@material-ui/core";
import Layout from "../components/layout";
import Header from "../components/header";
import Footer from "../components/footer";

const success = () => {
  return (
    <Layout>
      <Header />
      <Typography>
        Success! Run <code>/progress-help</code> on your Slack team for more
        information on how to use the bot.
      </Typography>
    </Layout>
  );
};

export default success;
