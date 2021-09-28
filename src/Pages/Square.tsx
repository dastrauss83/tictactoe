import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";

type SquareProps = {
  value: string;
  chooseSquare: any;
};

const Square = ({ value, chooseSquare }: SquareProps) => {
  return (
    <Grid item style={{ height: "100%", width: "33%", border: "solid" }}>
      <Button onClick={chooseSquare} style={{ height: "100%", width: "100%" }}>
        {value !== "none" && <Typography>{value}</Typography>}
      </Button>
    </Grid>
  );
};

export default Square;
