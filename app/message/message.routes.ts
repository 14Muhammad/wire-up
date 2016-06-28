import { RouterConfig }          from '@angular/router';
import {MessageListComponent} from "./message-list.component";
import {MessageDetailComponent} from "./message-detail.component";


export const MessageRoutes: RouterConfig = [
    {path: 'messages', component: MessageListComponent},
    {path: 'message/:id', component: MessageDetailComponent}
];
