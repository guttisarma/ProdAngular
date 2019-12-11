import { Component, OnInit } from '@angular/core';
import { TranService } from '../tran.service';
import { TranHelp } from '../HelperTran';

@Component({
  selector: 'app-trans-list',
  templateUrl: './trans-list.component.html',
  styleUrls: ['./trans-list.component.css']
})
export class TransListComponent implements OnInit {

  constructor(private service: TranService) { }
  lsTrans: TranHelp[] = [];
  lsApprTrans: TranHelp[] = [];


  ngOnInit() {
    this.service.getPendingTranList().subscribe(data => this.lsTrans = data);
    this.service.getApprovedTranList().subscribe(data => this.lsApprTrans = data);
    
  }

}
