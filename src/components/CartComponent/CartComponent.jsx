import React from "react";
import {
  StyleNameProduct,
  WrapperCarStyle,
  WrapperDiscountText,
  WrapperImageStyle,
  WrapperPriceText,
  WrapperReportText,
} from "./style";
import { StarFilled } from "@ant-design/icons";
import logo1 from "../../assets/images/logo1.png";

const CartComponent = () => {
  return (
    <WrapperCarStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 240 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <WrapperImageStyle
        src={logo1}
        alt="Logo Product"
        style={{
          width: "72px",
          height: "18px",
          position: "absolute",
          top: -1,
          left: -1,
          borderTopLeftRadius: "3px",
        }}
      />
      <StyleNameProduct>Iphone</StyleNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span> 4.9 </span>
          <StarFilled style={{ fontSize: "12px", color: "black" }} />
        </span>
        <span> | Đã bán 585+ </span>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000
        <WrapperDiscountText>-5%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCarStyle>
  );
};
export default CartComponent;
