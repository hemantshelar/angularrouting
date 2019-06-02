import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-visa-options',
  templateUrl: './visa-options.component.html',
  styleUrls: ['./visa-options.component.css']
})
export class VisaOptionsComponent implements OnInit {

  selectedState: any;
  selectedVisa: any;
  states: any;
  relatedVisaCategories: any;
  constructor(private testSvc: TestServiceService) { }

  ngOnInit() {
    this.states = this.testSvc.States;
    console.error(this.states);
  }

  stateChanged() {
    this.relatedVisaCategories = undefined;
    const id = this.selectedState;
    this.relatedVisaCategories = this.testSvc.getVisaCategories(id);
    console.log(this.relatedVisaCategories);
  }
}
