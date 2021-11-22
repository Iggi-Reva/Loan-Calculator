import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoanCalculator';


  principle="";
  month="";
  rate="";
  b:any;
  select(myval1:any){
    console.log(this.rate);
    this.rate=myval1;
    console.log(this.rate);
}

  cal(principle:any,month:any,rate:any){
    this.principle=principle;
    this.month=month;
    this.rate=rate;
    var a=Number(this.principle)*Number(month/12)*Number(this.rate);
    this.b=a/100;
  }
}
