import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './empleado-list/empleado-list.component';
import { CrearEmpleadoComponent } from './crear-empleado/crear-empleado.component';
import { FormsModule} from '@angular/forms';
import { ModificarEmpleadoComponent } from './modificar-empleado/modificar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent,
    CrearEmpleadoComponent,
    ModificarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
