const { Client, GatewayIntentBits, EmbedBuilder, Partials } = require('discord.js');

const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMembers // CRITICAL: This allows the Welcome message to work
  ],
  partials: [Partials.GuildMember] // Helps the bot see members even if they haven't talked
});

// ◈ BOOT SEQUENCE
client.once('ready', () => {
  console.log(`◈ BUREAU UPLINK ESTABLISHED: ${client.user.tag} ONLINE ◈`);
  
  // Set the Director's status
  client.user.setActivity('the Maximum Reality Grid', { type: 3 }); // "Watching the Maximum Reality..."
});

// ◈ AUTOMATED ONBOARDING (WELCOME)
client.on('guildMemberAdd', async (member) => {
  // Replace this with the ID of your #report_to_public_uplink channel
  const welcomeChannelId = '123456789012345678'; 
  const channel = member.guild.channels.cache.get(welcomeChannelId);

  if (channel) {
    const welcomeEmbed = new EmbedBuilder()
      .setColor('#00ff88') // Bureau Green
      .setTitle('◈ NEW AGENT DETECTED')
      .setThumbnail(member.user.displayAvatarURL())
      .setDescription(`Welcome, ${member}! Your neural interface is now synchronized with the **Maximum Reality Hub**.`)
      .addFields(
        { name: '⬡ STATUS', value: 'UNVERIFIED AGENT', inline: true },
        { name: '⬡ ASSIGNMENT', value: 'Report to the Director for sector clearance.', inline: true }
      )
      .setFooter({ text: 'COMPLIANCE IS BEAUTY // THE OVERSIGHT IS WATCHING' });

    channel.send({ content: `Attention, ${member}:`, embeds: [welcomeEmbed] });
  }
});

// ◈ COMMAND CENTER (SLASH COMMANDS & MESSAGES)
client.on('messageCreate', message => {
  if (message.author.bot) return; // Ignore other bots

  if (message.content === '!status') {
    message.reply('⬡ STATUS: COMPLIANCE IS BEAUTY. GRID STABLE.');
  }
});

// ◈ LOG INTO THE VAULT
client.login(process.env.DISCORD_TOKEN);
