import "./Game.css";
import { Container, Grid, Card, Typography, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Board from "./Board";

export const Game = () => {
  const [isWinner, setIsWinner] = useState<string>("none");
  const [player, setPlayer] = useState<string>("X");
  const [gameState, setGameState] = useState(new Array(9).fill(""));

  const handleReset = () => {
    setGameState(new Array(9).fill(""));
    setPlayer("X");
    setIsWinner("none");
  };

  const checkIfWinner = () => {
    const winning = [
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 5, 6],
    ];
    for (let win of winning) {
      let [num1, num2, num3] = win;
      if (
        gameState[num1] &&
        gameState[num1] === gameState[num2] &&
        gameState[num2] === gameState[num3]
      )
        return gameState[num1];
    }
    return "none";
  };

  useEffect(() => {
    setIsWinner(checkIfWinner());
  }, [gameState]);

  return (
    <Container maxWidth="md" style={{ marginTop: 150 }}>
      <Card>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          style={{ height: 500, padding: 20 }}
        >
          <Typography variant="h5" gutterBottom>
            {isWinner !== "none"
              ? `${isWinner} has won!`
              : `Your move player ${player ? "X" : "O"}`}
          </Typography>
          <Board
            gameState={gameState}
            setGameState={setGameState}
            player={player}
            setPlayer={setPlayer}
          />
          <Button onClick={handleReset}>Reset</Button>
        </Grid>
      </Card>
    </Container>
  );
};
