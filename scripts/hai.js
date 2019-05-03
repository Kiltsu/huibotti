module.exports = function(robot) {
  robot.respond(/hui/, function(msg){
    msg.reply('hai');
  })
}
