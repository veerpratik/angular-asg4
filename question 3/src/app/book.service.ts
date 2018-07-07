import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

// Write method in service class which returns array 
 // of batch details
 GetBatchDetails()
 {
   return [
    {"Name":"half Girl friend", "price": 300, "Author": "chetan bhagt"},
    {"Name":"jug", "price": 400, "Author": "byt"},
    {"Name":"jjjd", "price": 679, "Author": "jhon"},
    {"Name":"Sandip", "price": 209, "Author": "nnd"},
         ];

}
}