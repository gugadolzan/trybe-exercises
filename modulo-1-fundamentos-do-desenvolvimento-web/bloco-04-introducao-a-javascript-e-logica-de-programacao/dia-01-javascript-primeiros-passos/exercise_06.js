let piece = 'king';
piece = piece.toLocaleLowerCase();

switch (piece) {
  case 'king':
    console.log('move one square in any direction');
    break;
  case 'queen':
    console.log('move diagonally, horizontally, or vertically any number of squares');
    break;
  case 'rook':
    console.log('move horizontally or vertically any number of squares');
    break;
  case 'bishop':
    console.log('move diagonally any number of squares');
    break;
  case 'knight':
    console.log('move in an ‘L’ shape’: two squares in a horizontal or vertical direction, then move one square horizontally or vertically');
    break;
  case 'pawn':
    console.log('move vertically forward one square, with the option to move two squares if they have not yet moved');
    break;
  default:
    console.log('error 404 not found');
    break;
};