import { Container, Typography, Grid } from "@material-ui/core";
import Header from "../components/header";

const Index = () => {
  return (
    <Container className="root">
      <Header />
      <Typography style={{ marginTop: 24 }}>
        <a
          href="https://slack.com/oauth/authorize?client_id=2168708159.732663285622&scope=bot,users:read,users.profile:read,commands"
          style={{
            verticalAlign: "middle",
            display: "inline-block"
          }}
        >
          <img
            alt="Add to Slack"
            height="40"
            width="139"
            src="https://platform.slack-edge.com/img/add_to_slack.png"
            srcset="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
          />
        </a>{" "}
        or <a href="https://web.progress.bot">log in into the web ui</a>.
      </Typography>
    </Container>
  );
};

export default Index;
