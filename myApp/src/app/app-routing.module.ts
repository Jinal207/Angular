import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { CustpipeComponent } from './custpipe/custpipe.component';

const routes: Routes = [
  { path: 'first', component: FirstComponentComponent },
  { path: 'second', component: SecondComponentComponent },
  { path: 'pipe', component: CustpipeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
