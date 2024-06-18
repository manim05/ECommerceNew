const updateCart = (cartItems, productId, action, products) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.productId === productId
    );
    let updatedCartItems = [...cartItems];
  
    if (existingItemIndex !== -1) {
      const existingItem = updatedCartItems[existingItemIndex];
  
      if (action === "add") {
        updatedCartItems[existingItemIndex].quantity++;
      } else if (action === "remove") {
        if (existingItem.quantity > 1) {
          updatedCartItems[existingItemIndex].quantity--;
        } else {
          updatedCartItems = updatedCartItems.filter(
            (item) => item.productId !== productId
          );
        }
      }
    } else if (action === "add") {
      const productToAdd = products.find((product) => product.id === productId);
      updatedCartItems.push({
        productId: productId,
        product: productToAdd,
        quantity: 1,
      });
    }
  
    return updatedCartItems;
  };

const calculateTotalAmount = (cartItems) => cartItems.reduce((total, item) => total + item.product.price * item.quantity,0);


export {updateCart,calculateTotalAmount};

