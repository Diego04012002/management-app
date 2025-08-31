import { Component, input, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Tab } from '../../../interfaces/tab.interface';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './tabs.component.html',
})
export class TabsComponent {
  tabList = input.required<Tab[]>();

  isPrincipalHeader = input.required<boolean>();
}
