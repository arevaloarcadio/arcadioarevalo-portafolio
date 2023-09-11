import { Router } from "express"
import { sendMessage } from '../controllers/MessageController'
import { createMessageSchema } from '../validations'
import { checkSchema } from 'express-validator';

const messagesRouter = Router()

messagesRouter.post('/', checkSchema(createMessageSchema), sendMessage)

export default messagesRouter;
