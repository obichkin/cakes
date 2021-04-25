import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  data = {}
  
  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get("./assets/cakesdata.json").subscribe(data => this.data = data);
  }


}
