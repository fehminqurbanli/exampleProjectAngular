import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title:string='Example Project';

  constructor(){}
  ngOnInit(): void {
    this.print();
  }

  print(){
    this.title='qwer';
  }
}
