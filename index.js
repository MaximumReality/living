const { Client, GatewayIntentBits, EmbedBuilder, Partials, REST, Routes } = require('discord.js');

// 1. INITIALIZE THE BUREAU INTERFACE
const client = new Client({ 
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMembers 
  ],
  partials: [Partials.GuildMember]
});

// 2. DEFINE THE SECTOR COMMANDS
const commands = [
  {
    name: 'scan',
    description: 'Detects Chaos or Beauty in the current sector',
  },
  {
    name: 'azul',
    description: 'Gets a quantum calculation from the Observer',
  },
  {
    name: 'compliance',
    description: 'Checks the Bureau stabilization index',
  }
];

// 3. REGISTER COMMANDS WITH THE GRID (OVERSIGHT)
const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('◈ STARTING SLASH COMMAND REGISTRY...');
    // Replace CLIENT_ID with your bot's ID from the Developer Portal
    await rest.put(
      Routes.applicationCommands('1493245074585423882'), 
      { body: commands },
    );
    console.log('◈ COMMANDS SYNCHRONIZED SUCCESSFULLY.');
  } catch (error) {
    console.error('⬡ REGISTRY ERROR:', error);
  }
})();

// 4. BOOT SEQUENCE
client.once('ready', () => {
  console.log(`◈ BUREAU UPLINK ESTABLISHED: ${client.user.tag} ONLINE ◈`);
  
  // Rotating statuses for maximum reality immersion
  const sectors = ['Lqliâa Sector', 'Maximum Reality Grid', 'Neural Interfaces'];
  setInterval(() => {
    const sector = sectors[Math.floor(Math.random() * sectors.length)];
    client.user.setActivity(sector, { type: 3 }); 
  }, 60000);
});

// 5. AUTOMATED ONBOARDING (WELCOME)
client.on('guildMemberAdd', async (member) => {
  // Replace with your #report_to_public_uplink ID
  const welcomeChannelId = '1345163155792236636'; 
  const channel = member.guild.channels.cache.get(welcomeChannelId);

  if (channel) {
    const welcomeEmbed = new EmbedBuilder()
      .setColor('#00ff88')
      .setTitle('◈ NEW AGENT SYNCHRONIZED')
      .setThumbnail(member.user.displayAvatarURL())
      .setDescription(`Welcome, ${member}! Your signal is now active in the **Maximum Reality Hub**.`)
      .addFields(
        { name: '⬡ STATUS', value: 'UNVERIFIED AGENT', inline: true },
        { name: '⬡ ASSIGNMENT', value: 'Report for sector clearance.', inline: true }
      )
      .setFooter({ text: 'COMPLIANCE IS BEAUTY // THE OVERSIGHT IS WATCHING' });

    channel.send({ content: `Attention, ${member}:`, embeds: [welcomeEmbed] });
  }
});

// 6. SLASH COMMAND LOGIC
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'scan') {
    const results = ['CHAOS DETECTED', 'BEAUTY DETECTED', 'GRID NEUTRAL'];
    const result = results[Math.floor(Math.random() * results.length)];
    await interaction.reply(`◈ **SCANNING SECTOR...** Result: \`${result}\``);
  }

  if (interaction.commandName === 'azul') {
    await interaction.reply('◈ **AZUL THE OBSERVER:** "The quantum decay suggests you should probably shield your feet."');
  }

  if (interaction.commandName === 'compliance') {
    const index = (Math.random() * 10).toFixed(2);
    await interaction.reply(`◈ **BUREAU STABILIZATION INDEX:** ${index}%`);
  }
});

// 7. MANUAL OVERRIDE (OLD SCHOOL COMMANDS)
client.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.content === '!status') {
    message.reply('⬡ STATUS: COMPLIANCE IS BEAUTY. GRID STABLE.');
  }
});

// 8. LOG INTO THE VAULT
client.login(process.env.DISCORD_TOKEN);
