import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { DocumentosComponent } from 'src/app/components/documentos/documentos.component';

import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [DashboardComponent, DocumentosComponent],
  imports: [
    CommonModule,
    TabsModule.forRoot()
  ]
})
export class DashboardModule { }
