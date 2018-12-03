import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Item } from '../../core/item';
import { ItemsService } from '../../core/items.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() item$: Observable<Item>;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private location: Location
  ) { }


  ngOnInit() {
    this.getItem()
  }
  getItem(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.item$ = this.itemsService.GetById(id);
  }

  edit(item: Item): void {
    this.itemsService.update(item)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
