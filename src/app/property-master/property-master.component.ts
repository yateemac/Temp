import { Component, OnInit } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'property-master',
  templateUrl: './property-master.component.html',
  styleUrls: ['./property-master.component.css']
})
export class PropertyMasterComponent implements OnInit {
  user: User;
  mCurrentMethod: string;
  methods = [{
    current: '1',
  }];
  isCollapsed: boolean = true;

  mporpid: string;
  mpropname: string;
  mlat: string;
  mlong: string;
  moption1: boolean;
  moption2: boolean;
  moption3: boolean;
  moption4: boolean;
  munittype: string;
  mroadno: string;
  mblockno: string;
  mcontact: string;
  mcmobile: string;
  mcemail: string;
  mpobox: string;
  maddress1: string;
  maddress2: string;
  mfaxno: string;
  mreference: string;
  mcity: string;
  marea: string;
  
  /* mbasic: number;
     mdate: date;
     mtype boolean;
  */

  clicked=false;

  constructor() {
    this.mCurrentMethod = this.methods[0].current
    this.user = new User;
    this.user.name = "user Name";
    this.user.address = "user Address";
    this.user.designation = "User Designation";
    this.user.phone = [ " " ];
  }
  ngOnInit(): void {
  }
addrecords(){
  console.log("Records Have Benn Added Successfully");
}

toggleCollapse() {
  this.isCollapsed = !this.isCollapsed;
  this.user.name="User Details";
}

keytab(event){
  event.preventDefault();
  let element = event.srcElement.nextElementSibling; // get the sibling element
  if(element == null)  // check if its null
      return;
  else
      element.focus();   // focus if not null
}
/*toggleDisabled(){
  this.isDisabled = !this.isDisabled;
}
isDisbled(){}
}*/
}
