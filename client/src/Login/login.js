import React from "react";
import { Redirect } from "react-router-dom";
import Dash from "../Dashboard/Dash";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import logo from "../media/logo.png";
import axios from "axios";
class login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirect: false,
    };
  }
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  submit = (event) => {
    event.preventDefault();

    console.log(this.state);
    var userPayload = {
      email: this.state.email,
      pass: this.state.pass,
    };
    axios({
      url: "/api/login",
      method: "POST",
      data: userPayload,
    })
      .then((res) => {
        if (res.status == 200) {
          this.setState({ redirect: true });
        }
        console.log("Response from the server ", res);
      })
      .catch(() => {
        console.log("Internal server error");
      });
  };

  render() {
    if (this.state.redirect) {
      console.log("Redirecting in render");
      return <Dash email={this.state.email}></Dash>;
    } else {
      return (
        <Container maxWidth="xs">
          <Box
            bgcolor=""
            textAlign="center"
            p="24px"
            mt="50px"
            boxShadow="2"
            borderRadius="15px"
          >
            <img src={logo} display="inline" height="50px" width="50px"></img>
            <Typography variant="h6" color="textSecondary">
              DQ...
            </Typography>
            <TextField
              label="Email"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              fullWidth
              name="email"
              type="email"
              color="secondary"
              margin="normal"
              onChange={this.handleChange}
            />
            <TextField
              color="secondary"
              label="Password"
              name="password"
              type="password"
              id="outlined-size-small"
              variant="outlined"
              size="small"
              onChange={this.handleChange}
              margin="normal"
              fullWidth
            />
            <br></br>
            <br></br>
            <Button variant="contained" color="primary" onClick={this.submit}>
              Login
            </Button>
          </Box>
        </Container>
      );
    }
  }
}
export default login;
