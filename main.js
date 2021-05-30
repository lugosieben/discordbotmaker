const { Client } = require('discord.js');
// const { Embed } = require('./objects/embed');
const { Message } = require('./objects/message');
const { User } = require('./objects/user');
const { Channel } = require('./objects/channel')
const Emitter = require('emitjs');

class Bot {
    constructor(config) {
        if(!config.token) throw new TypeError('No token given for bot') // Config error messages
        if(!config.prefix) throw new TypeError('No prefix given for bot')

        this.token  = config.token; // Bot settings
        this.client = new Client();
        this.prefix = config.prefix;
        this.events = new Emitter()

        if (config.status) {
            this.status = config.status;
            if(!this.status.name) throw new TypeError('No status name given for bot')
            if(!this.status.type) throw new TypeError('No status type given for bot')
            client.user.setActivity(this.status.name, {
                type: this.status.type.toUpperCase(),
                url: "https://www.twitch.tv/#"
              });
        }
        
        this.client.login(this.token)
        this.client.on('ready', () => {
            console.log('Your bot ' + this.client.user.tag + ' is online now!') // Online Notification
        })

        // Event Handling with `emitjs`
        this.client.on('message', async message => {
            if(message.author.bot) return; // Checks if author is bot
            const author = new User(message.author) // Message Author
            const channel = new Channel(message.channel) // Message Channel
            const msg = new Message(author, channel, message.toString()) // Message It-Self
            this.events.emit('message', msg) // Emits message recieved event
            let args = message.content.slice(config.prefix.length).split(' ');
            let command = args.shift().toLowerCase();
            if(msg.content.startsWith(this.prefix)) this.events.emit('command', msg, command, args)
            if(config.disableMessageNotis || config.disableMessageNotifications || config.dmn) this.notis = false
            else this.notis = true
            if(this.notis) console.log('[Recieved Message] By ' + message.author.tag + ' with ID ' + message.author.id + ': ' + message.toString()) // Message Notis
        })
        this.client.on('ready', () => {
            this.events.emit('ready') // Emits ready event
            this.events.emit('online') // Alias of ready event
        })
        this.client.user.setActivity("with depression", {
            type: "STREAMING",
            url: "https://www.twitch.tv/monstercat"
          });
    }
}

module.exports = {
    Bot,
    Message,
    User
}