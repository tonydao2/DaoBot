import mongoose from "mongoose";

const { Client, Events, GatewayIntentBits } = require('discord.js');
const token = process.env.DISCORD_TOKEN;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient: any) => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

async function main() {
  // Connect to MongoDB
  await mongoose.connect(process.env.MONGO_URI!);

  // // Log in to Discord with client's token
  await client.login(token);
}