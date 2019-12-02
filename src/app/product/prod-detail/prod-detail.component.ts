import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-prod-detail',
  templateUrl: './prod-detail.component.html',
  styleUrls: ['./prod-detail.component.css']
})
export class ProdDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  code:string
  ngOnInit() {
    this.code= this.route.snapshot.paramMap.get('id');
  }

}
