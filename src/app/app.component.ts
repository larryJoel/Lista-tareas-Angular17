import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  listadeTareas:string[] = [];
  nuevaTarea ='';
  private _tareasServices = inject(TareasService);

  ngOnInit(): void {
      this.listadeTareas = this._tareasServices.getTareas();
  }

  agregarTarea(){
    this._tareasServices.agregarTareas(this.nuevaTarea);
    this.nuevaTarea ="";
    this.listadeTareas = this._tareasServices.getTareas();
  }

  eliminarTarea(index:number){
    this._tareasServices.eliminarTarea(index);
    this.listadeTareas = this._tareasServices.getTareas();
  }

}
