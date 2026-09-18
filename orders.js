function createOrder(items) {
  return {
    items,
    total: items.reduce((sum, i) => sum + i.price * i.qty, 0),
    status: 'pending',
  };
}

function applyDiscount(order, percent) {
  const discounted = order.total * (1 - percent / 100);
  return { ...order, total: discounted };
}

function cancelOrder(order) {
  return { ...order, status: 'cancelled', total: 0 };
}

function calculateLoyaltyPoints(order) {
  const pts = Math.round(order.total / 10);

  if (order.total > 100) return pts * 1.5;

  return pts;
}

module.exports = { createOrder, applyDiscount, cancelOrder, calculateLoyaltyPoints };
