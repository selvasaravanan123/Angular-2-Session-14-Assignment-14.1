import { ICricketList } from './../interface/cricketer-list';
import { Component, OnInit } from '@angular/core';
import { CricketerService } from 'app/services/cricketer.service';
import { Observable } from "rxjs/Observable";

declare const alertify: any;

@Component({
  selector: 'app-cricketers-list',
  templateUrl: './cricketers-list.component.html',
  styleUrls: ['./cricketers-list.component.css']
})
export class CricketersListComponent implements OnInit {

  criketerDetail: Observable<ICricketList[]>;
  private searchData: string;
  private imageUrl: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';


  /** Using constructor, call the cricketService.
      this shorthand syntax automatically creates and
      initializes a new private member in the class */
  constructor(private _cricketService: CricketerService) { }


  ngOnInit() {
    this.searchData = '';
    /**Get the cricketerDetail from cricketer-app  */
    this.criketerDetail = this._cricketService.getCricketerList();
  };

  deleteData(cricketId) {
    this._cricketService.deleteCricketer(cricketId).subscribe(data => {
      /**Using 3rd party library to show message. */
      alertify.notify(' Deleted Successfully', 'success', 2);
      this.criketerDetail = this._cricketService.getCricketerList();
    }, error => console.log(error));
  };

}
