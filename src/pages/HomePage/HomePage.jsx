import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WrapperTypeProduct } from "./style";
import slider1 from "../../assets/images/slide1.png";
import slider2 from "../../assets/images/slide2.png";
import slider3 from "../../assets/images/slide3.png";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CartComponent from "../../components/CartComponent/CartComponent";
const HomePage = () => {
  const arr = ["TV", "Tulanh", "Laptop"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div
        id="container"
        style={{
          backgroundColor: "#efefef",
          padding: "0 120px",
          height: "1000px",
        }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <CartComponent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
