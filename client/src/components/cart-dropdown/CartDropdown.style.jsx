import styled from 'styled-components'
import CustomButton from '../custom-button/CustomButton.component'

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 80px;
  right: 20px;
  z-index: 5;
  `;

export const CartItemsContainer = styled.div`
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    `;

export const CartEmptyMessage = styled.span`
    font-size: 18px;
    margin: 50px auto;
    `;

export const CheckoutButton = styled(CustomButton)`
    margin-top: auto;
`;
