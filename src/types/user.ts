import { Order } from "./index";

export default interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  order: Order[];
}
