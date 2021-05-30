const Dicord = require('discord.js')

class Channel {
    constructor (data) {
        this.name = data.name
        this.id = data.id
        this.type = data.type
        this.destroy = function destroy() {
            data.delete()
            .catch(err => {console.log('Looks like channel ' + this.name + ' with id ' + this.id + ' can\'t get deleted. Either bot don\'s has permissions or the channel doesn\'t exist.')})
        }
        this.send = function send(message) {
            if(!message) throw new TypeError('You don\'t gave a message to send!')
            if(!message.isEmbed) data.send(message)
            else data.send(message.embed)
        }
    }
}

module.exports = {
    Channel
}