import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PizzaserviceService {

  public Pizza = [
    {
    "Name": "Batman Pizza",
    "price": "200",
    "pizza_base": "thincrust",
    "pizza_type":"large",
    "type":"Veg"
  },
  {
    "Name": "Combo Pizza",
    "price": "400",
    "pizza_base": "normal",
    "pizza_type":"small",
    "type":"Non Veg"
  },
  {
    "Name": "FarmBase Pizza",
    "price": "800",
    "pizza_base": "cheesybase",
    "pizza_type":"medium",
    "type":"Veg"
  },
  {
    "Name": "Paneer Pizza",
    "price": "600",
    "pizza_base": "thincrust",
    "pizza_type":"small",
    "type":"Veg"
  },
  {
    "Name": "Onion Pizza",
    "price": "800",
    "pizza_base": "cheesybase",
    "pizza_type":"large",
    "type":"Veg"
  },
]
;
  constructor() { }

  

}
