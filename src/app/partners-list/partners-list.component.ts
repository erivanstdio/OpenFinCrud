import { Component, OnInit, ViewChild  } from '@angular/core';
import { PartnersService } from '../services/partners.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { PartnersFormComponent } from '../partners-form/partners-form.component';


type Partners = {
  name: string;
  id: number;
}

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss']
})

export class PartnersListComponent implements OnInit {

  partners!: Partners[];
  dataSource: any;
  displayedColumns: string[] = ['id', 'name', 'action'];
  currentPage: number = 1;
  @ViewChild(MatPaginator) matPaginator!: MatPaginator

  constructor(
    private partnersService: PartnersService, 
    private _dialog: MatDialog
  ) {}

  ngOnInit() {

    this.loadPartners();
  }

  loadPartners() {

    this.partnersService.getAll().subscribe(data => {
      this.partners = data;
      this.dataSource = new MatTableDataSource<Partners>(this.partners)
      this.dataSource.paginator = this.matPaginator
    })
  }

  deletePartner(id: number) {

    this.partnersService.delete(id).subscribe(() => this.loadPartners());
  }

  openEditDialogBox(id: number) {
    
    this._dialog.open(PartnersFormComponent, { data: { id: id } })
  }
}
