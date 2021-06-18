import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fe-create-illustration',
  templateUrl: './create-illustration.component.html',
  styleUrls: ['./create-illustration.component.scss']
})
export class CreateIllustrationComponent implements OnInit {

  isAlertOpened: Boolean =  false;
  isAddIncomePeriod:Boolean = false;
  isAddBreadowns:Boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  backToClients() {
    let clientUserId = window.localStorage.getItem("clientUserId");
    this.router.navigate(['/clients', clientUserId]);
  }

  calculateAlert() {
    this.isAlertOpened = !this.isAlertOpened;
  }

  addIncomePeriod() {
      this.isAddIncomePeriod = !this.isAddIncomePeriod;
  }
  
  addBreadowns() {
    this.isAddBreadowns =  !this.isAddBreadowns;
  }

}
