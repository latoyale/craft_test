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
    this.http.get<ItemsResponse>('https://api.github.com/users/seeschweiler').subscribe(data => {
      console.log(data);
      this.results = data;
    });
  }

}
