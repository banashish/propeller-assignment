import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { QuickAccessComponent } from './quick-access/quick-access.component';
import { LeftSidePaneComponent } from './left-side-pane/left-side-pane.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    MainWindowComponent,
    QuickAccessComponent,
    LeftSidePaneComponent,
    HeaderComponent,
    SearchPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
