import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  // Add input decorator as it will receve the data from parent
  @Input() public parentData;

  @Input() public ParentData2;

  @Output() public MyEvent = new EventEmitter();
public sendEvent()
{
  this.MyEvent.emit("this sms from child");
}

  constructor() { }

  ngOnInit() {
  }

}
