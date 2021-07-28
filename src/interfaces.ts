/** 
 * @example
    {
        senderId: 456,
        reciepientId: 123,
        messageBody: "This's a test message from senderId 456 to reciepientId 123",
        date: 2019-05-27T11:53:32.118Z
    }
 */
interface Message {
    senderId: number,
    reciepientId: number,
    messageBody: string,
    date: Date
}

/**
 * A map of list of messages per reciepientId
 * @example
    {
        messages: Map(3) {
            123 => [ [Message], [Message] ],
            456 => [ [Message] ],
            987 => [ [Message], [Message], [Message] ]
        }
    }
 */

interface MessagesStore {
    messages: Map<number, Message[]> 
}

export {
    Message,
    MessagesStore
}