class Message {
    constructor (author, channel, content) {
        if(!author) throw new TypeError('No author got for message')
        if(!channel) throw new TypeError('No channel got for message')
        this.content = content;
        this.author  =  author;
        this.channel = channel;
        this.send = function send() {
            this.channel.send(this.content)
        }
    }
}

module.exports = {
    Message
}