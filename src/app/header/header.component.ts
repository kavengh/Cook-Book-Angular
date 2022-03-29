import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent implements OnInit {
  // our event we want to emit of type string
  @Output() featureSelected = new EventEmitter<string>();

  // implementing the method that will let us emit the feature so it can be listened from the parent
  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

  ngOnInit(): void {}

  collapsed = true;
}
