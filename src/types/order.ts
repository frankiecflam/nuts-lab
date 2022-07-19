import { Product, CartItem } from "./index";

export default interface Order {
  id: string;
  items: CartItem[];
  price: number;
  date: Date;
  customerEmail: string;
}

/*
  The reason for picking customerEmail over customerId is the flexibility for both logged-in or non-logged-in users.
  Email address is also an unique user identifiter.
*/
