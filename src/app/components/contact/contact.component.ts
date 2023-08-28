import { Component,OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  userName:string;
  users;
  constructor(private userService:UserService){

  }

  ngOnInit(): void {
    this.userName=this.userService.userName;
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers().subscribe(res=>{
      console.log(res);
      this.users=res;
    });
  }
}
