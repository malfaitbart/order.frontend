import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../../core/item';
import { ItemsService } from '../../core/items.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  item$: Observable<Item>;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private location: Location
    ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.item$ = this.itemsService.GetById(id);
  }
  goBack(): void {
    this.location.back();
  }
}