import { bootstrap }    from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app.component';
import { HTTP_PROVIDERS } from '@angular/http';
import {APP_ROUTER_PROVIDERS} from './app.routes';
bootstrap(AppComponent,[
        HTTP_PROVIDERS,
        APP_ROUTER_PROVIDERS,
        disableDeprecatedForms(),
        provideForms()])
    .catch(err => console.error(err));
