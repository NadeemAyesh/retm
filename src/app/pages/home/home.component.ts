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

  constructor(private activeRouter: ActivatedRoute, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.token = this.activeRouter.snapshot.paramMap.get('token') as string;
    this.auth.checkToken(this.token).subscribe((data: CHECK) => {
      console.log(data.data);
      if(data.data == false) {
        this.router.navigateByUrl('/error');
      } else {
        localStorage.setItem('user', JSON.stringify(data));
      }
    })
  }

}
