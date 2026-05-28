export const ACTIONS = {
  ADD_PRODUCT: "add-product",
  REMOVE_PRODUCT: "remove-product",
  REMOVE_ALL_PRODUCT: "remove-all-product",
  EDIT_PRODUCT: "edit-product"
};

function createProduct(name, amount, category) {
  return {
    id: Date.now(),
    name,
    amount: Number(amount),
    category
  };
}

export function reducer(products, action) {
  switch (action.type) {

    case ACTIONS.ADD_PRODUCT:
      return [
        ...products,
        createProduct(
          action.payload.name,
          action.payload.amount,
          action.payload.category
        )
      ];

    case ACTIONS.REMOVE_PRODUCT:
      return products.filter(p => p.id !== action.payload);

    case ACTIONS.REMOVE_ALL_PRODUCT:
      return [];

    case ACTIONS.EDIT_PRODUCT:
      return products.map(product =>
        product.id === action.payload.id
          ? action.payload
          : product
      );

    default:
      return products;
  }
}