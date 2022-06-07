import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-date-dropdown',
  templateUrl: './date-dropdown.component.html',
  styleUrls: ['./date-dropdown.component.scss']
})
export class DateDropdownComponent implements OnInit {

    @Input() dates: any | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
