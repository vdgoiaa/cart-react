import React, { Component } from "react";
import Details from "./Details";
import ProductList from "./ProductList";
import Cart from "./Cart";

class Home extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Bài tập giỏ hành</h1>
        <p
          data-toggle="modal"
          data-target="#modelId"
          style={{ textAlign: "center" }}
        >
          Giỏ hàng (0)
        </p>
        <ProductList />
        <Details />
        <Cart />
      </div>
    );
  }
}

export default Home;
