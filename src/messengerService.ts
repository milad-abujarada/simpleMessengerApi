import _ from 'lodash';

import { Message } from './interfaces';
import MessagesStore from './dataStore';


export default class MessengerService {

    static getRecentMsgs(recipientId: number, limit?: boolean): Message[]|[] {
        const messages = MessagesStore.messages.get(recipientId);
        return MessengerService.applyLimit(messages,limit)
    }

    static getRecentMsgsBySender(recipientId: number, senderId: number, limit?: boolean): Message[]|[] {
        const messages = MessagesStore.messages.get(recipientId);
        const messagesBySender = messages?.filter((message: { senderId: number; }) => message.senderId == senderId);
        return MessengerService.applyLimit(messagesBySender, limit);
    }

    static saveMessage(recipientId: number, message: Message): boolean {
        let messages = MessagesStore.messages.get(recipientId);
        if(_.isUndefined(messages)) {
            messages = [message];
        } else {
            messages?.unshift(message);//assuming message is newer than existing ones for recipient
        }
        const result = MessagesStore.messages.set(recipientId, messages);
        return result.size > 0
    }

    
    private static recentHundredMessages(messages: Message[]): Message[] {
        const result = messages.length <= 100 ? messages : messages.slice(-100);
        return result;
    }

    private static recentThirtyDaysMessages(messages: Message[]): Message[] {
        const nowEpoch = new Date().getTime();
        return messages.filter(message => message.date >= MessengerService.calculateThirtyDaysbackDate(nowEpoch))
    }

    private static calculateThirtyDaysbackDate(nowEpoch: number):number {
        
        const thirtyDaysMillisec = 2592000000;
        return nowEpoch - thirtyDaysMillisec
    }

    private static applyLimit(messages?: Message[], limit?: boolean): Message[]|[] {
        if(_.isUndefined(messages)) {
            return []
        }
        if (limit) {
            return MessengerService.recentHundredMessages(messages);
        } 
        return MessengerService.recentThirtyDaysMessages(messages);
    }
}