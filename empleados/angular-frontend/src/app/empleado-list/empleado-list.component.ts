import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado'
import { EmpleadoService } from '../empleado.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {

  empleados: Empleado[];
  constructor(private empleadoService: EmpleadoService,
              private router: Router
             ) { }

  ngOnInit(): void {

    this.getEmpleados();
  }

  private getEmpleados(){
    this.empleadoService.getEmpleadoslista().subscribe(data => {
      this.empleados = data;
    });
  }

  modificarEmpleado(id: number){
    this.router.navigate(['modificar-empleado', id]);
  }

}
