import { Component,OnInit  } from '@angular/core';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  implements OnInit  {

  constructor(private map:ServicesService) {}
  
  ngOnInit() {
    this.map.buildMap();
  }

}