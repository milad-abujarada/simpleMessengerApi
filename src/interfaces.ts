/** 
 * @example
    {
        senderId: 456,
        messageBody: "This's a test message from senderId 456 to reciepientId 123",
        date: 1617322338761
    }
 */
interface Message {
    senderId: number,
    messageBody: string,
    date: number //Epoch time
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