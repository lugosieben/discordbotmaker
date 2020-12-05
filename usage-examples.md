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
client.on('message', message => { // Listen for message event
    // Do something...
})
```

#### Properties:
`message.content` Gives content of message\
`message.author` Gives author of message

## More examples are comming soon...