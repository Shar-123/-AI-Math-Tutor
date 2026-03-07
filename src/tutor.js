const mathHelper = require('../utils/mathHelper');

module.exports = {
  init: function() {
    console.log("Welcome to AI Math Tutor!");
    const question = "5 + 7";
    const answer = mathHelper.solve(question);
    console.log(`Question: ${question}, Answer: ${answer}`);
    console.log("SkillWallet integration can track this progress here.");
  }
}