# simpleMessengerApi

## Overview

In this repo I have a simple messanger api that's built using Typescript and Open API Specification. The api contains 3 endpoints. You can access the api specification on **swaggerhub.com** [here](https://app.swaggerhub.com/apis/milad-pers/simpleMessengerApi/1.0.1).

## How to run the application

The application uses **Node v14.17.3** runtime and I have created a script to install dependencies, transpile and run the application by running (***assuming you have node installed***)
```
npm start
```

## How to test the API
Once you have successfully run the application, in a browser you can navigate to [http://localhost:3001/api-docs/](http://localhost:3001/api-docs/) and you should see a swagger UI. Here you can test the api endpoints by running requests using the UI for ex. to test the **/recentMsgs/:recipientId** endpoint do the following 
1. Click on the route in the web browser
2. Before clicking on the **Try it out** button on the right side you can familiarize yourself with the endpoint by reading its description and get to know its path and query parameters. You can also see a successful JSON response example.
3. Once you click on the **Try it out** button you should see a blue **Execute** button. You can now enter all the required path and query params and click execute. The application has a "data store" that's populated with few records for testing. To test you can enter **987** for the **recipientId** and leave the limit **false** then click the **Execute** button. Now you can examine the response below. If you would like you can change the limit value to **true** and examine the difference between the two responses.
4. Following the same steps you can test the other two endpoints. I would suggest testing the **POST** endpoint then one of the **GET** endpoints to retrieve your posted message :blush:.

## Implementation details

My first thoughts around implementing this api was to use docker's [localstack](https://hub.docker.com/r/localstack/localstack) to initialize a dynmodb table as the data store (future work 🤞). However, for the sake of time I have decided to us a map data structure as my data store. The map holds recipients message with the key being the recipient id and the values are an array of the recipient messages. ex.
```javascript
{
        messages: Map(3) {
            123 => [ [Message], [Message] ],
            456 => [ [Message] ],
            987 => [ [Message], [Message], [Message] ]
        }
    }
```
The messages structure is 
```javascript
 {
        senderId: 456,
        messageBody: "This's a test message from senderId 456 to reciepientId 123",
        date: 1617322338761 //Epoch time
    }
```
The POST endpoint assumes a recieved message is the latest from a sender and its added to the front of the array of messages for the recipient 