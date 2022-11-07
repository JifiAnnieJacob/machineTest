import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeForm: FormGroup;
  submitted = false;
  data: void;
  empData: object[] = [];

  constructor(private router: Router) { }

  model: any;



  ngOnInit(): void {

    this.employeeForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3)]),
      address: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(25)
      ]),
      dob: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required),
      gender: new FormControl('male', Validators.required),

      phone: new FormArray([
        new FormControl('', [
          Validators.required,
        ]),
      ])
    })
  }

  get f() {
    return this.employeeForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    debugger
    if (this.employeeForm != null) {
      this.employeeForm.value.dob = this.formatDate(this.employeeForm.value.dob);
      this.empData.push(this.employeeForm.value);
    }
    if (localStorage.getItem("empForm") != null) {
      var tempData = JSON.parse(localStorage.getItem("empForm"));
      tempData.push(this.empData[0]);
      localStorage.setItem("empForm", JSON.stringify(tempData));
    }
    else {
      localStorage.setItem("empForm", JSON.stringify(this.empData));
    }
    this.router.navigate(['/empDetails']);
  }
  addPhone() {
    (<FormArray>this.employeeForm.get('phone')).push(new FormControl('', Validators.required));
  }

  formatDate(dateItem: any) {
    return dateItem.day + "-" + dateItem.month + "-" + dateItem.year;
  }

}
