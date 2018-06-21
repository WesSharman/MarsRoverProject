# MarsRoverProject - Javascript Project

Step 1 - Download repository and open index.html.

Step 2 - Input command to send, to vehicle in format: Grid Size, Start Position and Facing Direction, Movement Commands.

Step 3 - Output is returned to vehicle on webpage and back console.

List of input command examples:

44,11N,MMRMRMMLMMLM
88,12E,MMLMRMMRRMML
55,22N,MMLMRMMRRMML

Definition Breakdown:

- Grid Size: The size of the constrained grid laid out on Mars that the vehicle will move in. Example: 4 x 4 - Totaling 16 tiles.
- Start Position and Facing Direction: The place the vehicle will start on the grid in question in terms of x position and y position. The direction the vehicle is facing when it starts (North, East, South or West). Example: 1:1, N.
- Movement Commands: The movement instructions that rover must take to get to end point. Example: MMRLMMLR (M - Move, R - Turn Right & L - Turn Left).

The webpage design with the output on page is for ease of use, so that the end user does not have to open the console.

The program, code design gets the input command and then breaks it up into various arrays, so that individual elements can be accessed easily. These are then checked against facing positions and then update on x and y co-ordinates, based on the logic.
The code was tested with constant back and forth and many "console logs", thus ensuring each integer and input was validated against the necessary steps. These can still be picked up, in the console, where they are commented out. The code has also been tested with various inputs and physically drawn on a grid, so that the outcome can be validated.

Created by Wesley Sharman.

