import React from "react";
import { Box, Container, Typography } from "@material-ui/core";
const propTypes = {};
const defaultProps = {};

class userProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Box>
          <Typography variant="h6" color="textSecondary">
            User Profile
          </Typography>
        </Box>
      </Container>
    );
  }
}

// #endregion

export default userProfile;
