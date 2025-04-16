import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './module/components/components.component';
import { BooksComponent } from './module/components/books/books.component';
import { QuotesComponent } from './module/components/quotes/quotes.component';

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [
    { path: 'books', component: BooksComponent },
    // { path: 'videos', component: VideosComponent },
    { path: 'quotes', component: QuotesComponent },
    // { path: 'audios', component: AudiosComponent },
    { path: '', redirectTo: 'books', pathMatch: 'full' }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
