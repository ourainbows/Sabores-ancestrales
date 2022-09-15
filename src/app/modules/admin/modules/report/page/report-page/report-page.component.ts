import { UsersService } from 'src/app/core/services/users/users.service';
import { RecipesService } from './../../../../../../core/services/recipes/recipes.service';
import { Report } from './../../../../../../shared/models/report.model';
import { ReportService } from './../../../../../../core/services/report/report.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
})
export class ReportPageComponent implements OnInit {
  type: string | null = this.route.snapshot.queryParamMap.get('type');
  id: string | null = this.route.snapshot.queryParamMap.get('id');
  name: string | null = this.route.snapshot.queryParamMap.get('name');

  reports: Report[] = [];

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private recipesService: RecipesService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.type, this.id, this.name);
    this.reportService.getReports(this.id, this.type).subscribe((data) => {
      this.reports = data;
    });
  }

  deleteReport(id: number) {
    this.reportService.deleteReport(id).subscribe((data) => {
      this.reports = this.reports.filter((report) => report.id != id);
    });
  }

  deleteRecipe() {
    this.recipesService.deleteRecipe(this.id).subscribe((data) => {
      this.reports = this.reports.filter((report) => report.id.toString() != this.id);
      this.router.navigate(['/admin/table-recipes'])
    } );
  }

  suspendUser() {
    this.userService.updateUser(this.id, { isActive: false }).subscribe((data) => {
      this.router.navigate(['/admin/table-users'])
    } );
  }
  deleteComment(idComment : number) {
    this.recipesService.deleteComment(this.id, idComment).subscribe((data) => {
      this.reports = this.reports.filter((report) => report.id.toString() != this.id);
    })} 
}
