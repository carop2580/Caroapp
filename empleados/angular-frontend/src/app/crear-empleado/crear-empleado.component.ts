import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  constructor(private empleadoService: EmpleadoService,
    private router: Router)
     { }

  saveEmpleado(){
    this.empleadoService.crearEmpleado(this.empleado).subscribe( data =>{
      console.log(data);
      this.goToEmpleadolist();
    },
    error => console.log(error));
  }

  goToEmpleadolist() {
    this.router.navigate(['/empleados']);
  }
  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.empleado);
    this.saveEmpleado();
  }

}
