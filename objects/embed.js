const { MessageEmbed } = require('discord.js')

class Embed {
    constructor(config) {
        if(!config.title) throw new TypeError('Your embed must contain an title!')
        this.title = config.title
        if(config.description) this.description = config.description
        if(config.color) this.color = config.color
        if(config.footer) this.footer = config.footer
        if(config.thumbnail) this.thumbnail = config.thumbnail
        if(config.img) this.img = config.img
        if(config.image) this.img = config.image

        this = new MessageEmbed()
            .setTitle(this.title)
        if(this.description) BaseEmbed.setDescription(this.description)
        if(this.color) BaseEmbed.setColor(this.color)
        if(this.footer) BaseEmbed.setFooter(this.footer)
        if(this.thumbnail) BaseEmbed.setThumbnail(this.thumbnail)
        if(this.img) BaseEmbed.setImage(this.img)
    }
}

module.exports = {
    Embed
}