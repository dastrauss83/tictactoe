import { Grid } from "@material-ui/core";
import React from "react";
import { useStyles } from "../Styling";
import Square from "./Square";

type BoardProps = {
  gameState: any;
  setGameState: any;
  player: string;
  setPlayer: any;
  isWinner: string;
};

const Board = ({
  gameState,
  setGameState,
  player,
  setPlayer,
  isWinner,
}: BoardProps) => {
  const classes = useStyles();

  const row1 = [0, 1, 2];
  const row2 = [3, 4, 5];
  const row3 = [6, 7, 8];

  const chooseSquare = (num: number) => {
    if (isWinner !== "none") return;
    setGameState(
      gameState.map((val: string, idx: number) => {
        if (idx === num && val === "") return player;
        return val;
      })
    );
    player === "X" ? setPlayer("O") : setPlayer("X");
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ height: 300 }}
    >
      <Grid item className={classes.row}>
        {row1.map((num, index) => (
          <Square
            key={index}
            chooseSquare={() => chooseSquare(num)}
            value={gameState[num]}
          />
        ))}
      </Grid>
      <Grid item className={classes.row}>
        {row2.map((num, index) => (
          <Square
            key={index}
            chooseSquare={() => chooseSquare(num)}
            value={gameState[num]}
          />
        ))}
      </Grid>
      <Grid item className={classes.row}>
        {row3.map((num, index) => (
          <Square
            key={index}
            chooseSquare={() => chooseSquare(num)}
            value={gameState[num]}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default Board;
