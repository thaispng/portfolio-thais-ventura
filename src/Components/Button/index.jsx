import styled from "styled-components";

const ButtonContainer = styled.button`  
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    height: 40px;
    background: #8973D9;
    color: #fff;
    font-family: Roboto, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background: #A79ECD;
        color: #fff;
    }
    `;

export default function Button({ children, ...props }) {
  return <ButtonContainer {...props}>{children}</ButtonContainer>;
}