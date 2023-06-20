import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FirstChildComponent } from './components/first-child/first-child.component';
import { SecondChildComponent } from './components/second-child/second-child.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'first',
    component: FirstComponent,
    children: [
      {
        path: ':child',
        component: FirstChildComponent
      }
    ]
  },
  {
    path: 'second',
    component: SecondComponent,
    children: [
      {
        path: 'second-child',
        component: SecondChildComponent
      }

    ]
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
