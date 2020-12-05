const { Client } = require('discord.js');
// const { Embed } = require('./objects/embed');
const { Message } = require('./objects/message');
const { User } = require('./objects/user');
const { Channel } = require('./objects/channel')
const Emitter = require('emitjs');

class Bot {
    constructor(config) {
        if(!config.token) throw new TypeError('No token given for bot')
        if(!config.prefix) throw new TypeError('No prefix given for bot')

        this.token  = config.token;
        this.client = new Client();
        this.prefix = config.prefix;
        this.events = new Emitter()
        
        this.client.login(this.token)
        this.client.on('ready', () => {
            console.log('Your bot ' + this.client.user.tag + ' is online now!')
        })
        this.client.on('message', async message => {
            const author = new User(message.author)
            const channel = new Channel(message.channel)
            const msg = new Message(author, channel, message.toString())
            this.events.emit('message', msg)
            if(config.disableMessageNotis || config.disableMessageNotifications || config.dmn) this.notis = false
            else this.notis = true
            if(this.notis) console.log('[Recieved Message] By ' + message.author.tag + ' with ID ' + message.author.id + ': ' + message.toString())
        })
    }
}

module.exports = {
    Bot,
    Message,
    User
}