import { Routes } from '@angular/router';
// import { Form } from './Components/form/form';
// import { Addmission } from './Components/addmission/addmission';
// import { PracticeCode } from './Components/practice-code/practice-code';
// import { Home } from './Components/home/home';
// import { About } from './Components/about/about';

export const routes: Routes = [
  // { path: '', redirectTo:'home',pathMatch:'full' },

  // {path:'', component:Home},
  // {path:'about', component:About},

  // {path:'login', component:Form},
  // { path: 'addmission', component: Addmission },
  // { path: 'practice-code/angular', component: PracticeCode },

  // Lazylodig router cocept for standalone project
  {
    path:'',
    loadComponent:()=>import('./Components/home/home').then((c)=>c.Home)
  },{
    path:'about',
    loadComponent:()=>import('./Components/about/about').then((c)=>c.About)
  },{
    path:'admin',
    loadComponent:()=>import('./Components/admin/admin').then((c)=>c.Admin)
  }

];