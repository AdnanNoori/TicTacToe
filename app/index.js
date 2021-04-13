var board = [
              [0, 0, 0],
              [0, 0, 0],
              [0, 0, 0]
            ];

var currentMove = 0;
var updateValue = (event) => {
  console.log(event.target)
  // if (currentMove) {
    //   currentMove = 0;

    // }
}

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 3; j++) {
    document.getElementById(`${i}${j}`).addEventListener("click", updateValue);
  }
}

var checkWinner = (board, moveLocation) => {
  var count = 0;
  for (var i = 0; i < 2; i++) {
    if (board[moveLocation[0]][i] !== board[moveLocation[0]][i+1]) {
      break;
    } else {
      count++;
    }
  }
  if (count === 2) {
    return true
  }
  count = 0;
  for (var i = 0; i < 2; i++) {
    if (board[i][moveLocation[1]] !== board[i + 1][moveLocation[1]]) {
      break;
    } else {
      count++;
    }
  }
  if (count === 2) {
    return true
  }

  if ((moveLocation[0] === 0 && moveLocation[1] === 0) || (moveLocation[0] === 1 && moveLocation[1] === 1) || (moveLocation[0] === 1 && moveLocation[1] === 1)) {

  }

  if ((moveLocation[0] ===  && moveLocation[1] === 0) || (moveLocation[0] === 1 && moveLocation[1] === 1) || (moveLocation[0] === 1 && moveLocation[1] === 1)) {

  }

}