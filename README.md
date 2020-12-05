# Discord Bot Maker

Discord Bot Maker is an module that lets you create an Discord Bot easily.

## Installation

Use [`npm`](https://npmjs.com) to download Discord Bot Maker

```bash
$ npm install discordbotmaker
```

## Usage

```js
const Botmaker = require('discord-botmaker'); // Import the package
const client = new Botmaker.Bot({ // Creates an bot instance
    token: 'my-token-here', // Put your bot token here
    dmn: true // Disables default message notifications in terminal
})

client.events.on('message', message => { // Wait for a message
    console.log(message.content) // Logs message in console
})
```
See other Usage Examples [here](./usage-examples.md).

## License
[MIT](https://choosealicense.com/licenses/isc/)