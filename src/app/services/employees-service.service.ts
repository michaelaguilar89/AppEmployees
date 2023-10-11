import { Injectable } from '@angular/core';
import { EmployeesModel } from '../models/employees-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {


    list:EmployeesModel[]=[
    { id:1,name:'Pedro',lastName:'Venavidez',age:40,email:'pedro48@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:2,name:'Jualiana',lastName:'Velasquez',age:30,email:'juliana8@email.com',photo:'https://img.freepik.com/vector-premium/vector-caracteres-icono-cara-feliz-avatar-mujer-sonriente-3d_313242-1220.jpg'},
    { id:3,name:'Juan',lastName:'Aguire',age:40,email:'juan63@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:4,name:'John',lastName:'Georgiou',age:40,email:'john548@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:5,name:'Donal',lastName:'Venavidez',age:40,email:'donald248@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:6,name:'Ronald',lastName:'Pappas',age:40,email:'ronalds968@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:7,name:'Lucia',lastName:'Papadopoulos',age:40,email:'lucia963@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:8,name:'Estefany',lastName:'Garcia',age:40,email:'estefanyg85@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:9,name:'Alice',lastName:'Rojas',age:40,email:'alicer852@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:10,name:'Abraham',lastName:'Venavidez',age:40,email:'abraham412@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:11,name:'Eugenia',lastName:'Gallo',age:40,email:'eugeniam951@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'}
  ];
  constructor() { }


  get AllEmployees(){
    return this.list
  }

  getEmployeeDetail(id:number){
    var e= this.list.find(x=>x.id==id);
    return e;
  }
  createEmployee(employee:EmployeesModel){
    this.list.push(employee);
  }

  updateEmployee(employee:EmployeesModel) {
    const index = this.list.findIndex((e) => e.id === employee.id);
    if (index !== -1) {
      this.list[index] = employee;
    }
  }

  deleteEmployee(id: number) {
    this.list = this.list.filter((e) => e.id !== id);
  }
}


