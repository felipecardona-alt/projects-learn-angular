import { Component, inject, Type } from '@angular/core';
import { routes } from '../../../app.routes';
import { NavigationEnd, Resolve, ResolveFn, Router, RouterLink } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [AsyncPipe, RouterLink],
  templateUrl: './navbar.html',
})
export class Navbar {

  router = inject(Router);

  routes = routes.map( route => ({
    path: route.path,
    title: `${route.title ?? 'Maps en Angular'}`,
  })).filter(route => route.path !== '**');

  pageTitle$ = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
   // tap((event) => console.log('Router event:', event)),
    map((event) => event.url),
    map(
      (url) => routes.find(route => `/${route.path}` === url)?.title ?? 'Maps')
  );

  pageTitle = toSignal(
    this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
   // tap((event) => console.log('Router event:', event)),
    map((event) => event.url),
    map(
      (url) => routes.find(route => `/${route.path}` === url)?.title ?? 'Maps')
    )
  );

}
