import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
 // Create array to hold the information of books
 public book = [];


  constructor(private _bookservice:BookService) 
  {


   }

  ngOnInit() {

    this.book = this._bookservice.GetBatchDetails();

  }

}
