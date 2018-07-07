import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {


  
 // Create array to hold the information of books
 public book = [];


 constructor(private _bookservice:BookService) 
 {


  }

 ngOnInit() {

   this.book = this._bookservice.GetBatchDetails();

 }

}