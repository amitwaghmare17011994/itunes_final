import React, { useEffect } from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import withWidth from "@material-ui/core/withWidth";
import Hidden from "@material-ui/core/Hidden";
import { useStyles } from "./styles";
import Banner from "@images/banner.jpeg";
import Logo from "@images/logo.png";
import { useFormik } from "formik";
import { loginSchema } from "./helper";
import { FormHelperText } from "@material-ui/core";
import { loginUser } from "../../Utils";
import Cookies from "js-cookie";

const LoginPage = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { width } = props;

  useEffect(() => {
    if (Cookies.get("user")) {
      history.push("/");
    }
  }, []);
  const onLoginHandler = () => {
    loginUser(values.email);
    history.push("/");
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: onLoginHandler,
    validationSchema: loginSchema,
  });
  const { values, errors, handleChange, handleSubmit, setFieldValue } = formik;
  return (
    <div className={classes.container}>
      <Hidden xsDown mdDown>
        <div className={classes.banner}>
          <img style={{ width: "100%", height: "100%" }} src={Banner} />
        </div>
      </Hidden>

      <div className={classes.paper}>
        <img src={Logo} style={{ width: 176 }} />
        <br />
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            autoFocus
            inputProps={{
              autoComplete: "off",
            }}
            color="secondary"
            error={errors.email}
            onChange={(e) => {
              setFieldValue("email", e.target.value);
            }}
          />
          <FormHelperText className={classes.error}>
            {errors.email}
          </FormHelperText>

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            inputProps={{
              autoComplete: "new-password",
            }}
            color="secondary"
            error={errors.password}
            onChange={(e) => {
              setFieldValue("password", e.target.value);
            }}
          />
          <FormHelperText className={classes.error}>
            {errors.password}
          </FormHelperText>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default withWidth()(LoginPage);
