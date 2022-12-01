import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { Container, Overlay } from './styles';

export default function Sidebar({ setIsOpenSidebar }) {
  return createPortal(
    <Overlay onClick={() => setIsOpenSidebar(false)}>
      <Container>
        <header>
          <FaTimes onClick={() => setIsOpenSidebar(false)} />
        </header>
        <hr color="grey" />
        <div>
          <h1>Cardápio</h1>
          <h1>Pedidos</h1>
        </div>
      </Container>
    </Overlay>,
    document.getElementById('fullscreen'),
  );
}
