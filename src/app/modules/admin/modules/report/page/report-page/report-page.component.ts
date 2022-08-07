import { Report } from './../../../../../../shared/models/report.model';
import { ReportService } from './../../../../../../core/services/report/report.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss']
})
export class ReportPageComponent implements OnInit {

  type : string | null = this.route.snapshot.queryParamMap.get('type')
  id : string | null = this.route.snapshot.queryParamMap.get('id')
  name : string | null = this.route.snapshot.queryParamMap.get('name')

  reports : Report[] = []

  constructor( private route: ActivatedRoute, private reportService: ReportService) { }

  ngOnInit(): void {
    console.log(this.type, this.id, this.name)
    this.reportService.getReports(this.id, this.type).subscribe(data => {
      this.reports = data
    })
  }
}
