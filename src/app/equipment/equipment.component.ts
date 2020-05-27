import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor() { }

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
    ngOnInit(): void {
  }

  addrecords(){
     console.log("Records Have Benn Added Successfully");
  }


}
