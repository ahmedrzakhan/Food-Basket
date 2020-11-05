import React, { Component } from "react";
import axios from "axios";
class Test extends Component {
  getCat = async () => {
    const config = {
      method: "get",
      url:
        "http://localhost:5000/api/categories/category?category=Fruits-and-Vegetables",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const result = await axios(config);
      console.log(result);
    } catch (err) {
      console.log("err", err);
    }
  };

  componentDidMount() {
    this.getCat();
  }

  render() {
    return <div>Test</div>;
  }
}

export default Test;
