import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'call-log',
  templateUrl: './call-log.component.html',
  styleUrls: ['./call-log.component.css']
})
export class CallLogComponent implements OnInit {

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
  constructor() { }

  ngOnInit(): void {
  }

  addrecords(){
    console.log("Records Have Benn Added Successfully");
  }

}
