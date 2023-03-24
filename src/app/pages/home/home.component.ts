import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService, CHECK } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  token: string = '';
  error: boolean = false;
  loading: boolean = true;
  step: number = 0;

  constructor(private activeRouter: ActivatedRoute, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.step.subscribe((stepNumber: number) => {
      this.step = stepNumber;
    })

    this.token = this.activeRouter.snapshot.paramMap.get('token') as string;
    this.auth.checkToken(this.token).subscribe((data: CHECK) => {
      // console.log(data.data);
      setTimeout(() => {
        this.loading = false;
      }, 2000)
      if(data.data == false) {
        this.error = true;
        // this.router.navigateByUrl('/error');
      } else {
        localStorage.setItem('user', JSON.stringify(data));
      }
    })
  }

}
