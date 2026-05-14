import { Routes } from '@angular/router';
import { Form } from './Components/form/form';
import { Addmission } from './Components/addmission/addmission';
import { PracticeCode } from './Components/practice-code/practice-code';

export const routes: Routes = [
  { path: '', component: Form },
  { path: 'addmission', component: Addmission },
  { path: 'practice-code/angular', component: PracticeCode },
];