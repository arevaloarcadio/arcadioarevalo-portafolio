import { Message } from '../models'
import { validateRequest, paginatedQueryResponse,sendMail } from '../utils'


export const sendMessage = async (req, res) => {
    const reqErrors = await validateRequest(req, res);

    if (!reqErrors) {

        const { email, name, subject, message } = req.body;

        const model = await Message.query().insert({ email, name, subject, message })
        
        console.log(model)

        const mailerData = {
            message: {
                to: 'arevaloarcadio.96@gmail.com',
            },
            template: 'sendMessage',
            subject: 'Nuevo Mensaje',
            locals: {
                name: name,
                email: email,
                subject: subject,
                message: message
            }
        };

        await sendMail(mailerData, res)

        return res.json({
            success: true
        })
    }
}
