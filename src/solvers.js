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
  var newBoard = new Board({n:n})
  var initialBoard = newBoard.attributes
  var solution = [];

  var placeRook = function (rowNum){
    if (rowNum > n - 1) {
        solution = newBoard.rows()
        return;
    }
    var rowNum = rowNum || 0
    for (var i = 0; i < initialBoard.n; i++) {
      initialBoard[rowNum][i] = 1
      if (newBoard.hasAnyRooksConflicts()) {
        initialBoard[rowNum][i] = 0
      }
      else {
        placeRook(rowNum + 1)
      }
    }
  }
  placeRook(0)
   //fixme


  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var currentBoard = new Board({n:n})
  var solutionCount = 0
  countRooks = function( currentRow) {
    if (currentRow === n) {
      solutionCount++
      return;
    }
    
    var rows = currentBoard.attributes
    for (var i = 0; i < n; i++) {
      rows[currentRow][i] = 1
      if (!currentBoard.hasAnyRooksConflicts()) {
        countRooks(currentRow + 1)
      }
        rows[currentRow][i] = 0
    }
  }
  countRooks(0)

  return solutionCount; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var newBoard = new Board({n:n})
  var initialBoard = newBoard.attributes
  var solution = [];

  var placeRook = function (rowNum){
    if (rowNum > n - 1) {
        solution = newBoard.rows()
        return;
    }
    var rowNum = rowNum || 0
    for (var i = 0; i < initialBoard.n; i++) {
      initialBoard[rowNum][i] = 1
      if (newBoard.hasAnyQueensConflicts()) {
        initialBoard[rowNum][i] = 0
      }
      else {
        placeRook(rowNum + 1)
      }
    }
  }
  placeRook(0)
   //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var currentBoard = new Board({n:n})
  var solutionCount = 0
  countRooks = function( currentRow) {
    if (currentRow === n) {
      solutionCount++
      return;
    }
    
    var rows = currentBoard.attributes
    for (var i = 0; i < n; i++) {
      rows[currentRow][i] = 1
      if (!currentBoard.hasAnyQueensConflicts()) {
        countRooks(currentRow + 1)
      }
        rows[currentRow][i] = 0
    }
  }
  countRooks(0)

  return solutionCount; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
};
