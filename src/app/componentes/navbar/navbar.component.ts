import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//   const hamburger = document.querySelector('.hamburger');
//   hamburger.onclick = function(){
//     let navBar = document.querySelector('.nav-bar');
//     navBar.classList.toggle('active');
// }

onClick(): void {
  const hamburger = document.querySelector('.hamburger');
  this.onClick = function(){
    let navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('active');
  }
}

}
