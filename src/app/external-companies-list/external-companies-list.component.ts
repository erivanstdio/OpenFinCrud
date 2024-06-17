import { Component, OnInit, ViewChild } from '@angular/core';
import { ExternalCompaniesService } from '../services/external-companies.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

type Company = {
  name: string;
  id: number;
  companyName: string;
  isActive: boolean;
  collaboratorsCount: number;
}

@Component({
  selector: 'app-external-companies-list',
  templateUrl: './external-companies-list.component.html',
  styleUrls: ['./external-companies-list.component.scss']
})
export class ExternalCompaniesListComponent implements OnInit {

  companies!: Company[];
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'status', 'collaboratorsCount', 'action'];
  currentPage: number = 1;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator

  constructor(private externalCompaniesService: ExternalCompaniesService, private router: Router) { }

  ngOnInit() {
    this.loadCompanies();
  }

  loadCompanies() {
    this.externalCompaniesService.getAll().subscribe(data => {     
      this.companies = data;
      this.dataSource = new MatTableDataSource<Company>(this.companies)
      this.dataSource.paginator = this.matPaginator
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