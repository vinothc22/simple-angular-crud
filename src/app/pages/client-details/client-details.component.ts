import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import {first} from "rxjs/operators";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IClient } from 'src/app/clients.model';
import { ITab } from 'src/app/tab.model';
import { TabService } from 'src/app/services/tab.service';


@Component({
  selector: 'fe-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  public clients:any = [];
  public clientIllustrations:any = [];
  public clientDetails:any = [];
  searchClient = '';
  searchClientIllustration = '';
  searchIllustration:any;
  public clientId:any;
  public illustrationId:any;
  isDialogOpen:boolean = false;
  isEditClient:boolean = false;
  viewMode:string = "tab-illustrations";
  firstName:string;
  lastName:string;
  dob:string;
  email:string;
  privacy:string;
  errorMessage:string;
  menuOptions = [];

  addClientForm: FormGroup;
  editClientForm: FormGroup;

  constructor(private _clientService: ClientsService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private _tabService: TabService) { }

  ngOnInit(): void {
    this._clientService.getClients().subscribe(data =>  this.clients = data,
                                              error => this.errorMessage = error);

    this._clientService.getClientIllustrations().subscribe(data => {
      this.clientIllustrations = data;
    })
    /*let id = parseInt(this.route.snapshot.paramMap.get('clientId'));
    this.clientId = id;*/
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.clientId = id ? id : null;
    });

    this.menuOptions = this._tabService.tabOptions;

    this.addClientForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      privacy: ['', Validators.required]
    });

    this.editClientForm = this.formBuilder.group({
      id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dob: ['', Validators.required],
      email: ['', Validators.required],
      privacy: ['', Validators.required]
    });

  }

  addNewClient() {
    this._clientService.createClient(this.addClientForm.value).subscribe(data => {
      this.router.navigate(['clients']);
    });
  }

  updateClient(client:any) {
    this._clientService.updateClient(this.editClientForm.value).pipe(first()).subscribe(data => {
      alert("Client updated successfully");
      this.router.navigate(['clients']);
    })
  }

  onSelect(client:any) {
    window.localStorage.removeItem("clientUserId");
    window.localStorage.setItem("clientUserId", client.id.toString());
    this.router.navigate(['/clients', client.id]);
    this.viewMode = "tab-illustrations"

  }

  isSelected(client:any) {
    return client.id === this.clientId;
  }
  openEditDialog(client: IClient) {
    this.isDialogOpen = true;
    this.isEditClient = true;
    let clientUserId = window.localStorage.getItem("clientUserId");
    this._clientService.getClientById(+clientUserId).subscribe(data => {
      this.editClientForm.setValue(data);
    });
    this.router.navigate(['/clients', client.id]);
  }
  openDialog() {
    this.isDialogOpen = true;
    this.isEditClient = false;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  handleClientSearch(event) {
    if(event.action === 'SEARCH') {
      this.searchClient = event.query;
    }
  }

  handleClientIllustrationSearch(event) {
    if(event.action === 'SEARCH') {
      this.searchClientIllustration = event.query;
    }
  }

  gotoClienIllustrationDetail(client:IClient, illustrationId: IClient, tabUrl:string) {
    this._tabService.addTab(tabUrl);
    this.router.navigate(['/client-illustration-details/', client.id, illustrationId, tabUrl]);
  }
}
