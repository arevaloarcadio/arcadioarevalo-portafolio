import { Router } from 'express';
import messagesRoutes from './messages.routes';

import { isAuthorizedMiddleware } from '../config'

const apiRouter = Router();

//apiRouter.use('/questions', isAuthorizedMiddleware, questionsRoutes)

apiRouter.use('/messages', messagesRoutes)

apiRouter.get('/', (req, res) => {
    res.sendFile('index.html', {root: './public'});
});

// Catch all other routes
apiRouter.use('/*', (req, res) => {
    res.status(404).json({
        'error': 'route not found'
    })
})



export default apiRouter;

