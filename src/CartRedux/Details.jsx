import React, { Component } from "react";
import { connect } from "react-redux";

class Details extends Component {
  render() {
    const{name,screen,backCamera,frontCamera,img,desc}=this.props.products;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4">
            <h4>{name}</h4>
            <img src={img} alt="Please Choose Product" className="w-100" />
          </div>
          <div className="col-8">
            <h4>Thông số kĩ thuật</h4>
            <table className="table">
              <tr>
                <td>Man hinh</td>
                <td>{screen}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{frontCamera}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{backCamera}</td>
              </tr>
              <tr>
                <td>Mô tả</td>
                <td>{desc}</td>
              </tr>
            </table>
          </div>
          {/* {this.renderDetail()} */}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.product.selectedProduct,
  };
};
export default connect(mapStateToProps)(Details);
