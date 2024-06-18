import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExternalCompaniesService } from '../services/external-companies.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { redirectTo } from '../util/redirectTo';

@Component({
  selector: 'app-external-company-form',
  templateUrl: './external-company-form.component.html',
  styleUrls: ['./external-company-form.component.scss']
})
export class ExternalCompanyFormComponent implements OnInit {
  companyForm: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private externalCompaniesService: ExternalCompaniesService,
    private router: Router,
    private dialogRef: MatDialogRef<ExternalCompanyFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.id = this.data.id;
    if (this.id) {
      this.externalCompaniesService.getById(this.id).subscribe(data => {
        this.companyForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.companyForm.valid) {
      if (this.id) {
        this.externalCompaniesService.update(this.id, this.companyForm.value).subscribe(() => {
          this.dialogRef.close()
          redirectTo(this.router,'/home/external-companies');
        });
      } else {
        this.externalCompaniesService.create(this.companyForm.value).subscribe(() => {
          this.dialogRef.close()
          redirectTo(this.router,'/home/external-companies');
        });
      }
    }
  }
}