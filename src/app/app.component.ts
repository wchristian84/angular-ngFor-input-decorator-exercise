import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-ngFor-input-decorator-exercise';
  users: Array<{username: string, id: number}> = [{username: 'Wade', id: 1}, {username: 'Kerri', id: 2}, {username: 'Silas', id: 3}];
}


