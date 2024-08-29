import http from 'http';
import * as dotenv from 'dotenv';
import app from './src/app';

dotenv.config();


// Lendo o port para iniciar o servidor com o `.env`, caso contrário, utilize o padrão port 3000
const PORT = process.env.API_URL || 3000;


/**
 * Criar servidor HTTP.
 */
const server = http.createServer(app);


/**
 * Ouvir no port fornecido, em todas as interfaces de rede.
 */
server.listen(PORT);


/*
 * O 'Event Listener' para o evento de erro do servidor HTTP.
 */
server.on('error', (err: NodeJS.ErrnoException) => {
	if (err.syscall !== 'listen') {
		throw err;
	}

	switch (err.code) {
		case 'EACCES':
			console.error(`🦸🏻 Port ${PORT} requires elevated privileges`);
			process.exit(1);
			break;
		case 'EADDRINUSE':
			console.error(`🛑 Port ${PORT} is already in use`);
			process.exit(1);
			break;
		default:
			throw err;
	}
});


/**
 * O 'Event Listener' para o evento "listening" do servidor HTTP.
 */
server.on('listening', () => {
	console.log(`🤖🧙‍♂️ Ai sim!!, servidor funcionando no port http://localhost:${PORT}`);
});
