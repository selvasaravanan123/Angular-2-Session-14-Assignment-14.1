import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cricketer-detail',
  templateUrl: './cricketer-detail.component.html',
  styleUrls: ['./cricketer-detail.component.css']
})

export class CricketerDetailComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
