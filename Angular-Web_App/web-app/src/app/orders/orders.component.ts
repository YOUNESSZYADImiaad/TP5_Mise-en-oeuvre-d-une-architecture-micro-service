import { Component ,OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  orders : any;
  customerID!:number;
  ID!: number;
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) {
    this.customerID = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.http.get('http://localhost:8880/BILLING-SERVICE/fullBill/'+this.customerID).subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getBillingdetails(ID : any) {
    this.router.navigateByUrl('/order-details/'+this.customerID);
  }
}
