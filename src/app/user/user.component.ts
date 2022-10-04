import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('inputUsers') getUsers: Array<{username: string, id: number}> = [];

  constructor() { }

  ngOnInit(): void {
  }

}
