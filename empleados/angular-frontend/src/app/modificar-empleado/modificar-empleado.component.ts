import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modificar-empleado',
  templateUrl: './modificar-empleado.component.html',
  styleUrls: ['./modificar-empleado.component.css']
})
export class ModificarEmpleadoComponent implements OnInit {

  id!: number;
  empleado: Empleado = new Empleado();
  constructor(private empleadoService: EmpleadoService,
       private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.empleadoService.getEmpleadoById(this.id).subscribe(data =>  {
      this.empleado = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.empleadoService.modificarEmpleado(this.id, this.empleado).subscribe( data =>{
      this.goToEmpleadoList();
    }
    , error => console.log(error));
  }

  goToEmpleadoList(){
    this.router.navigate(['/empleados']);
  }
}

