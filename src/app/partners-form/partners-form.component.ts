

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartnersService } from '../services/partners.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-partners-form',
  templateUrl: './partners-form.component.html',
  styleUrls: ['./partners-form.component.scss']
})
export class PartnersFormComponent implements OnInit {
  partnerForm: FormGroup;
  id: number | null = null;

  constructor(
    private fb: FormBuilder,
    private partnersService: PartnersService,
    private route: ActivatedRoute,
    private router: Router,
    private dialogRef: MatDialogRef<PartnersFormComponent>
  ) {
    this.partnerForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.partnersService.getById(this.id).subscribe(data => {
        this.partnerForm.patchValue(data);
      });
    }
  }

  redirectTo(uri: string) {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([uri])});
  }

  onSubmit() {
    if (this.partnerForm.valid) {
      if (this.id) {
        this.partnersService.update(this.id, this.partnerForm.value).subscribe(() => {
          this.router.navigate(['/home/partners']);
        });
      } else {
        this.partnersService.create(this.partnerForm.value).subscribe(() => {
          this.dialogRef.close()
          this.redirectTo('/home/partners');
        });
      }
    }
  }
}