import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { IClient } from 'src/app/clients.model';
import { TabService } from 'src/app/services/tab.service';


@Component({
  selector: 'fe-client-illustration-details',
  templateUrl: './client-illustration-details.component.html',
  styleUrls: ['./client-illustration-details.component.scss']
})
export class ClientIllustrationDetailsComponent implements OnInit {

  public clients:any = [];
  public clientIllustrations:any = [];
  public clientId:any;
  public clientIllustrationId:any;
  menuOptions = [];
  tabs = [];
  activeTabUrl:string;
  isActiveTab:boolean = true;

  constructor(private _clientService: ClientsService, private router: Router, private route: ActivatedRoute, private _tabService: TabService) { }

  ngOnInit(): void {
    this._clientService.getClients().subscribe(data =>  this.clients = data);
    this._clientService.getClientIllustrations().subscribe(data => this.clientIllustrations = data);

    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('illustrationId'));
      this.clientIllustrationId = id ? id : null;
    });
    this.clientId = window.localStorage.getItem("clientUserId");
    this.menuOptions = this._tabService.tabOptions;
    this.tabs = this._tabService.tabs;

    /*this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.activeTabUrl = event.urlAfterRedirects;
        if(this.tabs.length === 0) {
          this._tabService.addTab(this.activeTabUrl);
        }
      }
    });*/
  }
  addTab(url: string) {
    this._tabService.addTab(url);
  }

  closeTab(index:number, event: Event) {
    this._tabService.deleteTab(index);
    event.preventDefault();
  }

  onTabChange(event:Event) {
    //this.router.navigateByUrl[event.nextId];

  }
}
