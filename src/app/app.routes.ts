import { Routes } from '@angular/router';
import { Form } from './Components/form/form';
import { Addmission } from './Components/addmission/addmission';

export const routes: Routes = [
  { path: '', component: Form },
  { path: 'addmission', component: Addmission }
];