import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsViewComponent } from './employee-details-view/employee-details-view.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {
    path:'', redirectTo:'emp/admin', pathMatch:'full'
  },
  {
    path:'emp/admin', component:EmployeeDetailsComponent
  },
  {
    path:'empDetails', component:EmployeeDetailsViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
