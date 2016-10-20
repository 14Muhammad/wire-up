import { Injectable } from '@angular/core';

@Injectable()
export class WUModalService {
  activate: (message?: string, title?: string) => Promise<boolean>;
}
