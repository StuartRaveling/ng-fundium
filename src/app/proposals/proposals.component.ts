import { Component, OnInit } from '@angular/core';
import {proposal} from '../proposal';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.css']
})
export class ProposalsComponent implements OnInit {
proposal1: proposal = {id:1,name:"First test"};
  constructor() { }

  ngOnInit(): void {
  }

}

