import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NotesActions } from './store/actions/notes.actions';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { PopoverModule } from 'ngx-popover';
import { NgxSmartModalModule } from 'ngx-smart-modal';

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
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    PopoverModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    NgxSmartModalModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [NotesApiService, NotesActions],
  bootstrap: [AppComponent]
})
export class AppModule { }
