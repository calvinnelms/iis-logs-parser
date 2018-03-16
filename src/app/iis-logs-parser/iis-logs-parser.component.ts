import { Component, OnInit } from '@angular/core';

import { Log } from '../log';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-iis-logs-parser',
  templateUrl: './iis-logs-parser.component.html',
  styleUrls: ['./iis-logs-parser.component.css']
})
export class IisLogsParserComponent implements OnInit {

  logs: Log[];
  values: string[];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getLogs();
    this.getValues();
  }

  getLogs(): void {
    this.apiService.getLogs()
      .subscribe(logs => this.logs = logs);
  }

  getValues(): void {
    this.apiService.getValues()
      .subscribe(values => this.values = values)
  }

}
