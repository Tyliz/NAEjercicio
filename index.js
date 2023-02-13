const logger = require('./logger');


function RetornarError() {
	try {
		const texto = 'Texto';
		if (typeof texto === 'number') {
			const numero = parseInt(texto);
			console.log(numero);
		} else
			throw new Error('El valor debe ser un número, error de introduccion de datos');
	} catch (error) {
		logger.error(error.message);
	}
}

RetornarError();
