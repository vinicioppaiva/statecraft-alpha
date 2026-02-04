import styles from './Layout.module.css';
import mapaImg from '../../assets/mapa.png'; 
import folhaImg from '../../assets/folha.png';

const Layout = ({ children }) => {
  return (
    <div 
      className={styles.mapWrapper} 
      style={{ '--map-bg': `url(${mapaImg})` }} // Passa a imagem pro CSS via variável
    >
      <div 
        className={styles.paperSheet}
        style={{ '--paper-bg': `url(${folhaImg})` }} // Passa a imagem pro CSS
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;