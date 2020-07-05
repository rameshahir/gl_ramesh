import React, { Component } from "react";
import compose from "recompose/compose";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import LoadingBar from "react-top-loading-bar";
import {
  receiveEmailSaga,
  receivePasswordSaga,
  isLoding,
} from "../action/loginAction";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLogin: false,
      isEmail: false,
    };
  }

  onLoaderFinished = () => {
    this.props.isLoding(0);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEmailSubmit = (e) => {
    e.preventDefault();
    this.props.isLoding(30);

    this.props.receiveEmailSaga(this.state.email);
  };

  handlePasswordSubmit = (e) => {
    e.preventDefault();
    this.props.receivePasswordSaga(this.props.email, this.state.password);
    this.props.isLoding(30);
  };

  emailUI = () => {
    return (
      <div>
        <LoadingBar
          progress={this.props.loadingBarProgress}
          height={3}
          color="red"
          onLoaderFinished={() => this.onLoaderFinished()}
        />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={this.props.classes.paper}>
            <Avatar className={this.props.classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <form
              className={this.props.classes.form}
              onSubmit={this.handleEmailSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                value={this.state.email}
                type="email"
                name="email"
                onChange={this.handleChange}
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={this.props.classes.submit}
              >
                Next
              </Button>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </div>
    );
  };

  passwordPromptUI = () => {
    return (
      <div>
        <LoadingBar
          progress={this.props.loadingBarProgress}
          height={3}
          color="red"
          onLoaderFinished={() => this.onLoaderFinished()}
        />
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={this.props.classes.paper}>
            <Avatar className={this.props.classes.avatar}></Avatar>
            <Typography component="h1" variant="h5">
              Enter Password
            </Typography>
            <form
              className={this.props.classes.form}
              onSubmit={this.handlePasswordSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                disabled
                fullWidth
                value={this.props.email}
                type="email"
                name="email"
                label="Email Address"
                autoComplete="email"
                autoFocus
              />
              <TextField
                value={this.state.password}
                onChange={this.handleChange}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={this.props.classes.submit}
              >
                Submit
              </Button>
            </form>
          </div>
          <Box mt={8}></Box>
        </Container>
      </div>
    );
  };

  render() {
    if (this.props.isLogin) {
      return <h1>Welcome {this.props.name}</h1>;
    }
    return this.props.isEmail ? this.passwordPromptUI() : this.emailUI();
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.isLogin,
  isEmail: state.isEmail,
  password: state.password,
  email: state.email,
  name: state.name,
  loadingBarProgress: state.loadingBarProgress,
});

const mapDispatchToProps = (dispatch) => ({
  receiveEmailSaga: (email) => {
    dispatch(receiveEmailSaga(email));
  },
  receivePasswordSaga: (email, password) => {
    dispatch(receivePasswordSaga(email, password));
  },
  isLoding: (value) => {
    dispatch(isLoding(value));
  },
});
const enhance = compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Login);
