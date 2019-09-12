import { Container, Typography, Grid } from "@material-ui/core";

const Index = () => {
  return (
    <Container className="root">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <style jsx global>
        {`
          .root {
            padding: 32px;
          }
          h1 span {
            position: relative;
          }
          h1 span:after {
            position: absolute;
            width: 100%;
            top: 100%;
            margin-top: -6px;
            left: 0;
            border-bottom: 4px solid rgba(0, 0, 0, 0.87);
            content: " ";
          }
        `}
      </style>
      <Grid item xs>
        <Typography variant="h4" component="h1">
          <span>Progress</span> bot
        </Typography>
      </Grid>
      <Typography style={{ marginBottom: 6 }}>
        A Slack bot for async team standups.
      </Typography>
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
