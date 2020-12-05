# Usage Examples

## Create the Bot Instance

```js
const Botmaker = require('discord-botmaker'); // Import the package
const client = new Botmaker.Bot({ // Creates an bot instance
    token: 'my-token-here', // Put your bot token here
})
```
#### Options:
`token` Required, Login in your Bot\
`DisableMessageNotifications` Optional, disables the default message notifications in terminal. Alias: `dmn`

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

## More examples are comming soon...