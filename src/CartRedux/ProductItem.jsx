import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../Store/action/index";

class ProductItem extends Component {
  addToCart = () => {
    return () => {
      this.props.dispatch(
        createAction("ADD_TO_CART", {
          id: this.props.prod.id,
          name: this.props.prod.name,
          price:this.props.prod.price,
          img:this.props.prod.img,
          quantity:this.props.prod.quantity,
        })
      );
    };
  };
  handleDetail=()=>{
    return()=>{
      this.props.dispatch(createAction("SEE_DETAIL",{
        id:this.props.prod.id,
        name:this.props.prod.name,
        img:this.props.prod.img,
        screen:this.props.prod.screen,
        frontCamera:this.props.prod.frontCamera,
        backCamera:this.props.prod.backCamera,
        desc:this.props.prod.desc,
      }));
    };
  };
  render() {
    const { name, img} = this.props.prod;
    return (
      <div>
        <div className="card p-3">
          <img
            style={{ height: "250px", width: "100%" }}
            src={img}
            alt="product"
          />
          <h4>{name}</h4>
          <div>
            <button onClick={this.handleDetail()} className="btn btn-info mr-2">Detail</button>
            <button onClick={this.addToCart()} className="btn btn-danger">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(ProductItem);
