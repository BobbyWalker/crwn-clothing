import styled, {css} from 'styled-components'

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  `;

export const CheckoutImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    `;

export const CheckoutImage = styled.img`
    width: 100%;
    height: 100%;
    `;

const checkoutColumnWidth = css`
    width: 23%;
`
const CheckoutSpan = styled.span`
    ${checkoutColumnWidth};
    `;

export const CheckoutName = CheckoutSpan;
export const CheckoutQuantityContainer = styled.div`
    display: flex;
    ${checkoutColumnWidth};
`;
export const CheckoutQuantity = styled.span`
    margin: 0 20px;
`;
export const CheckoutPrice = CheckoutSpan;

export const CheckoutArrow = styled.div`
    cursor: pointer;
    `;

export const CheckoutRemoveButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
    `;
