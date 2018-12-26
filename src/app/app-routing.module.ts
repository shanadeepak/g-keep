import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotesComponent } from './components/notes/notes.component';
import { ArchiveComponent } from './components/archive/archive.component';
import { RecycleComponent } from './components/recycle/recycle.component';

const routes: Routes = [
  { path: 'gkeep/notes', component: NotesComponent },
  { path: 'gkeep/archive-notes', component: ArchiveComponent },
  { path: 'gkeep/recycle-bin', component: RecycleComponent },
  { path: '**', redirectTo: 'gkeep/notes', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
