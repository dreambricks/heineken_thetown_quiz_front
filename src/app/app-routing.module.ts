import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogDashboardComponent } from './log-dashboard/log-dashboard.component'; // Importe o novo componente

const routes: Routes = [
  { path: 'log-dashboard', component: LogDashboardComponent } // Adicione a rota para o novo componente
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
