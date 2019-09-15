import { Grid, Typography } from "@material-ui/core";
import styled from "styled-components";

const Feature = styled(Grid)`
  margin: 0;
  margin-bottom: 40;
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 100%;
`;

const FeatureComponent = ({ title, text, img }) => {
  return (
    <Feature container spacing={10}>
      <Grid item xs={6}>
        <FeatureImage src={img} className="feature-image" />
      </Grid>
      <Grid item xs={6}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography>{text}</Typography>
      </Grid>
    </Feature>
  );
};

export default FeatureComponent;
