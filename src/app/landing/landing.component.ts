import { Component, OnInit, Input } from '@angular/core';
import { TestServiceService } from '../services/test-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(public testSvc: TestServiceService) { }
  name: string;
  public states: any;

  ngOnInit() {
    this.name = this.testSvc.TestValue;
  }

  setTestValue(): void {
    this.testSvc.TestValue = this.name;
  }
}
