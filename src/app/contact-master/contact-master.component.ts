import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-master',
  templateUrl: './contact-master.component.html',
  styleUrls: ['./contact-master.component.css']
})
export class ContactMasterComponent implements OnInit {

  mprtyid: string;
  mprtyname: string;
  mjobtitle: string;
  mcmobile: string;
  mcemail: string;
  mpobox: string;
  maddress1: string;
  maddress2: string;
  mfaxno: string;
  mreference: string;
  mcity: string;
  constructor() { }

  ngOnInit(): void {
  }

  addrecords(){
    console.log("Records Have Benn Added Successfully");
  }

}
