import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { Context } from '../../contexts/Context';
import { Container, Overlay, RequestContainer } from './styles';

export default function ShoppingCart({ setIsOpenShoppingCart }) {
  const { state, dispatch } = useContext(Context);
  const { shoppingCart } = state;
  const allProductsPrice = shoppingCart.reduce((accumulator, request) => {
    const { price } = request.productData;
    return accumulator + parseFloat(price) * parseFloat(request.quantity);
  }, 0);
  return createPortal(
    <Overlay onClick={() => setIsOpenShoppingCart(false)}>
      <Container>
        <header>
          <FaTimes onClick={() => setIsOpenShoppingCart(false)} />
        </header>
        {shoppingCart.length > 0 && (
        <RequestContainer>
          {shoppingCart.map(({ productData, quantity }) => {
            const {
              id, imageUrl, imageLabel, title, price,
            } = productData;

            return (
              <div key={id}>
                <img src={imageUrl} alt={imageLabel} />
                <div>
                  <p>{title}</p>
                  <span>{`Quantidade: ${quantity}`}</span>
                </div>
                <p>{`R$ ${(price * quantity).toFixed(2)}`}</p>
              </div>
            );
          })}
          <hr color="grey" />
          <div className="price">
            <p>Total:</p>
            <p>{`R$ ${allProductsPrice.toFixed(2)}`}</p>
          </div>
          <button type="button">Finalizar Pedido</button>
        </RequestContainer>
        )}

      </Container>
    </Overlay>,
    document.getElementById('fullscreen'),
  );
}
