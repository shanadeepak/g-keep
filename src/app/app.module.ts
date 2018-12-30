import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule  } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NotesComponent } from './components/notes/notes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { RecycleComponent } from './components/recycle/recycle.component';
import { NotesListComponent } from './components/notes/notes-list/notes-list.component';
import { NotesApiService } from './services/notes-api.service';
import { StatusFilterPipe } from './pipes/status-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotesComponent,
    ArchiveComponent,
    RecycleComponent,
    NotesListComponent,
    StatusFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [NotesApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
