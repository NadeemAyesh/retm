import { Component, OnInit } from '@angular/core';
import { AuthService, CHECKDomain } from 'src/app/services/auth.service';

@Component({
  selector: 'app-service-code',
  templateUrl: './service-code.component.html',
  styleUrls: ['./service-code.component.scss']
})
export class ServiceCodeComponent implements OnInit {

  domain: string = '';
  showTrueBorder: boolean = false;
  showErrorBorder: boolean = false;
  disbleButton: boolean = true;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  // While writing Check if domain avalable
  checkDomainAvailable() {
    this.showTrueBorder = false;
    this.showErrorBorder = false;
    setTimeout(() => {
      this.auth.CheckDomain(this.domain).subscribe((data: CHECKDomain) => {
        console.log(data);
        if(data.avilable == true) {
          this.showTrueBorder = true;
          this.showErrorBorder = false;
          this.disbleButton = false;
        } else {
          this.showTrueBorder = false;
          this.showErrorBorder = true;
          this.disbleButton = true;
        }
      })
    }, 3000);
  }

  CheckInput(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode >= 48 && charCode <= 57) || charCode == 32) {
      return false;
    }
    return true;

  }

}
