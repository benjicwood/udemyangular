import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/subscription';

import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription = this.slService.startedEditing.subscribe((index: number) => { this.editedItemIndex = index; this.editMode = true; });
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.slService.addIngredient(newIngredient);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
