import { Container } from './styles';

export default function ProductCard({
  imageUrl, imageLabel, title, price, onClick,
}) {
  return (
    <Container onClick={onClick}>
      <img src={imageUrl} alt={imageLabel} />
      <h1>{title}</h1>
      <span>{`R$ ${price}`}</span>
    </Container>
  );
}
