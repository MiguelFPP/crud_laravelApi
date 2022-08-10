import { Component, OnDestroy, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-students',
  templateUrl: './list-students.component.html',
  styleUrls: ['./list-students.component.css'],
})
export class ListStudentsComponent implements OnInit, OnDestroy {
  students: Student[];
  constructor(private _studentService: StudentService) {
    this.students = [];
  }

  ngOnInit(): void {
    this.getStudents();
  }

  ngOnDestroy(): void {
    this.students = [];
  }

  getStudents(): void {
    this._studentService.getStudents().subscribe(
      (res) => {
        const { data } = res;
        this.students = data;
        console.log(this.students);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  editStudent(id: number): void {
    this._studentService.getStudent(id).subscribe((data) => {
      console.log(data);
    });
  }
  deleteStudent(id: number): void {
    this._studentService.deleteStudent(id).subscribe(
      () => {
        this.getStudents();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
