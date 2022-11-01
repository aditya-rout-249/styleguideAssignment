// Programe to customize shopping cart

/**  getting cart from local Storage
 *  else an new object  will be assigned to it with items object and Total Value of cart
 */
const cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : { items: {}, value: 0 };

// function to add item to cart and item details are fetched from server
const addItem = (item = {}) => {
  const { cost, id } = item;

  //condition if item is already present
  if (cart.items[id]) {
    const quantity = cart.items[id].quantity;
    cart.items[id] = { ...item, quantity: quantity + 1 };
  } else {
    cart.items[id] = { ...item, quantity: 1 };
    cart.value += cost;
  }

  //setting  new instance of  cart to local storage
  localStorage.setItem("cart", cart);
};

//fucntion to remove item from cart
const removeItem = (item = {}) => {
  const { cost, id } = item;
  if (cart.items[id].quantity > 1) {
    const quantity = cart.items[id].quantity;
    cart.items[id] = { ...item, quantity: quantity - 1 };
    cart.value -= cost;
  } else {
    cart.items[id] = null;
    cart.value -= cost;
  }

  //setting  new instance of  cart to local storage
  localStorage.setItem("cart", cart);
};

//to get cart value
const getCartValue = () => {
  return cart.value;
};
