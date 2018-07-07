import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  
 // Create array to hold the information of books
 public book = [];


 constructor(private _bookservice:BookService) 
 {


  }

 ngOnInit() {

   this.book = this._bookservice.GetBatchDetails();

 }

}
