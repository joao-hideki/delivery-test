import { FaHamburger, FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useContext, useState } from 'react';
import { Container } from './styles';
import Sidebar from '../Sidebar/index';
import GlobalStyle from '../../assets/styles/global';
import ShoppingCart from '../ShoppingCart';
import { Context } from '../../contexts/Context';

export default function Header() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);
  const { state } = useContext(Context);
  const { shoppingCart } = state;
  const allProductsQuantity = shoppingCart.reduce((accumulator, request) => accumulator + request.quantity, 0);

  return (
    <Container>
      {isOpenSidebar && (
        <>
          <Sidebar setIsOpenSidebar={setIsOpenSidebar} />
          <GlobalStyle hidden />
        </>
      )}
      {isOpenShoppingCart && (
        <>
          <ShoppingCart setIsOpenShoppingCart={setIsOpenShoppingCart} />
          <GlobalStyle hidden />
        </>
      )}
      <GiHamburgerMenu onClick={() => setIsOpenSidebar(true)} />
      <div className="logo">
        <FaHamburger />
        <span>LancheDaHora</span>
      </div>
      <div className="shopping-cart-icon">
        <FaShoppingCart onClick={() => setIsOpenShoppingCart(true)} />
        <div>{allProductsQuantity}</div>
      </div>
    </Container>
  );
}
