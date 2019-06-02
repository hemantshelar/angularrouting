import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  private testValue: string;
  constructor() {
    this.testValue = 'Initial value';
  }

  get TestValue(): string {
    return this.testValue;
  }

  set TestValue(newValue: string ) {
    this.testValue = newValue;
  }
}
