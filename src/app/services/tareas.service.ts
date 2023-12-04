import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localStorageKey = 'listaTareas';
  
  getTareas():string[]{
    return JSON.parse(localStorage.getItem(this.localStorageKey) as string) || [];
  }

  agregarTareas(Tarea:string){
    const Tareas = this.getTareas();
    Tareas.push(Tarea);
    localStorage.setItem(this.localStorageKey, JSON.stringify(Tareas));
  }

  eliminarTarea(index:number){
    const Tareas = this.getTareas();
    Tareas.splice(index,1);
    localStorage.setItem(this.localStorageKey, JSON.stringify(Tareas));
  }

  
}
