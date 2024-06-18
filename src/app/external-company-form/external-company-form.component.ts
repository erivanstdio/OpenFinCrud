import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExternalCompaniesService } from '../services/external-companies.service';
import { MatDialogRef } from '@angular/material/dialog';
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
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<ExternalCompanyFormComponent>
  ) {
    this.companyForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.externalCompaniesService.getById(this.id).subscribe(data => {
        this.companyForm.patchValue(data);
      });
    }
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([uri])});
  }

  onSubmit() {
    if (this.companyForm.valid) {
      if (this.id) {
        this.externalCompaniesService.update(this.id, this.companyForm.value).subscribe(() => {
          this.dialogRef.close()
          this.router.navigate(['/home/external-companies']);
        });
      } else {
        this.externalCompaniesService.create(this.companyForm.value).subscribe(() => {
          this.dialogRef.close()
          this.redirectTo('/home/external-companies');
        });
      }
    }
  }
}