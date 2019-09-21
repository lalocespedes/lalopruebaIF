import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/core/serivces/documentos.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.scss']
})
export class DocumentosComponent implements OnInit {

  documentos: Observable<any>;

  constructor(
    private database: DocumentosService
  ) { }

  ngOnInit() {
    this.documentos = this.database.getData().pipe(
      map((response) => response.documents)
    );
  }
}
