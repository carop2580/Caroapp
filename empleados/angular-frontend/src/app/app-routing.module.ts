import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';

const routes: Routes = [
  {path: 'empleados', component: EmpleadoListComponent},
  {path: 'crear-empleado', component: CrearEmpleadoComponent},
  {path: '', redirectTo: 'empleados', pathMatch: 'full'},
  {path: 'modificar-empleado/:id', component: ModificarEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
