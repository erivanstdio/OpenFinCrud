

import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PartnersService } from '../services/partners.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { redirectTo } from '../util/redirectTo';
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
    private router: Router,
    private dialogRef: MatDialogRef<PartnersFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) {
    this.partnerForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.id = this.data.id;
    if (this.id) {
      this.partnersService.getById(this.id).subscribe(data => {
        this.partnerForm.patchValue(data);
      });
    }
  }

  onSubmit() {
    if (this.partnerForm.valid) {
      if (this.id) {
        this.partnersService.update(this.id, this.partnerForm.value).subscribe(() => {          
          redirectTo(this.router,'/home/partners');
        });
      } else {
        this.partnersService.create(this.partnerForm.value).subscribe(() => {
          this.dialogRef.close()
          redirectTo(this.router,'/home/partners');
        });
      }
    }
  }
}