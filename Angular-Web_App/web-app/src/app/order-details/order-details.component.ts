import { Component ,OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit{
  order : any;
  id!:number;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8880/BILLING-SERVICE/fullBill/'+this.id).subscribe({
      next: (data) => {
        this.order = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
