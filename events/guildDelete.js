
module.exports = async (client, guild) => {
    // The bot isn't in the server anymore, so get rid of the config
    // await client.guildSettings.destroy({where: {guildID: guild.id}})
    //     .then(() => {})
    //     .catch(error => { client.log('ERROR',`Broke in guildDelete(settings) ${error}`); });

    // Log that the bot left
    client.log('GuildDelete', `I left ${guild.name}(${guild.id})`, 'Log', 'diff', '-');

    // Sets the status as the current server count and help command
    // const playingString =  `${client.config.prefix}help ~ ${client.guilds.size} servers`;
    // client.user.setPresence({ game: { name: playingString, type: 0 } }).catch(console.error);
};

