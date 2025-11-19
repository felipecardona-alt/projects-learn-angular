import { Component } from '@angular/core';
import { MenuOptions } from '../../../interfaces/menu-options';
import { RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
})
export class SideMenuOptions {

  menuOptions: MenuOptions[] = [
    {
      label: 'Trending',
      subLabel: 'Gifs Populares',
      route: '/dashboard/trending',
      icon: 'fa-solid fa-chart-line'
    },
    {
      label: 'Search',
      subLabel: 'Buscar gifs',
      route: '/dashboard/search',
      icon: 'fa-solid fa-magnifying-glass'
    }
  ]

}
