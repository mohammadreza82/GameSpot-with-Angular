import { AfterContentInit, Component, ContentChildren, OnInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  standalone: false,
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.scss'
})
export class TabsContainerComponent implements AfterContentInit {

  @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList;


  ngAfterContentInit(): void {
    const activeTabs = this.tabs.filter(tab => tab.active === true);

    if (!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs.first)
    }
  }

  selectTab(tab: any) {
    this.tabs.forEach(tab => tab.active = false);
    tab.active = true;
  }
}
