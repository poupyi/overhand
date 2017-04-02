import { Component, OnInit } from '@angular/core';
import { Dinosaurs } from './models/Dinosaurs.model';
import { DinoService } from './services/dinoServices';
import { Http, Response, ConnectionBackend } from '@angular/http';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/test.html',
  styleUrls: ['css/main.css'],
})

// export class AppComponent  {
//   private _dinosaurs: Array<Dinosaurs> = [];
//
//   constructor(private _dinoService: DinoService)
//   {
//     this._dinoService.getAll()
//                      .subscribe(
//                      dinos => this._dinosaurs = dinos);
//   }
// }
export class AppComponent implements OnInit {
    public _dinos: Dinosaurs[];
    public newDino: Dinosaurs;
    public loadedDino: Dinosaurs
    public ErrorMsg: string;
    public currentPage: number;
    public selectedId: number;
    public loaded: boolean;
    public error: boolean;

    constructor (private _dinoService: DinoService) {}
    ngOnInit() {
      this.getDinos();
      this.newDino = new Dinosaurs;
      this.loadedDino = new Dinosaurs;
      this.ErrorMsg = "";
      this.currentPage = 1;
      this.loaded = false;
      this.error = false;


    }

    getDinos() {
      this._dinoService.getAll()
                       .subscribe(
                         results => this._dinos = results);

    }

    addDino()
    {
      if (this.newDino.name && this.newDino.diet_type)
      {
        this._dinoService.addDino(this.newDino.name, this.newDino.diet_type, this.newDino.description)
                          .subscribe(function(){
                            location.reload();
                          });
      }
      else
      {
        this.ErrorMsg = "Il faut absolument un name et un diet type.";
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    }

    delDino(id: number)
    {
      if (id)
        this._dinoService.delDino(id).subscribe(function(){location.reload();})
      else
      {
        this.ErrorMsg = "Il faut absolument un ID.";
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    }

    loadDino(id: number)
    {
      if (id)
      {
        this._dinoService.loadDino(id)
                          .subscribe(
                            results => this.loadedDino = results);
        this.loaded=true;
      }
      else
      {
        this.ErrorMsg = "Il faut absolument un ID.";
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }

    };

    updateDino()
    {
      if (this.loadedDino.name && this.loadedDino.diet_type)
      {
        this._dinoService.updateDino(this.loadedDino._id, this.loadedDino)
                       .subscribe(function(){
                         location.reload();
                       });
      }
      else
      {
        this.ErrorMsg = "Il faut absolument un name et un diet type.";
        this.error = true;
        setTimeout(() => {
          this.error = false;
        }, 3000);
      }
    }

}
