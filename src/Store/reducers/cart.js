const initialState = {
  cartList: [
    // {
    //   id: "sp_1",
    //   name: "iphoneX",
    //   price: "3000",
    //   quantity:1,
    //   screen: "screen_1",
    //   backCamera: "backCamera_1",
    //   frontCamera: "frontCamera_1",
    //   img: "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
    //   desc: "iPhone X features a new all-screen design. Face ID, which makes your face your password",
    // },
  ],
  cartUpdate: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      state.cartUpdate = [...state.cartList];
      // kiểm tra sp có nằm trong giỏ hàng chưa
      const foundIndexAdd = state.cartUpdate.findIndex((item) => {
        return item.id === action.payload.id;
      });

      // nếu chưa,thì thêm mới,const cartItem={product:item,quantity:1}
      if (foundIndexAdd === -1) {
        state.cartUpdate.push(action.payload);
      } else {
        // nếu có rồi thì lấy quantity++
        state.cartUpdate[foundIndexAdd].quantity++;
      }
      state.cartList = state.cartUpdate;
      return { ...state };

    // Delete cart
    case "DELETE_CART":
      state.cartUpdate = [...state.cartList];
      const foundIndexDelete = state.cartUpdate.findIndex((item) => {
        return item.id === action.payload;
      });
      if (foundIndexDelete !== -1) {
        state.cartUpdate.splice(foundIndexDelete, 1);
      }
      state.cartList = state.cartUpdate;
      return { ...state };

    // Increase Quantity
    case "INCREASE_QUANTITY":
      state.cartUpdate = [...state.cartList];
      const foundIndexInc = state.cartUpdate.findIndex((item) => {
        return item.id === action.payload;
      });
      if (foundIndexInc !== -1) {
        state.cartUpdate[foundIndexInc].quantity++;
      }
      state.cartList = state.cartUpdate;
      return { ...state };
    
    // Increase Quantity
    case "DECREASE_QUANTITY":
      state.cartUpdate = [...state.cartList];
      const foundIndexDec = state.cartUpdate.findIndex((item) => {
        return item.id === action.payload;
      });
      if (foundIndexDec !== -1) {
        if(state.cartUpdate[foundIndexDec].quantity > 1)
        {
         state.cartUpdate[foundIndexDec].quantity--;
        } 
      }
      state.cartList = state.cartUpdate;
      return { ...state };

    default:
      return state;
  }

  // return { ...state };
};
export default reducer;
