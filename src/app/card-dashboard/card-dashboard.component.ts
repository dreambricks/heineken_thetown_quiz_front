import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.css']
})
export class CardDashboardComponent implements OnInit {

  dataFive: { status: string, count: number }[] = [];
  Five = 'Five';

  dataMoes: { status: string, count: number }[] = [];
  moes = 'moes';

  constructor(private backendService: BackendService){ }

  ngOnInit() {
    this.backendService.getStatusCountByBarName(this.Five).subscribe(response => {      
      this.dataFive = response;
    });

    this.backendService.getStatusCountByBarName(this.moes).subscribe(response => {      
      this.dataMoes = response;
    });

  }

}
