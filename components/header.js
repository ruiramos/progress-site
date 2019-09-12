import { Container, Typography, Grid } from "@material-ui/core";
const Header = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default Header;
