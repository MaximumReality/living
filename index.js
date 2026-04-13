const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] 
});

client.once('ready', () => {
  console.log('◈ BUREAU UPLINK ESTABLISHED: DIRECTOR ONLINE ◈');
});

// Simple command listener
client.on('messageCreate', message => {
  if (message.content === '!status') {
    message.reply('⬡ STATUS: COMPLIANCE IS BEAUTY. GRID STABLE.');
  }
});

// Use the secret token from the vault
client.login(process.env.DISCORD_TOKEN);
