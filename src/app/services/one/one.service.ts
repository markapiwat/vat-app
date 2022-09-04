import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  public typeFilling: string = "Ordinary Filling";
  public month: string =  "" ;
  public year: string = "";
  public money: number = 0.00;
  public tax: number = 0.00;
  public surchange: number = 0.00;
  public penalty: number = 200.00;
  public totalAmount: number = 0.00;
  
  constructor() { }

  // public setValue(data: any): void {
  //   this.tax = data;
  //   this.money = data;
  // }

  // public getValue(): string {
  //   return this.tax;
  // }
}
