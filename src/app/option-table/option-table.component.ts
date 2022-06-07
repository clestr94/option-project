import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-option-table',
  templateUrl: './option-table.component.html',
  styleUrls: ['./option-table.component.scss']
})
export class OptionTableComponent implements OnInit {

  @Input() tableName: string | undefined;
  @Input() rows: any | undefined
  @Input() header: any | undefined



  constructor() { }

  ngOnInit(): void {
  }

}
