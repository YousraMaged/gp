import { Component, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css'],
  providers: [
    { provide: CarouselConfig, useValue: { interval: 3000, noPause: true, showIndicators: true } }
  ]
})
export class BusComponent implements OnInit {
  image1: any = "../../../assets/img/Transportation hero.jpg";
  image2: any = "../../../assets/img/buses.jpg";
  image3: any = "../../../assets/img/Future-Blog.jpg";
  image4: any = "../../../assets/img/transportation_main.jpg";
  user = {
    origin: '',
    destination: ''
  }
  Route: any;




  constructor(public busService: BusService) {
    this.busService.getRoute().subscribe(res => {
      res.json();
      this.Route = res.json();
      console.log(this.Route[0].Path);
    })
  }

  ngOnInit() {
  }

  onSubmit({ value, valid }: { value: any, valid: boolean }) {
    if (!valid) {
      console.log("not valid")
    } else {
      let origin = value.origin;
      let destination = value.destination;
      for (let i = 0; i < this.Route.length; i++) {
        for (let j = 0; j < this.Route[i].Path.length; j++) {
          if (origin == this.Route[i].Path[j] && destination == this.Route[i].Path[j]) {
            console.log(this.Route[i].number)
          } else {
            console.log("false")
          }
        }
      }
      // console.log(origin)
      // console.log(destination)
    }
  }
}

