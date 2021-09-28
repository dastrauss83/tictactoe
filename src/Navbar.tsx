import { AccountCircleSharp, GridOn } from "@material-ui/icons";
import { Typography, AppBar, Toolbar, Button, Grid } from "@material-ui/core";
import { useStyles } from "./Styling";
import { Link } from "react-router-dom";

type NavBarProps = {};

export const NavBar: React.FC<NavBarProps> = () => {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item>
            <Button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <Link to="/" className={classes.link}>
                <GridOn className={`${classes.icon} ${classes.navBar}`} />
                <Typography variant="h6" className={classes.navBar}>
                  Tic-Tac-Toe
                </Typography>
              </Link>
            </Button>
          </Grid>
          <Grid item>
            <Button>
              <Link to="/log-in" className={classes.link}>
                <Typography variant="h6" className={classes.navBar}>
                  Log In
                </Typography>
                <AccountCircleSharp
                  className={`${classes.icon} ${classes.navBar}`}
                />
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
