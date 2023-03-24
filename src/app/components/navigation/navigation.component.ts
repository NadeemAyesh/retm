import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input()
  step!: number;
  steps: number = 1;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.steps = this.step;
  }

  changeStep(stepNumber: number) {
    this.auth.step.emit(stepNumber);
  }

}
