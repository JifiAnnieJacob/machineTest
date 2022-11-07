import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details-view',
  templateUrl: './employee-details-view.component.html',
  styleUrls: ['./employee-details-view.component.css']
})
export class EmployeeDetailsViewComponent implements OnInit {
  emplist:any;
  constructor() { }

  ngOnInit(): void {
    this.emplist = JSON.parse(localStorage.getItem("empForm"));
  }



}
