import { Component, OnInit } from '@angular/core';
import { ScrapeService } from "../service/scrape-service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private scrapeservice: ScrapeService) { }

  result: any
  // @ts-ignore
  ticker: string
  date: any


  callService() {
    this.scrapeservice.getOptionsInfo(this.ticker).subscribe(results => {
      this.result = results
      console.log(this.result)
    })
  }
  update(ticker: string){
    this.ticker = ticker
    console.log(this.ticker)
  }
  ngOnInit(): void {
  }

}
