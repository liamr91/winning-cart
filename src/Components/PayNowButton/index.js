import React from "react";
import styled from "styled-components";

const PayNow = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 10px;
  border: 2.5px solid #d2212e;
  background-color: #d2212e;
  color: white;
`;
const Split = styled.button`
  width: 5rem;
  height: 2rem;
  border-radius: 10px;
  background-color: white;
  border: 1.5px solid #d2212e;
  color: #d2212e;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 2rem;
  text-align: center;
`;



export default function PaymentButtons({ onClick, handleSplitOnClick }) {
  return (
    <>
      <ButtonContainer>
        <PayNow onClick={onClick}>Pay Now</PayNow>
        <Split onClick={handleSplitOnClick}>Split</Split>
      </ButtonContainer>
    </>
  );
}
