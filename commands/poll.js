exports.run = (client, message) => {
    // Gets the options
    let messageArgs = message.content.slice(6);
    let args = messageArgs.split(",");
    args = args.map((e) => e.trim());

    console.log(args);

	// const newMsg = await message.channel.send({embed: { "fields" : [ "name": "Poll", "value": `${args[0]}` ]}});
    // const newMsg = await message.channel.send("blah");
	// await newMsg.react("blah");
	// await newMsg.react("blah2");
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 3,
    type: 'wip'
};

exports.help = {
    name: 'poll',
    description: 'Starts a poll, with comma separated options',
    usage: 'poll [Poll Question etc], [option1], [option2], ...'
};
