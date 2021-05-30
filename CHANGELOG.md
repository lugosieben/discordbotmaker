# Changelog

__Newest Version:__

## 0.8.0

- Added status settings
    - Can be set in bot instance creation with `prefix: {[name: "with discordbotmaker", type: "playing"]}`
        - Supports any status names in form of strings
        - Supports following status types: `playing`, `watching`, `streaming`, `listening`
        - Supports multiple statuses which will change every 10 seconds: `prefix: {[name: "first status", type="streaming"],[name: "second status", type="watching"]}` (Will work in 0.8.0 final release)
- Embeds
    - Made an possiblity to `channel.send(embed)` and `message.send(embed)`
- Added an wiki for the module, which can be found at the github page.
    - More Categories will be added in the next updates.
- Issue fixes
    - README.md usage example now has an prefix, which is required.

## 0.7.2 Small Update

- Corrected the wrong module names in README.md and usage-examples.md.

#### 0.7.1

- Started to developing the module again
- Embeds
    - Repaired Embeds
    - Added possibility to `myEmbed.send(myChannel)`
    - Added Embed example in `./usage-examples`

#### 0.7.0

- Bug fixes
    - message.send() working again
    - Embeds error messages fixed
- Added command event
    - Triggers at message starts with prefix
    - Properties: 
        - message (default message)
        - command (word behind prefix)
        - args (arguments of message)



_No changelogs found..._