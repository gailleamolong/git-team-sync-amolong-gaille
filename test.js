const orders = require('./orders');

let failures = 0;
function assertEqual(actual, expected, label) {
  if (actual !== expected) {
    console.error(`FAIL: ${label} — expected ${expected}, got ${actual}`);
    failures++;
  } else {
    console.log(`PASS: ${label}`);
  }
}

const order = orders.createOrder([{ price: 10, qty: 2 }, { price: 5, qty: 4 }]); // total = 40
assertEqual(order.total, 40, 'order total');
assertEqual(order.status, 'pending', 'initial status');

const discounted = orders.applyDiscount(order, 10);
assertEqual(discounted.total, 36, '10% discount');

const cancelled = orders.cancelOrder(order);
assertEqual(cancelled.status, 'cancelled', 'cancel status');
assertEqual(cancelled.total, 0, 'cancel zeroes total');

const loyaltyOrder = orders.createOrder([{ price: 20, qty: 3 }]); // total = 60
assertEqual(orders.calculateLoyaltyPoints(loyaltyOrder), 6, 'loyalty points for a $60 order');

process.exitCode = failures > 0 ? 1 : 0;
