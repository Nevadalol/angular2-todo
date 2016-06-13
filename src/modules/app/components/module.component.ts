import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { TodoModuleComponent } from '../../todo';

@Component({
  selector: 'my-app-module',
  directives: [TodoModuleComponent, ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'src/modules/app/templates/module.template.html'
})
@RouteConfig([{
  path: '/todo/...',
  name: 'Todo',
  component: TodoModuleComponent,
  useAsDefault: true
}])
export class AppModuleComponent {}