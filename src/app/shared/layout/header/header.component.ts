import {Component, Input} from '@angular/core';
import {CategoryType} from "../../../../types/category.type";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() categories!: CategoryType[]
  constructor() {
  }
}
