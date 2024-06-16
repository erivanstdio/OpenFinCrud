import { Component, OnInit } from '@angular/core';
import { PartnersService } from '../services/partners.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-partners-list',
  templateUrl: './partners-list.component.html',
  styleUrls: ['./partners-list.component.scss']
})
export class PartnersListComponent implements OnInit {

  partners: any[] = [];
  currentPage: number = 1;

  constructor(private partnersService: PartnersService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    console.log('try')
    this.loadPartners();
  }

  loadPartners() {

    this.partnersService.getAll().subscribe(data => {
      this.partners = data;
    })
  }

  deletePartner(id: number) {

    this.partnersService.delete(id).subscribe(() => this.loadPartners());
  }

  editPartner(id: number) {

//    this.router.navigate(['/home/partners/edit', id])

    this.router.navigate(['edit', id], { relativeTo: this.route });
  }
}
