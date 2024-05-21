// Maz Radwan FSJS QAP1

// 'Event' Global Object
// The events module provides a way to handle events in Node.js. It is built into the core Node.js library and is used to create, fire, and listen for events.
// The EventEmitter class is the foundation of the events module. It is used to create custom events and bind event listeners to those events.
// It allows objects to emit named events that can be listened to by other objects, enabling decoupled communication
// between different parts of an application.

// the following code will handle events for the simualtion of placing, processing and completing an order.
//The events will be logged to the console.

const EventEmmitter = require("events");

//create an instance of the EventEmitter class
const orderEmitter = new EventEmmitter();

// register an event listener for the 'orderPlaced' event
orderEmitter.on("orderPlaced", (order) => {
  console.log(
    `Order placed: ${order.id}, Item: ${order.item}, Quanitiy: ${order.quantity}`
  );
  // add a time delay to simulate processing the order
  setTimeout(() => {
    orderEmitter.emit("orderProcessed", order);
  }, 1000);
});

// register an event listener for the 'orderProcessed' event
orderEmitter.on("orderProcessed", (order) => {
  console.log(
    `Order processed: ${order.id}, Item: ${order.item}, Quanitiy: ${order.quantity}`
  );
  // add a time delay to simulate completing the order
  setTimeout(() => {
    orderEmitter.emit("orderCompleted", order);
  }, 1000);
});

// register an event listener for the 'orderCompleted' event
orderEmitter.on("orderCompleted", (order) => {
  console.log(
    `Order completed: ${order.id}, Item: ${order.item}, Quanitiy: ${order.quantity}`
  );
});

// event listener for errors
orderEmitter.on("error", (err) => {
  console.error("Error:", err);
});

//simulate placing an order
const order = { id: 1, item: "Laptop", quantity: 2 };
orderEmitter.emit("orderPlaced", order);

//simulate placing another order
const order2 = { id: 2, item: "Phone", quantity: 1 };
orderEmitter.emit("orderPlaced", order2);
