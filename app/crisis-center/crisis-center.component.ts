import { Component }            from '@angular/core';
import { ROUTER_DIRECTIVES, Router }    from '@angular/router';

import { CrisisService }        from './crisis.service';
import {AuthService} from "../auth.service";

@Component({
  template:  `
    <h2>CRISIS CENTER</h2>
    <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],
  providers:  [CrisisService]
})
export class CrisisCenterComponent {

  constructor(public authService: AuthService, public router: Router){
    if (!this.authService.isLoggedIn)
      this.router.navigate(['/login']);
  }

}
