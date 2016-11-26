# ThreeLow #

## Rules ##

* 2-4 players
* Each player roles three dice, after every player has rolled the winner is determined
* If no valid combination is rolled after 5 attempts that player is out for the round
* First player to win 5 rounds is the winner of the match

### Win Conditions  ###

Cominbations in order of best to worst.

1. 4-5-6 (Automatic win)
2. Trips (Highest number of trips win)
3. Doubles (The highest single wins)
4. 1-2-3 (Automatic loss)

Anything outside of these rolls is invalid.

Examples:

```
Player 1 rolls 1-2-3 (They're out)
Player 2 rolls 2-2-3 (Their number is 3)
Player 3 rolles 2-2-4 (Their number is 4 (beats Player 2))
Player 4 rolles 3-3-3 (They're the winner of the round)
```

```
Player 1 rolls 4-4-5 (Their number is 5)
Player 2 rolls 4-4-6 (Their number is 6 (beats Player 1))
Player 3 rolles 6-6-6 (Highest trips)
Player 4 rolles 4-5-6 (They win the round (Automatic win with 4-5-6))
```