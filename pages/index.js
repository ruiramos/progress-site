import { Box, Container, Typography, Grid } from "@material-ui/core";
import Header from "../components/header";
import Footer from "../components/footer";
import Feature from "../components/feature";
import Layout from "../components/layout";
import styled from "styled-components";

const StyledHr = styled.hr`
  margin: 50px auto;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.18);
  width: 3%;
`;

const HeadTitle = styled(Typography)`
  background: #eee;
  padding: 40px;
  text-align: center;
`;

const Screenshot = styled.img`
  display: block;
  width: 800px;
  margin: 0 auto;
`;

const TopSection = styled(Box)``;

const CenteredTitle = styled(Typography)`
  text-align: center;
  margin-top: 1.25em !important;
  margin-bottom: 0.5em !important;
`;

const Index = () => {
  return (
    <Layout>
      <Header />
      <TopSection>
        <Typography>
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
              srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
            />
          </a>{" "}
          or <a href="https://web.progress.bot">log in into the web ui</a>.
        </Typography>
      </TopSection>

      <StyledHr />

      <HeadTitle variant="h4" gutterBottom>
        @progress is a bot that helps you run daily team standups on Slack{" "}
      </HeadTitle>

      <StyledHr />

      <CenteredTitle variant="h4">Configure a daily reminder</CenteredTitle>
      <Screenshot src="/static/reminder.png" />

      <CenteredTitle variant="h4">
        You'll be reminded of what you were doing previously
      </CenteredTitle>
      <Screenshot src="/static/prev-day-summary.png" />

      <CenteredTitle variant="h4">Answer 3 simple questions</CenteredTitle>
      <Screenshot src="/static/questions.png" />

      <CenteredTitle variant="h4">
        And that's it! <br /> You can get your standup shared in a channel
      </CenteredTitle>
      <Screenshot src="/static/share.png" />

      <StyledHr />

      <HeadTitle variant="h4" gutterBottom>
        Login into the web ui and check what you and your team have been up to
      </HeadTitle>

      <StyledHr />

      <CenteredTitle variant="h4">
        Access all your previous standups
      </CenteredTitle>
      <Screenshot src="/static/web1.png" />

      <CenteredTitle variant="h4">
        Track your progress in the <em>planned vs. actual</em> view
      </CenteredTitle>
      <Screenshot src="/static/web2.png" />

      <StyledHr />

      <Typography style={{ textAlign: "center" }}>
        Try it today:{" "}
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
            srcSet="https://platform.slack-edge.com/img/add_to_slack.png 1x, https://platform.slack-edge.com/img/add_to_slack@2x.png 2x"
          />
        </a>
      </Typography>

      <Footer />
      {/*
      <Feature
        title="a feature"
        text="sajisdoa jdsiaj dsioadjisojdsioa jio ajdisoa jdio ajdioaj dioj a"
        img="https://placeimg.com/640/480/tech"
      />
      <Feature
        title="a feature"
        text="sajisdoa jdsiaj dsioadjisojdsioa jio ajdisoa jdio ajdioaj dioj a"
        img="https://placeimg.com/640/480/tech"
      />
      <Feature
        title="a feature"
        text="sajisdoa jdsiaj dsioadjisojdsioa jio ajdisoa jdio ajdioaj dioj a"
        img="https://placeimg.com/640/480/tech"
      />
      */}
    </Layout>
  );
};

export default Index;
