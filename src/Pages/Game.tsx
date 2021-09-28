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
      [2, 4, 6],
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

  const checkIfTie = () => {
    for (let square of gameState) {
      if (square === "") return "none";
    }
    return "It's a tie!";
  };

  useEffect(() => {
    setIsWinner(checkIfWinner());
    setIsWinner(checkIfTie());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
            {isWinner === "It's a tie!"
              ? "It's a tie!"
              : isWinner !== "none"
              ? `${isWinner} has won!`
              : `Your move ${player}`}
          </Typography>
          <Board
            gameState={gameState}
            setGameState={setGameState}
            player={player}
            setPlayer={setPlayer}
            isWinner={isWinner}
          />
          <Button onClick={handleReset}>Reset</Button>
        </Grid>
      </Card>
    </Container>
  );
};
