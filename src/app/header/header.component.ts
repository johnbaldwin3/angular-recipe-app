import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})

export class HeaderComponent {
  @Output() routeSelected = new EventEmitter<string>();
  onSelect(route: string) {
    this.routeSelected.emit(route);
  }
}
