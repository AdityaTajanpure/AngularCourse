import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-tutorial1',
  templateUrl: './tutorial1.component.html',
  styleUrls: ['./tutorial1.component.css']
})
export class Tutorial1Component implements OnInit {
  username?:string
  password?:string

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.username === "abc" && this.password === "abc" ?
    alert("Login Successful") 
    :
    alert ("Login Fail");
  }
  focusoutHandler(event: any, field: string) {
    field === "username" ?
      this.username = event.target.value
    :
      this.password = event.target.value;
  }

}