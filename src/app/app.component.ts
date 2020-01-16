import { Component } from '@angular/core';
import { PizzaserviceService } from './pizzaservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mypizza';
  enable= true;
  changeColor='orange';
  selectprice:number;
  items:any;
  pizzatype:any;
  data:any;
  mypizzabase:any;

  constructor(private pizzaservice:PizzaserviceService)
  {
    this.items = [
      {pizza_base: 'thincrust'}, 
      {pizza_base: 'cheesybase'},
      {pizza_base: 'normal'}
    ];

    this.pizzatype =[
      {pizza_type:'small'} ,
      {pizza_type:'large'},
      {pizza_type:'medium'},
      {pizza_type:'pizzacone'}
    ];
  }

  ngOnInit(){
    this.data=this.pizzaservice.Pizza;
    console.log(this.data);
}

  onChange(event){
    console.log(event);
    if(event==true){
        this.data =   this.pizzaservice.Pizza.filter(function(hero) {
            return hero.type == "Non Veg";
        });
    }
    else{
        this.data =   this.pizzaservice.Pizza.filter(function(hero) {
            return hero.type == "Veg";
        });
    }

}
  reset(){
    // this.data=this.pizzaservice.Pizza;
    // this.items.value=undefined;
    this.ngOnInit();
  }
  
  changePrice(event:any){
  this.selectprice = event.target.value;
  this.data = this.pizzaservice.Pizza.filter(function(hero1){
    return hero1.price <= event.target.value;

   });

  }

  pizzaBaseselect(event:any)
  {
    this.data = this.pizzaservice.Pizza.filter(function(hero1){
    return hero1.pizza_base == event.target.value;

   });
    
  }

  pizzaTypeselect(event:any)
  {
    this.data = this.pizzaservice.Pizza.filter(function(hero1){
      return hero1.pizza_type == event.target.value;
  });
  }
}

 

  
 

