import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-page-refresh',
  templateUrl: './page-refresh.component.html',
  styleUrls: ['./page-refresh.component.scss']
})
export class PageRefreshComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['/']);
  }

}
