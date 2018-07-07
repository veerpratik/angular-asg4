import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { componentFactoryName } from '@angular/compiler';
import { SubjectsComponent } from './subjects/subjects.component';
import { MycompComponent} from './mycomp/mycomp.component';//import kra

const routes: Routes = [
  {path : 'batches', component:BatchesComponent},//appmodule madhle names use kele ahet
  {path : 'subjects' ,component:SubjectsComponent},
  {path : 'mycomp', component:MycompComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
