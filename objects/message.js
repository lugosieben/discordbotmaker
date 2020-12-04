class Message {
    constructor (author, channel, content) {
        if(!author) throw new TypeError('No author got for message')
        if(!channel) throw new TypeError('No channel got for message')
        this.content = content;
        this.author  =  author;
        this.channel = channel;
        this.send = function send() {
            this.channel.send(this.content)
            .catch(err => {console.error('Something went wrong while sending message with content ' + content + '\n' + err)})
        }
    }
}

module.exports = {
    Message
}