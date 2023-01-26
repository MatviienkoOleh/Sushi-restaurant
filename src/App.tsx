import { useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./features/footer/Footer";
import Header from "./features/header/Header";

function App() {
  const navigate = useNavigate()

  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        <section className={styles.mainInfo}>
          <h1 className={styles.header}>Sushi shop</h1>
          <p className={styles.paragraph}>This website will help you to make an order in our restaurant</p>
          <button className={styles.button} onClick={()=> navigate('/categories')}>Menu</button>
        </section>
        <img className={styles.homeLogo} src={'./../assets/sushiMain.png'} alt="HomeLogo" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
