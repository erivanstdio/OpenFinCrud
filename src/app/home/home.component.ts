import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ExternalCompanyFormComponent } from '../external-company-form/external-company-form.component';
import { FormComponent } from '../enum';
import { PartnersFormComponent } from '../partners-form/partners-form.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private _dialog: MatDialog) { }

  openDialogBox(route: keyof typeof FormComponent) {

    if (route === FormComponent.externalCompanies) {
    
      this._dialog.open(ExternalCompanyFormComponent)
    } else {

      this._dialog.open(PartnersFormComponent)
    }
  }
  ngOnInit() {

    const user = this.authService.getUser();

    if (!user) {

      this.router.navigate(['/']);
    }
  }

  logout() {

    this.authService.logout();
    this.router.navigate(['/']);
  }
}
