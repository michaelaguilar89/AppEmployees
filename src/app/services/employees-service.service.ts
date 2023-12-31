import { Injectable } from '@angular/core';
import { EmployeesModel } from '../models/employees-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesServiceService {

    public title='Employee Details';
    list:EmployeesModel[]=[
    { id:1,name:'Pedro',lastName:'Venavidez',companyName:'Coca-Cola Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'pedro48@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:2,name:'Jualiana',lastName:'Velasquez',companyName:'Fanta-Cola Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:30,email:'juliana8@email.com',photo:'https://img.freepik.com/vector-premium/vector-caracteres-icono-cara-feliz-avatar-mujer-sonriente-3d_313242-1220.jpg'},
    { id:3,name:'Juan',lastName:'Aguire',companyName:'Toyota Motors',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'juan63@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:4,name:'John',lastName:'Georgiou',companyName:'Tesla Motors',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'john548@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:5,name:'Donal',lastName:'Venavidez',companyName:'Coca-Cola Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'donald248@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:6,name:'Ronald',lastName:'Pappas',companyName:'Ford Motors Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'ronalds968@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:7,name:'Lucia',lastName:'Papadopoulos',companyName:'Boeign Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'lucia963@email.com',photo:'https://img.freepik.com/vector-premium/perfil-avatar-mujer-icono-redondo_24640-14047.jpg'},
    { id:8,name:'Estefany',lastName:'Garcia',companyName:'Coca-Cola Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'estefanyg85@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:9,name:'Alice',lastName:'Rojas',companyName:'Boeign Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'alicer852@email.com',photo:'https://w7.pngwing.com/pngs/681/929/png-transparent-avatar-user-profile-computer-icons-woman-avatar-child-face-heroes.png'},
    { id:10,name:'Abraham',lastName:'Venavidez',companyName:'Coca-Cola Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'abraham412@email.com',photo:'https://cdn-icons-png.flaticon.com/512/5556/5556512.png'},
    { id:11,name:'Eugenia',lastName:'Gallo',companyName:'Coca-Cola Company',phoneNumber:'50645569863',role:'Administrator',salary:3000,age:40,email:'eugeniam951@email.com',photo:'https://img.freepik.com/vector-premium/vector-caracteres-icono-cara-feliz-avatar-mujer-sonriente-3d_313242-1220.jpg'}
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


