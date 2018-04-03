# hrsf93-tic-tac-toe

## Single page app with the following features:

- the first move always starts with player X
- the app detects a win or tie and displays an appropriate message
- a button resets the game for a new round of gameplay

## Advanced Content Implemented
- If you used more than one event handler for listening to clicks on your game board, refactor to use a single event handler for handling all board events. (You may continue to use other event handlers that relate to starting a new game, for example.)
- Keep track of the winner from the last round and allow the winner (X or O) to make the first move on the next round of gameplay.
- Keep a tally of the number of times X vs. O won a game. Refreshing the page (CMD+R) should reset the tally.
- Let each player (X vs. O) enter their name. Display this name next to the player's symbol (X vs. O).
- If not already done, refactor your app so that all game state is self-contained in one object or module. It is ok for this module to live in the same app.js file as the rest of your code.
- If not already done, refactor all your presentation code so that it lives in one module or object. It is ok for this module to be in the same app.js file as the rest of your code. Carefully consider how this module will interact with the module that holds game state.
- If not already done, refactor all code related to user input so that this code lives in one module or object. It is ok for this module to be in the same app.js file as the rest of your code. Carefully consider how this module will interact with the other two modules above.

## TODO
- Add a little CSS styling to make your game look more visually presentable.
- If not already done, move your CSS into an external style sheet.
- Add a twist to the game: after each move, rotate the board 90 degrees and apply gravity to the played squares, so they stack against the bottom of the board. Add a UI element to toggle this behavior (on/off) at the start of each game.
- Serve the game and its assets from an express server.