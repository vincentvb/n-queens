/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var indexes = []  
  var count = n;
  var row = [];
  var board = [];
  for (var i = 0; i < n; i++){
    row.push(0);
  }
  for(var j = 0; j < n; j++) {
    board.push(row);
  }
 

  var placeRook = function (currentSpot, currentBoard, rowNum) {
    //start at row 1 by iterating through first row of board
    //begin at first index and recurse, with new currentSpot at row1[currentSpot + 1]
    //if rowNum === n
      //return board
    //loop through currentRow and for each index check if hasAnyRookConflicts is true
      //if true 
        //make board[currentRow][i] === 1 
        //recursively call placeRook, passing in rowNum + 1, row1[currentSpot + 1], and board to keep track
      //if false
        //return

  }
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
