import "./Game.css";
import { Container, Grid, Card, Typography, Button } from "@material-ui/core";
import React, { useState } from "react";
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
