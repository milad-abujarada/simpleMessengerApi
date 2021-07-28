import { MessagesStore } from './interfaces';

const messageStore: MessagesStore = {
    messages: new Map([
        [123, [
                {
                    senderId: 987,
                    reciepientId: 123,
                    messageBody: "This's a test message from senderId 987 to reciepientId 123",
                    date: new Date()
                },
                {
                    senderId: 456,
                    reciepientId: 123,
                    messageBody: "This's a test message from senderId 456 to reciepientId 123",
                    date: new Date()
                }
            ]
        ],
        [456, [
                {
                    senderId: 123,
                    reciepientId: 456,
                    messageBody: "This's a test message from senderId 123 to reciepientId 456",
                    date: new Date()
                }
            ]
        ],
        [987, [
                {
                    senderId: 123,
                    reciepientId: 987,
                    messageBody: "This's a test message from senderId 123 to reciepientId 987",
                    date: new Date()
                },
                {
                    senderId: 123,
                    reciepientId: 987,
                    messageBody: "This's a test message from senderId 123 to reciepientId 987",
                    date: new Date()
                },
                {
                    senderId: 123,
                    reciepientId: 987,
                    messageBody: "This's a test message from senderId 123 to reciepientId 987",
                    date: new Date()
                }
            ]

        ]
    ])
}

export default messageStore;