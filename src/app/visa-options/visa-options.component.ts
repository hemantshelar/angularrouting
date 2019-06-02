import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';
import { FormBuilder, Validators, FormArray } from '@angular/forms';

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
  constructor(private testSvc: TestServiceService,
              private fb: FormBuilder) { }

  question = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['lastName' ],
    aliases: this.fb.array([this.fb.control('')]),
    addresses: this.fb.array([{
      streetNumber: ['defult st'],
      city: ['city', Validators.required]
    }])
  });

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

  get aliases() {
    return this.question.get('aliases') as FormArray;
  }
  addAliase() {
    this.aliases.push(this.fb.control(''));
  }

  get addresses() {
    return this.question.get('addresses') as FormArray;
  }

  addAddress() {
    this.addresses.push(this.fb.group({
    }));
  }
}
