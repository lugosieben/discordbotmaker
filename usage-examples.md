# Usage Examples

## Create the Bot Instance

```js
const Botmaker = require('botmakerdiscord'); // Import the package
const client = new Botmaker.Bot({ // Creates an bot instance
    token: 'my-token-here', // Put your bot token here
    prefix: '!' // Put your bot prefix here (How every command starts)
})
```
#### Options:
`token` Required, Login in your Bot
`prefix` Required, Prefix for your Bot Commands
`DisableMessageNotifications` Optional, disables the default message notifications in terminal. Alias: `dmn`, `DisableMessageNotis`

## Do something at a message event

```js
client.events.on('message', message => { // Listen for message event
    // Do something...
})
```

## Listen for Commands / Test Command

```js
client.events.on('command', async (message, cmd, args) => { // Waits for Command (Message starts with prefix)
    if(cmd === 'test') {
    message.send('I sent all your args in your dms!') // Sends an message to channel
    message.author.send(args.join(' ') || 'You did not send any args!') // Sends args to dms
    }
})
```

#### Properties:
`message.content` Gives content of message\
`message.author` Gives author of message


## Create and send an Embed at command

```js
client.events.on('command', async (message, cmd, args) => { // Waits for Command
    if(cmd === 'embed') { // Checking if command is 'embed'
        let embed = new Embed({ title: 'Embed', description: 'This is an Embed!', color: 'RED' }) // Creates an Embed with properties
    }
}
```
## More examples are comming soon...