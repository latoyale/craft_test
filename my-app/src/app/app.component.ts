import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ItemsResponse {
  results: any[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  title = 'app';
 results: any[];

  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.http.get<any[]>('https://www.reddit.com/r/analog/top/.json?limit=5&after=t3_10omtd/ ').subscribe(data => {
      console.log(data);
      this.results = data;
    });
  }

}
