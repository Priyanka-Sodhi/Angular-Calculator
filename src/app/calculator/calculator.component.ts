import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  // num1:number;
  // num2:number;
  // num3:number;
  // add(){
  //   this.num3=this.num1+this.num2;
  // }
  // sub(){
  //   this.num3=this.num1-this.num2;
  // }
  // div(){
  //   this.num3=this.num1/this.num2;
  // }
  // mul(){
  //   this.num3=this.num1*this.num2;
  // }

  ngOnInit() {
  }

  currentnumber="0";
  num1=null;
  operator=null;
  waitfornum2=false;

  public getNumber(n:string){
    console.log(n);
      if(this.waitfornum2){
      this.currentnumber=n;
      this.waitfornum2=false;
    }
    else{
      this.currentnumber==='0'?this.currentnumber=n:this.currentnumber+=n;
    }
  }
  getDecimal(){
    if(!this.currentnumber.includes('.')){
      this.currentnumber+='.';
    }
  }

  private calculation(x,n2){
    switch(x){
      case '+':
      return this.num1+=n2;
      case '-':
      return this.num1-=n2;
      case '*':
      return this.num1*=n2;
      case '/':
      return this.num1/=n2;
      return n2;
    }
  }
  
  public getOperation(x:string){
    console.log(x);

    if(this.num1===null){
      this.num1=Number(this.currentnumber);
    }
    else if(this.operator){
      const result=this.calculation(this.operator,Number(this.currentnumber));
      this.currentnumber=String(result);
      
    }
    this.operator=x;
    this.waitfornum2=true;
    console.log(this.num1);
    }
  public clear(){
    this.currentnumber='0';
    this.operator=null;
    this.num1=null;
    this.waitfornum2=false;
  }
  
  }