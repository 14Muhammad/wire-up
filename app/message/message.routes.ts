import {RouterModule, Routes}          from '@angular/router';
import {MessageListComponent} from "./message-list.component";
import {MessageDetailComponent} from "./message-detail.component";


export const MessageRoutes: Routes = [
    {path: 'messages', component: MessageListComponent},
    {path: 'message/:id', component: MessageDetailComponent}
];

export const MessageRouting = RouterModule.forChild(MessageRoutes);
