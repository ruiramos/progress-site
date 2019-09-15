import { Container, Typography, Grid } from "@material-ui/core";
import styled from "styled-components";

const TitleSpan = styled.span`
  position: relative;

  ::after {
    position: absolute;
    width: 100%;
    top: 100%;
    margin-top: -6px;
    left: 0;
    border-bottom: 4px solid rgba(0, 0, 0, 0.87);
    content: " ";
  }
`;

const Header = styled.header`
  margin-bottom: 40px;
`;

const HeaderComponent = () => {
  return (
    <Header>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <Grid item xs>
        <Typography variant="h4" component="h1">
          <TitleSpan>Progress</TitleSpan> bot
        </Typography>
      </Grid>
      <Typography style={{ marginBottom: 6 }}>
        A Slack bot for async team standups.
      </Typography>
    </Header>
  );
};

export default HeaderComponent;
