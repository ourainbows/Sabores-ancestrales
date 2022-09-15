import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      let tokenActive = params.get('token');
      tokenActive &&
        this.authService.activateUser(tokenActive).subscribe((res: any) => {
          this.createProfile(res.dataUser.userName, res.dataUser.id);
        });
    });
  }

  createProfile(userName: any, id: any) {
    this.authService
      .createProfile({
        profileName: userName,
        profileBirthDate: '1/1/2000',
        profilePhoto: '',
        userId: id,
      })
      .subscribe((res: any) => {
        this.router.navigate(['/login'])
      });
  }
}
