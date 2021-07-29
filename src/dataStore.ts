import { MessagesStore } from './interfaces';

const messageStore: MessagesStore = {
    messages: new Map([
        [123, [
                {
                    senderId: 987,
                    messageBody: "This's a test message from senderId 987 to reciepientId 123",
                    date: 1627523338761
                },
                {
                    senderId: 456,
                    messageBody: "This's a test message from senderId 456 to reciepientId 123",
                    date: 1627523238761
                }
            ]
        ],
        [456, [
                {
                    senderId: 123,
                    messageBody: "This's a test message from senderId 123 to reciepientId 456",
                    date: 11626523338761
                }
            ]
        ],
        [987, [
                {
                    senderId: 123,
                    messageBody: "This's a test message from senderId 123 to reciepientId 987",
                    date: 1627523336761
                },
                {
                    senderId: 123,
                    messageBody: "This's a test message from senderId 123 to reciepientId 987",
                    date: 1627522338761
                },
                {
                    senderId: 123,
                    messageBody: "This's a test message from senderId 123 to reciepientId 987",
                    date: 1617322338761
                }
            ]

        ]
    ])
}

export default messageStore;