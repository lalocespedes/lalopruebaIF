import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import SampleJson from '../../../db/db.json';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  data: Observable<any>;

  constructor() { }

  getData() {
    return of(SampleJson);
  }

}
