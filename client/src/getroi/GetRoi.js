import React from "react";
import img from "./696.jpg";
import { Line } from "draw-shape-reactjs";

import axios from "axios";
import { Container, Box, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
class GetRoi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      x3: 0,
      y3: 0,
      x4: 0,
      y4: 0,
    };
    this.imageRef = React.createRef();
  }
  getCoordinates(e) {
    if (this.state.count == 0) {
      this.setState({
        x1: e.nativeEvent.offsetX,
        y1: e.nativeEvent.offsetY,
        count: 1,
      });
    } else if (this.state.count == 1) {
      this.setState({
        x2: e.nativeEvent.offsetX,
        y2: e.nativeEvent.offsetY,
        count: 2,
      });
    } else if (this.state.count == 2) {
      this.setState({
        x3: e.nativeEvent.offsetX,
        y3: e.nativeEvent.offsetY,
        count: 3,
      });
    } else if (this.state.count == 3) {
      this.setState({
        x4: e.nativeEvent.offsetX,
        y4: e.nativeEvent.offsetY,
        count: 4,
      });
    }
  }
  clearcoordinates(e) {
    this.setState({
      count: 0,
      x1: 0,
      y1: 0,
      x2: 0,
      y2: 0,
      x3: 0,
      y3: 0,
      x4: 0,
      y4: 0,
    });
  }

  // {"roi":[{"x":{"$numberInt":"0"}}]}

  submitroi(e) {
    console.log("inside submit.");
    var roipayload = {
      camera: {
        camera1: {
          roi: [
            {
              roi1: {
                x1: this.state.x1,
                x2: this.state.x2,
                x3: this.state.x3,
                x4: this.state.x4,
                y1: this.state.y1,
                y2: this.state.y2,
                y3: this.state.y3,
                y4: this.state.y4,
              },
            },
          ],
        },
      },
      email: this.props.email,
    };
    console.log(roipayload);
    axios({
      url: "/api/insert",
      method: "POST",
      data: roipayload,
    })
      .then((data) => {
        console.log("Update successfull!!", data);
        alert("Update Successfull");
      })
      .catch(() => {
        console.log("Internal server error");
      });
  }
  useStyles = () =>
    makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
      },
    }));

  render() {
    const classes = this.useStyles;

    if (this.state.count >= 2) {
      var line_plot1 = (
        <Line
          position="fixed"
          from={[
            this.state.x1 + this.imageRef.current.x - 40,
            this.state.y1 + this.imageRef.current.y - 7,
          ]}
          to={[
            this.state.x2 + this.imageRef.current.x - 40,
            this.state.y2 + this.imageRef.current.y - 7,
          ]}
          color="#1DBFE7"
        />
      );
    }
    if (this.state.count >= 3) {
      var line_plot2 = (
        <Line
          position="fixed"
          from={[
            this.state.x2 + this.imageRef.current.x - 40,
            this.state.y2 + this.imageRef.current.y - 7,
          ]}
          to={[
            this.state.x3 + this.imageRef.current.x - 40,
            this.state.y3 + this.imageRef.current.y - 7,
          ]}
          color="#1DBFE7"
        />
      );
    }
    if (this.state.count >= 4) {
      var line_plot3 = (
        <Line
          position="fixed"
          from={[
            this.state.x3 + this.imageRef.current.x - 40,
            this.state.y3 + this.imageRef.current.y - 7,
          ]}
          to={[
            this.state.x4 + this.imageRef.current.x - 40,
            this.state.y4 + this.imageRef.current.y - 7,
          ]}
          color="#1DBFE7"
        />
      );
    }
    if (this.state.count >= 4) {
      var line_plot4 = (
        <Line
          position="fixed"
          from={[
            this.state.x4 + this.imageRef.current.x - 40,
            this.state.y4 + this.imageRef.current.y - 7,
          ]}
          to={[
            this.state.x1 + this.imageRef.current.x - 40,
            this.state.y1 + this.imageRef.current.y - 7,
          ]}
          color="#1DBFE7"
        />
      );
    }
    return (
      <Container>
        <Box>
          <Box>
            <Grid container item xs={12} spacing={2}>
              <React.Fragment>
                <Grid item xs={8}>
                  <Paper className={classes.paper}>
                    <Box textAlign="center">
                      <img
                        onClick={this.getCoordinates.bind(this)}
                        ref={this.imageRef}
                        src={img}
                        height="inherit"
                        width="inherit"
                      />
                      {line_plot1}
                      {line_plot2}
                      {line_plot3}
                      {line_plot4}
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper className={classes.paper}>
                    <Box textAlign="left">
                      <Typography variant="h5" color="textPrimary">
                        Selected Points
                      </Typography>
                      <Typography>
                        Point 1: ({this.state.x1}, {this.state.y1})
                      </Typography>
                      <Typography>
                        Point 2: ({this.state.x2}, {this.state.y2})
                      </Typography>
                      <Typography>
                        Point 3: ({this.state.x3}, {this.state.y3})
                      </Typography>
                      <Typography>
                        Point 4: ({this.state.x4}, {this.state.y4})
                      </Typography>
                    </Box>

                    <Grid container item xs={10} spacing={1}>
                      <Grid item xs={4}>
                        <Paper className={classes.paper}>
                          <Box textAlign="center">
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={this.clearcoordinates.bind(this)}
                            >
                              <Typography> Clear </Typography>
                            </Button>
                          </Box>
                        </Paper>
                      </Grid>
                      <Grid item xs={4}>
                        <Paper className={classes.paper}>
                          <Box textAlign="right">
                            <Button
                              variant="contained"
                              color="primary"
                              onClick={this.submitroi.bind(this)}
                            >
                              <Typography> Submit </Typography>
                            </Button>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                {/* <Grid item xs={4}>
                  <Paper className={classes.paper}>item</Paper>
                </Grid> */}
              </React.Fragment>
            </Grid>
          </Box>
          {/* <Box>
            
          </Box> */}
        </Box>
      </Container>
    );
  }
}

export default GetRoi;
