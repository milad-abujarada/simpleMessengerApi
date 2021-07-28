import _ from 'lodash';

import { Message } from './interfaces';
import MessagesStore from './dataStore';


export default class MessengerService {

    static getRecentMsgs(recipientId: number, limit?: boolean): Message[]|undefined {
        //need to implement the logic for the limit and date sorting
        return MessagesStore.messages.get(recipientId);
    }

    static saveMessage(message: Message): boolean {
        let messages = MessagesStore.messages.get(message.recipientId);
        console.log(messages)
        if(_.isUndefined(messages)) {
            messages = [message]
        } else {
            messages?.push(message)
        }
        const result = MessagesStore.messages.set(message.recipientId, messages as Message[]);
        return result.size > 0
    }
}