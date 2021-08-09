import {
  Container,
  Grid,
  Card,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
} from "@material-ui/core";
import { useStyles } from "../Styling";
import { useAuth } from "./useAuth";
import { useState } from "react";

type SignUpProps = {};

export const SignUp: React.FC<SignUpProps> = () => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const { signup, currentUser, firebaseError } = useAuth();

  const handleSubmit = async (e: any) => {
    if (password !== passwordConfirm)
      return setError("Passwords do not match.");
    if (password.length < 6)
      return setError("Password must be at least 6 characters.");

    if (firebaseError.length > 0) return setError(firebaseError);
    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      console.log(currentUser);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: 100 }}>
      <Card>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item className={classes.input}>
            <Typography variant="h3" align="center" gutterBottom>
              Sign Up
            </Typography>
            {error && (
              <Typography color="primary" align="center" gutterBottom>
                Error: {error}
              </Typography>
            )}
          </Grid>
          <Grid item className={classes.input}>
            <FormControl>
              <InputLabel>Email</InputLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.input}>
            <FormControl>
              <InputLabel>Password</InputLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.input}>
            <FormControl>
              <InputLabel>Password Confirm</InputLabel>
              <Input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </FormControl>
          </Grid>
          <Grid item className={classes.input}>
            <Button
              disabled={loading}
              variant="outlined"
              color="primary"
              onClick={handleSubmit}
            >
              Sign Up!
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};
