import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-students',
  templateUrl: './add-edit-students.component.html',
  styleUrls: ['./add-edit-students.component.css'],
})
export class AddEditStudentsComponent implements OnInit {
  title: string;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      identification: [
        '',
        [
          Validators.required,
          Validators.pattern('[0-9]*'),
        ],
      ],
      name: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
      surname: ['', [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*'),
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
      email: ['',[
        Validators.required,
        Validators.email,
      ]],
      phone: ['',[
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(7),
        Validators.maxLength(10),
      ]],
      birthdate: ['',[
        Validators.required,
      ]],
      address: ['',[
        Validators.pattern('[a-zA-Z0-9 ]*'),
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
      active: [''],
    });
    this.title = 'Add';
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form);
  }

  get angForm():any {
    return this.form.controls;
}
}
