import styled from "styled-components";
import { Card } from "antd";
export const WrapperCarStyle = styled(Card)`
  width: 200px;
  & img {
    height: 250px;
    width: 200px;
  },
  position: relative;
`;
export const WrapperImageStyle = styled.img`
  top: -1px;
  left: -1px;
  border-top-left-radius: 3px;
  width: "68px";
  height: "14px";
  position: "absolute";
`;

export const StyleNameProduct = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: rbg(56, 56, 61);
  font-weight: 400;
`;
export const WrapperReportText = styled.div`
  font-size: 11px;
  color: rgb(128, 128, 137);
  display: flex;
  align-items: center;
  margin: 6px 0 0px;
`;
export const WrapperPriceText = styled.div`
  color: rgb(255, 66, 78);
  font-size: 16px;
  font-weight: 500;
`;
export const WrapperDiscountText = styled.span`
  color: rgb(255, 66, 78);
  font-size: 14px;
  font-weight: 500;
`;
