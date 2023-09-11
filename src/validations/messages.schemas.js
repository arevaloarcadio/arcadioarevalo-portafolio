export const createMessageSchema = {
    name: {
        notEmpty: {
            errorMessage: 'Ingrese el nombre'
        }
    },
    email: {
        notEmpty: {
            errorMessage: 'Ingrese el correo electrónico'
        }
    },
    subject: {
        notEmpty: {
            errorMessage: 'Ingrese el asunto'
        }
    },
    message: {
        notEmpty: {
            errorMessage: 'Ingrese el message'
        }
    }
};

