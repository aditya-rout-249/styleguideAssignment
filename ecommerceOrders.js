// programe to estimate ecommerce orders placed from a city during month
const population = 1776647;

// since only 9 percent of indian population is actively using ecommerce platform
function estimateOrders() {
  const segmentBelowPovertyLine = (population / 100) * 20;
  const ecommerceUsers = ((population - segmentBelowPovertyLine) / 100) * 9;

  // More than 10 orders per month
  const overSpenders = (ecommerceUsers / 100) * 5;

  // Average 2 orders per Month
  const averageSpenders = ecommerceUsers - overSpenders;

  return overSpenders * 10 + averageSpenders * 2 + "orders per  month";
}

estimateOrders() ;