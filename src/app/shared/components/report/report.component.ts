import { ReportService } from './../../../core/services/report/report.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  @Input() showReport : boolean = false;
  @Input() reportType : string = '';
  @Input() reportId : any = '';
  reportContent = ""

  constructor(private reportService :  ReportService) { }

  ngOnInit(): void {
  }
  handleReport(event :  Event){
    this.reportContent = (event.target as HTMLTextAreaElement).value;
  }

  generateReport(){
    this.reportService.createReport(this.reportContent, this.reportType, this.reportId).subscribe()
    this.showReport = false;
  }

}
