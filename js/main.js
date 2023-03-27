import Order from "./models/order.js";
import * as orderService from "./services/order-service.js";

const data = document.getElementById("orderInput").innerHTML.split("\n");

const order = new Order(data[0], Number(data[1]), Number(data[2]));
const totalValue = orderService.total(order);

console.log(`Pedido código ${data[0]}`);
console.log(`Valor total: R$ ${totalValue.toFixed(2)}`);
