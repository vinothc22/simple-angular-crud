import { Injectable } from '@angular/core';
import { ITab } from '../tab.model'

@Injectable({
  providedIn: 'root'
})
export class TabService {

  tabs: ITab[] = [];
  tabOptions: ITab[] = [
    { name: "Initial Illustrations", url: "initial-illustration" },
    { name: "Illustrations Review", url: "review-illustration" },
    { name: "Alternate New Illustrations", url: "alternate-illustration" },

  ]

  constructor() { }

  addTab(url:string) {
    const tab = this.getTabOptionByUrl(url);
    if(!this.tabs.includes(tab)) {
      this.tabs.push(tab);
    }
  }

  getTabOptionByUrl(url:string):ITab {
    return this.tabOptions.find(tab => tab.url === url);
  }

  deleteTab(index:number) {
    this.tabs.splice(index, 1);
  }

}
