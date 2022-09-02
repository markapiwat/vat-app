import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OneService {

  public typFilling: string = "undifined";
  public month: string = "undifined";
  public year: string = "undifined";
  public money: number = 0.00;
  public tex: number = 0.00;
  public surchange: number = 0.00;
  public penalty: number = 0.00;
  public totalAmount: number = 0.00;
  
  constructor() { }

  // public setValue(data: any): void {
  //   this.tex = data;
  //   this.money = data;
  // }

  // public getValue(): string {
  //   return this.tex;
  // }
}
