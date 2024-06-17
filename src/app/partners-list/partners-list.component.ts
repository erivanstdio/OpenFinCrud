import { Component, OnInit, ViewChild  } from '@angular/core';
import { PartnersService } from '../services/partners.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


interface Partners {
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

  constructor(private partnersService: PartnersService, private router: Router, private route: ActivatedRoute) {}


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

  editPartner(id: number) {

    this.router.navigate(['edit', id], { relativeTo: this.route });
  }
}
