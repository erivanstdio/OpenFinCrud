import { Component, OnInit } from '@angular/core';
import { ExternalCompaniesService } from '../services/external-companies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-external-companies-list',
  templateUrl: './external-companies-list.component.html',
  styleUrls: ['./external-companies-list.component.scss']
})
export class ExternalCompaniesListComponent implements OnInit {
  companies: any[] = [];
  currentPage: number = 1;

  constructor(private externalCompaniesService: ExternalCompaniesService, private router: Router) { }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.externalCompaniesService.getAll().subscribe(data => {
      this.companies = data;
    });
  }

  deleteCompany(id: number) {
    this.externalCompaniesService.delete(id).subscribe(() => {
      this.loadCompanies();
    });
  }

  editCompany(id: number) {

    this.router.navigate(['/home/partners/edit', id])
  }
}