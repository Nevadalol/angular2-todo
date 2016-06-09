import { Component } from 'angular2/core';
import { TodoModuleComponent } from '../../todo';

@Component({
  selector: 'my-app-module',
  directives: [TodoModuleComponent],
  templateUrl: 'src/modules/app/templates/module.template.html'
})
export class AppModuleComponent {

}