import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  changeStep() {
    this.auth.step.emit(1);
  }

}
