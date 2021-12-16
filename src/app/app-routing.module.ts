import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserOverviewComponent } from "./user-overview/user-overview.component";
import { AlbumViewComponent } from "./album-view/album-view.component";

const routes: Routes = [
  {
    component: UserOverviewComponent,
    path: 'userOverview'
  },
  {
    component: AlbumViewComponent,
    path: 'albumView'
  },
  {
    path: '',
    redirectTo: '/userOverview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
