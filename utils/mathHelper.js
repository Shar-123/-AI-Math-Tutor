module.exports = {
  solve: function(question) {
    try {
      return eval(question); // simple eval for math expressions
    } catch (e) {
      return "Invalid question";
    }
  }
}