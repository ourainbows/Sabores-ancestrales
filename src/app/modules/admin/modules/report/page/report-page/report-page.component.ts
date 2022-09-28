import { UsersService } from 'src/app/core/services/users/users.service';
import { RecipesService } from './../../../../../../core/services/recipes/recipes.service';
import { Report } from './../../../../../../shared/models/report.model';
import { ReportService } from './../../../../../../core/services/report/report.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-page',
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.scss'],
})
export class ReportPageComponent implements OnInit {
  type: string | null = this.route.snapshot.queryParamMap.get('type');
  id: string | null = this.route.snapshot.queryParamMap.get('id'); // user or recipe id
  name: string | null = this.route.snapshot.queryParamMap.get('name');

  reports: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private reportService: ReportService,
    private recipesService: RecipesService,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.type === 'user' &&
      this.reportService.getReportsUser(this.id).subscribe((data) => {
        this.reports = data;
      });
  }

  deleteReportsUser() {
    this.reportService.deleteReports(this.id).subscribe((data) => {
      this.router.navigate(['/admin/users-list']);
    });
  }

  deleteRecipe() {
    this.recipesService.deleteRecipe(this.id).subscribe((data) => {
      this.router.navigate(['/admin/table-recipes']);
    });
  }

  suspendUser() {
    this.userService.suspendUser(this.id, false).subscribe((data) => {
      this.router.navigate(['/admin/users-list']);
    });
  }
}
