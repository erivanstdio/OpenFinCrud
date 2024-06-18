import { Component, OnInit, ViewChild } from '@angular/core';
import { ExternalCompaniesService } from '../services/external-companies.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ExternalCompanyFormComponent } from '../external-company-form/external-company-form.component';

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

  constructor(
    private externalCompaniesService: ExternalCompaniesService, 
    private _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loadCompanies();
  }

  openEditDialogBox(id: number) {
    
    this._dialog.open(ExternalCompanyFormComponent, { data: { id: id } })
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
}