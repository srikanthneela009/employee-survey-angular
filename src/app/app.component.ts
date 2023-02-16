import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';

// import custom validator to validate that password and confirm password fields match

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  employeeResponse: any;
  reactions = [
    { displayName: 'Happy', value: 'Happy' },
    { displayName: 'Moderate', value: 'Moderate' },
    { displayName: 'Unhappy', value: 'Unhappy' },
  ];
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: [, Validators.required],
      lastName: [, Validators.required],
      workCulture: [, Validators.required],
      happyWithManagement: [, Validators.required],
      happyAtWork: [, Validators.required],
      rateWorkExperience: [0, Validators.required],
      happyOrSadDay: [, Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    this.employeeService
      .saveEmployeeSurvey(this.registerForm.value)
      .subscribe((res) => (this.employeeResponse = res.body));
  }

  onReset() {
    this.registerForm.reset();
  }
  goBack() {
    this.employeeResponse = null;
    this.onReset();
  }
}
