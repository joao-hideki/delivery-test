import { createPortal } from 'react-dom';
import { FaMinus, FaPlus, FaTimes } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { Container, Overlay } from './style';
// import burguer from '../../assets/images/tradicional-burguer.png';
import Counter from '../Counter';
import { allProducts } from '../../mocks/allProduct';
import { Context } from '../../contexts/Context';

export default function Modal({ setIsOpenModal, productId }) {
  const [productQuantity, setProductQuantity] = useState(1);
  if (productQuantity < 1) return setProductQuantity(1);
  const [product] = allProducts.filter((item) => item.id === productId);
  const {
    imageUrl, imageLabel, title, price, description,
  } = product;
  const { state, dispatch } = useContext(Context);

  const handleAddProductToCart = (id, quantity) => {
    dispatch({
      type: 'ADD_PRODUCT_TO_SHOPPING_CART',
      payload: {
        request: {
          id,
          quantity,
        },
      },
    });
    setIsOpenModal(false);
  };

  if (!product) return null;

  return createPortal(
    <Overlay>
      <Container>
        <div className="background-color">
          <FaTimes onClick={() => setIsOpenModal(false)} />
        </div>
        <div className="product-image">
          <img src={imageUrl} alt={imageLabel} />
        </div>

        <div className="product-infos">
          <h1>{title}</h1>
          <hr color="#FB9400" />
          <p>{description}</p>
          <h3>Quantidade</h3>
          <div>
            <Counter>
              <button type="button" onClick={() => setProductQuantity((prevState) => prevState - 1)}>
                <FaMinus />
              </button>
              <span>{productQuantity}</span>
              <button type="button" onClick={() => setProductQuantity((prevState) => prevState + 1)}>
                <FaPlus />
              </button>
            </Counter>
            <h1>
              R$
              { (parseFloat(price) * productQuantity).toFixed(2)}
            </h1>
          </div>
          <button type="button" onClick={() => handleAddProductToCart(productId, productQuantity)}>
            Adicionar ao Carrinho
          </button>
        </div>
      </Container>
    </Overlay>,
    document.getElementById('fullscreen'),
  );
}
