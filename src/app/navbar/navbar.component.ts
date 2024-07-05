import { Component, AfterViewInit } from '@angular/core';

declare var bootstrap: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {

  ngAfterViewInit() {
    const collapseElementList = document.querySelectorAll('.collapse');
    const collapseList = Array.from(collapseElementList).map(collapseEl => new bootstrap.Collapse(collapseEl));
  }
}
