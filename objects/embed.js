const { MessageEmbed } = require('discord.js')

class Embed {
    constructor(config) {

        this.isEmbed = true

        if(!config.title) throw new TypeError('Your embed must contain an title!')
        this.title = config.title
        if(config.description) this.description = config.description
        if(config.color) this.color = config.color
        if(config.footer) this.footer = config.footer
        if(config.thumbnail) this.thumbnail = config.thumbnail
        if(config.img) this.img = config.img
        if(config.image) this.img = config.image

        this.embed = new MessageEmbed()
            .setTitle(this.title)
        if(this.description) this.embed.setDescription(this.description)
        if(this.color) this.embed.setColor(this.color)
        if(this.footer) this.embed.setFooter(this.footer)
        if(this.thumbnail) this.embed.setThumbnail(this.thumbnail)
        if(this.img) this.embed.setImage(this.img)

        this.send = function send(channel) {
            if(!channel) throw new TypeError('Error: There wasn\'t a channel specified for this embed.')
            channel.send(this.embed)
        }
    }
}

module.exports = {
    Embed
}

// CHANGELOG [embed.js]
// Released in version 0.7.1, now working properly again. --> CHANGELOG.md
//
// Made it possible to create and send Embeds.
// Example in ./using-examples.md