import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent {
  router:Router;
  constructor(router:Router){
    this.router=router;
  }
  setFilter(filter:string){
    sessionStorage.setItem('filter',filter);
    this.router.navigate(['/Products']);
  }
}
