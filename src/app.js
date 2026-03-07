const tutor = require('./tutor');

module.exports = {
  start: function() {
    console.log("AI Math Tutor started!");
    tutor.init();
  }
}