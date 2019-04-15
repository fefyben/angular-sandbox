import { Component, OnInit, Input } from '@angular/core';

import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  constructor(private accountsService: AccountsService) { }


  ngOnInit() {
  }

  onSetTo(btnStatus: string) {
    this.accountsService.updateStatus(this.id, btnStatus);
  }
}
