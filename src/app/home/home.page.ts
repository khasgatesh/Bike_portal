import { Component } from '@angular/core';
import{Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email:any
  password:any
  constructor(private router:Router) {}
login(){
  this.router.navigateByUrl('/main')
}
}
