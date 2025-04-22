import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ClipComponent } from './pages/clip/clip.component';

// استفاده از گارد جدید به جای AngularFireAuthGuard
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

// کاربران احراز هویت نشده را به صفحه لاگین هدایت کن
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['/']);

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'clip/:id',
    component: ClipComponent,
  },
  {
    path: 'video',
    loadChildren: () =>
      import('./modules/video/video.module').then((res) => res.VideoModule),
    ...canActivate(redirectUnauthorizedToLogin), // استفاده از canActivate جدید
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
