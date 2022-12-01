import { useState } from 'react';
import { Container, Grid } from './styles';
import ProductCard from '../../components/ProductCard';
import Modal from '../../components/Modal';
import GlobalStyle from '../../assets/styles/global';
import { allProducts } from '../../mocks/allProduct';

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [modalProductId, setModalProductId] = useState(undefined);
  const burguers = allProducts.filter((product) => product.categorie === 'burguer');
  const drinks = allProducts.filter((product) => product.categorie === 'drink');
  const desserts = allProducts.filter((product) => product.categorie === 'dessert');

  function handleOpenModal(productId) {
    setModalProductId(productId);
    setIsOpenModal(true);
  }

  return (
    <Container isOpenModal={isOpenModal}>
      {isOpenModal && (
        <>
          <Modal setIsOpenModal={setIsOpenModal} productId={modalProductId} />
          <GlobalStyle hidden />
        </>
      )}

      <Grid>
        <a href="#category-hamburger" className="category-card">
          <img src={burguers[0].imageUrl} alt="burguer" />
          <div>Lanches</div>
        </a>
        <a href="#category-drink" className="category-card">
          <img src="https://www.querobbb.com.br/uploads/modules/itens/464930_foto_mini.jpg" alt="burguer" />
          <div>Bebidas</div>
        </a>
        <a href="#category-dessert" className="category-card">
          <img src="https://assets.delirec.com/images%2FQ2j1g1gbFhYP47ybdQeDBZss7UC2%2Frecipe%2Fc298075e-fa06-4767-ae6d-d10c3128bbc0-Petit-Gateau-gallery-0" alt="burguer" />
          <div>Sobremesas</div>
        </a>
      </Grid>

      {burguers.length > 0 && <h1 id="category-hamburger">Lanches</h1>}
      <Grid>
        {burguers.map(({
          id, imageLabel, imageUrl, title, price,
        }) => (
          <ProductCard
            onClick={() => handleOpenModal(id)}
            key={id}
            setIsOpenModal={setIsOpenModal}
            imageUrl={imageUrl}
            imageLabel={imageLabel}
            title={title}
            price={price}
          />
        ))}
      </Grid>

      {drinks.length > 0 && <h1 id="category-drink">Bebidas</h1>}
      <Grid>
        {drinks.map(({
          id, imageLabel, imageUrl, title, price,
        }) => (
          <ProductCard
            onClick={() => handleOpenModal(id)}
            key={id}
            setIsOpenModal={setIsOpenModal}
            imageUrl={imageUrl}
            imageLabel={imageLabel}
            title={title}
            price={price}
          />
        ))}
      </Grid>

      {desserts.length > 0 && <h1 id="category-dessert">Sobremesas</h1>}
      <Grid>
        {desserts.map(({
          id, imageLabel, imageUrl, title, price,
        }) => (
          <ProductCard
            onClick={() => handleOpenModal(id)}
            key={id}
            setIsOpenModal={setIsOpenModal}
            imageUrl={imageUrl}
            imageLabel={imageLabel}
            title={title}
            price={price}
          />
        ))}
      </Grid>

    </Container>
  );
}
