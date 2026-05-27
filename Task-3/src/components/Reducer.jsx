export const ACTIONS = {
  ADD_PRODUCT: "add-product",
  REMOVE_PRODUCT: "remove-product",
  INCREASE_QTY: "increase-qty",
  DECREASE_QTY: "decrease-qty",
};

function createProduct(name) {
  return {
    id: Date.now(),
    name: name,
    quantity: 1,
  };
}

export function reducer(products, action) {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCTS:
      return [...products, createProduct(action.payload.name)];

    case ACTIONS.REMOVE_PRODUCT:
      return products.filter((product) => product.id !== id);

    case ACTIONS.INCREASE_QTY:
      return products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });

    case ACTIONS.DECREASE_QTY:
      return products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...products,
            quantity: product.quantity > 1 ? product.quantity - 1 : 1,
          };
        }
        return product;
      });

    default:
      return products;
  }
}
