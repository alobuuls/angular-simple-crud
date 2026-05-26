import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  EmployeeArray: Employee[] = [
    {id: 1, name: 'Lucas', country: 'USA'},
    {id: 2, name: 'Luis', country: 'Nicaragua'},
    {id: 3, name: 'Lucia', country: 'España'}
  ]

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addOrEdit() {
    if(this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.EmployeeArray.length + 1;
      this.EmployeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  delete() {
    if(confirm('Are you sure you want to delete it?')) {
      this.EmployeeArray = this.EmployeeArray.filter(el => el !== this.selectedEmployee)
      this.selectedEmployee = new Employee;
    }
  }
}

