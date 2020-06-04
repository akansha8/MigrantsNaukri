import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {
 // mname: any;
  lname: any;
  mob: any;
  address: any;
  paddress: any;
  dob: any;
  SkillsSet: any;
  Education: any;
  Familycount: any;
 ngOnInit(): void {
  //  throw new Error("Method not implemented.");
  }
  
 isNameSelected: boolean;
  //fname: any;
  required: boolean;
  error: string;

  selectInput(event) {
    const selected = event.target.value;
    // tslint:disable-next-line: triple-equals
    if (selected == 'No') {
      this.isNameSelected = true;
    } else {
      this.isNameSelected = false;
    }
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  //ngOnInit() {
  //}
  
  constructor() { }

}
