import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../Store/action";

class Cart extends Component {
  deleteCart=(id) => {
    return () => {
      this.props.dispatch(
        createAction("DELETE_CART",id)
      );
    };
  };
  increaseQuantity=(id)=>{
    return()=>{
      this.props.dispatch(createAction("INCREASE_QUANTITY",id));
    };
  };
  decreaseQuantity=(id)=>{
    return()=>{
      this.props.dispatch(createAction("DECREASE_QUANTITY",id));
    };
  };
  renderCart = () => {
    return this.props.cartProduct.map((item) => {
      return (
        <tr>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>
            <img src={item.img} alt="product" style={{ width: 100 }} />
          </td>
          <td>
            <button onClick={this.decreaseQuantity(item.id)} className="btn btn-info">-</button>
            <span>{item.quantity}</span>
            <button onClick={this.increaseQuantity(item.id)} className="btn btn-info">+</button>
          </td>
          <td>{item.price}</td>
          <td>{item.price * item.quantity}</td>
          <td>
            <button
              key={item.id}
              onClick={this.deleteCart(item.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Cart</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col-2">Product Code</th>
                    <th scope="col-2">Product Name</th>
                    <th scope="col-2">Image</th>
                    <th scope="col-2">Amount</th>
                    <th scope="col-2">Price</th>
                    <th scope="col-2">Money</th>
                    <th scope="col-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <th scope="row">1</th>
                    <td>Iphone 12 Promax</td>
                    <td>
                      <img src="" alt="product" />
                    </td>
                    <td>
                      <button className="btn btn-info">+</button>
                      <span>1</span>
                      <button className="btn btn-info">-</button>
                    </td>
                    <td>10000000</td>
                    <td>10000000</td>
                  </tr> */}
                  {this.renderCart()}
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cartProduct: state.cart.cartUpdate,
  };
};
export default connect(mapStateToProps)(Cart);
