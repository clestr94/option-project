import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule} from "@angular/common/http";
import {MdbCollapseModule} from "mdb-angular-ui-kit/collapse";
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { DateDropdownComponent } from './date-dropdown/date-dropdown.component';
import { OptionComponent } from './option/option.component';
import { OptionTableComponent } from './option-table/option-table.component';
import { ScrapeService } from "./service/scrape-service";
import { FormsModule } from '@angular/forms';
import { NgControl } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    DateDropdownComponent,
    OptionComponent,
    OptionTableComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MdbCollapseModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ScrapeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
