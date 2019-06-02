import { Injectable } from '@angular/core';
import StatesData from '../MockData/states.data.json';
import VisaCategories from '../MockData/visaCategories.data.json';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private states: {id: number, name: string}[] = [];
  private visaCategories: {id: number , name: string , stateId: number}[] = [];

  private testValue: string;
  constructor() {
    this.testValue = 'Initial value';
    console.warn(StatesData);
  }

  get TestValue(): string {
    return this.testValue;
  }

  set TestValue(newValue: string ) {
    this.testValue = newValue;
  }

  get States(): any {
    return StatesData;
  }

  get VisaCategories(): any {
    return VisaCategories;
  }

  getVisaCategories(stateId: number): any {
    const result =  VisaCategories.filter(vc => vc.stateId === stateId);
    return result;
  }
}
