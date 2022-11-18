import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor (private httpClient: HttpClient) { }

  getEmpleadolist(): Observable<Empleado[]>{
    return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
}
crearEmpleado(empleado: Empleado): Observable<Object>{
  return this.httpClient.post(`${this.baseURL}`, empleado);
}

getEmpleadoById(id: number): Observable<Empleado>{
  return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
}

modificarEmpleado(id: number, empleado: Empleado): Observable<Object>{
  return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
}
}
