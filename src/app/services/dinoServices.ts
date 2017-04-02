import { Injectable, Component } from '@angular/core';
import { Dinosaurs } from '../models/Dinosaurs.model';
import { Http, Response, ConnectionBackend, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DinoService{

  private urlDinoApi = 'http://139.162.121.14/api/';
  private _dinosaurs: Array<Dinosaurs>;
  private headers = new Headers({ 'Content-Type': 'application/json', 'api_key': 'SAFm2354213*3rer6#32234@!@!4a654f'});
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http){};

  public getAll(): Observable<Dinosaurs[]> {
    return this.http.get(this.urlDinoApi + 'dinosaurs/diet_type/0')
               .map(this.extractData);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  public addDino(name: string, diet_type: number, description: string): Observable<Dinosaurs> {
    return this.http.post(this.urlDinoApi + 'dinosaurs', { name, diet_type, description }, this.options)
     .map(this.extractData);
  }

  public delDino(deleteId: number)
  {
    return this.http.delete(this.urlDinoApi + 'dinosaurs/' + deleteId, this.options);
  }


  public loadDino(loadedId: number): Observable<Dinosaurs> {
    return this.http.get(this.urlDinoApi + 'dinosaurs/' + loadedId)
                 .map(response => <Dinosaurs>response.json());
  }


  public updateDino(idSelected: number, loadedDino: Dinosaurs): Observable<Dinosaurs> {
    let name:string;
    let diet_type:number;
    let description:string;
    let picture: string;

    name = loadedDino.name;
    diet_type = loadedDino.diet_type;
    description = loadedDino.description;
    picture = loadedDino.picture;
    return this.http.put(this.urlDinoApi + 'dinosaurs/' + idSelected, {name, diet_type, description, picture }, this.options)
                .map(response => <Dinosaurs>response.json());
  }
}
