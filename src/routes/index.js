import { Router } from 'express';
import peoplesRoutes from './peoples.routes';

import { isAuthorizedMiddleware } from '../config'

const apiRouter = Router();

//apiRouter.use('/questions', isAuthorizedMiddleware, questionsRoutes)
apiRouter.use('/peoples', peoplesRoutes)

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

