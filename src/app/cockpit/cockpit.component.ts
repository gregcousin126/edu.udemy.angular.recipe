import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string; serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string; serverContent: string}>();
  // newServerName = '';
  // newServerContent = ''; // empty string from the html

  @ViewChild('serverContentInput') serverContentInput: ElementRef;// local reff view from viewchild

  constructor() {}
  ngOnInit() {}

  onAddServer(nameInput: HTMLInputElement) {// console.log(nameInput);
    this.serverCreated.emit({
      serverName: nameInput.value,// serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value // underlining element = 
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      // this.serverContentInput.nativeElement.value = 'Sommething';
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
