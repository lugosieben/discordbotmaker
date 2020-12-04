class User {
    constructor (data) {
        this.username = data.username
        this.discriminator = data.discriminator
        this.tag = data.tag
        this.id = data.id
        this.isBot = data.bot
        this.lastMessageID = data.lastMessageID
        this.lastChannelID = data.lastMessageChannelID
        this.avatarURL = 'https://cdn.discordapp.com/avatars/' + this.id + '/' + data.avatar + '.webp'
        this.send = function send(message) {
            if(!message) throw new TypeError('You don\'t gave a message to send!')
            data.send(message)
        }
    }
}

module.exports = {
    User
}