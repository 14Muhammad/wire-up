import { Injectable } from '@angular/core';
export class Message {
    constructor(public id: number,
                public subject: string,
                public description:string,
                public to:string,
                public from:string,
                public time: string) { }
}
let MESSAGES = [
    new Message(099, 'Need of Grid','I really need help urgent sir', 'hasan', 'Ali', '28 June 2016, 10:32 pm'),
    new Message(199, 'Need of Grid','I really need help urgent sir', 'hasan', 'Ali', '28 June 2016, 10:32 pm'),
    new Message(299, 'Need of Grid','I really need help urgent sir', 'hasan', 'Ali', '28 June 2016, 10:32 pm'),
    new Message(399, 'Need of Grid','I really need help urgent sir', 'hasan', 'Ali', '28 June 2016, 10:32 pm'),
    new Message(499, 'Need of Grid','I really need help urgent sir', 'hasan', 'Ali', '28 June 2016, 10:32 pm'),
    new Message(599, 'Need of Grid','I really need help urgent sir', 'hasan', 'Ali', '28 June 2016, 10:32 pm'),
];
let messagesPromise = Promise.resolve(MESSAGES);
@Injectable()
export class MessageService {
    getMessages() { return messagesPromise; }
    getMessage(id: number | string) {
        return messagesPromise
            .then(messages => messages.filter(message => message.id === +id)[0]);
    }
}
