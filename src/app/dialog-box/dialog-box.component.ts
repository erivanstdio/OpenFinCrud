import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExternalCompaniesService } from '../services/external-companies.service';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {

  companyForm: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private externalCompaniesService: ExternalCompaniesService,
    private route: ActivatedRoute,
    private router: Router
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

  onSubmit() {
    if (this.companyForm.valid) {
      if (this.id) {
        this.externalCompaniesService.update(this.id, this.companyForm.value).subscribe(() => {
          this.router.navigate(['/home/external-companies']);
        });
      } else {
        this.externalCompaniesService.create(this.companyForm.value).subscribe(() => {
          this.router.navigate(['/home/external-companies']);
        });
      }
    }
  }
}
