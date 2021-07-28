import express, { Request, Response } from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import MessengerService from './messengerService';
import { Message } from './interfaces';

const path = `${ process.cwd() }/dist`;
const swaggerDocument = YAML.load(`${ path }/messenger_api_spec.yml`);
const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/recentMsgs/:recipientId', (req: Request, res: Response) => {
    const recipientId = parseInt(req.params.recipientId);
    const limit = req.query.limit == 'true';
    res.status(200).send(MessengerService.getRecentMsgs(recipientId, limit));
});

// app.get('/recentMsgsBySender/:recipientId', (req: Request, res: Response) => {
//     console.log(req)
//     res.send(MessengerService.getRecentMsgs(123));
// })

app.post('/message/:recipientId', express.json(),(req: Request, res: Response) => {
    const recipientId = parseInt(req.params.recipientId);
    MessengerService.saveMessage(recipientId, req.body)
    res.status(201).send('success')
});

app.listen(3001, () => console.log("server running on port 3001"));