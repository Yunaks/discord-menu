const { Client } = require('discord.js');
const axios = require('axios');
const client = new Client({ intents: 32767 });

client.on('ready', () => {
 console.log('bot açıldı'); 
});

client.on('messageCreate', (message) => {
	if(message.content === '!deneme') {
		message.reply({
			content: 'testing',
			components:[{ type: 1, components: [{
				type: 2, custom_id: 'button', label: 'cilck me', style: 'PRIMARY',
			}] }],
		});
	}
});

client.on('interactionCreate', async (interaction) => {
	await axios({
		method: 'POST',
		url: `https://discord.com/api/interactions/${interaction.id}/${interaction.token}/callback`,
		headers: {
			Authorization: `Bot ${client.token}`,
		},
		data: {
			type: 9,
			data: {
				title: 'Yunak Test',
				custom_id: 'test',
				components: [
					{
						type: 1,
						components: [
							{
								type: 4,
								custom_id: 'testt',
								label: 'how are you?',
								style: 1,
								min_length: 2,
								max_length: 400,
								required : true,
							},
						],
					},
				],
			},
		},
	});
});

client.login(" token ");
