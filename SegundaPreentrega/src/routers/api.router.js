import {Router, json} from 'express';

export const apiRouter = Router();
apiRouter.use(json ())
apiRouter.use('/vinos' , vinosRouter)