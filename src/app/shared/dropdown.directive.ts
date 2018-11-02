import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

/*
import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class') colorz = 'btn btn-primary';
  isSelected = false;
  //  @HostBinding('class') colorz2 = 'btn btn-warning';


  @HostListener('click') togglez() {
    this.isSelected = !this.isSelected;
    if (this.isSelected) {
      this.colorz = 'btn btn-primary';
    } else {
      this.colorz = 'btn btn-warning';
    }

  }
}
*/
