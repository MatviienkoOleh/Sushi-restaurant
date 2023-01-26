import { useAppSelector } from "../../app/hooks";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Order from "../order/Order";
import Position from "../position/Position";
import styles from "./Categories.module.css";

const Categories = () => {
  const menu = useAppSelector((state) => state.categories.menu);

  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div className={styles.menu}>
          <section className={styles.sushi}>
            <h2 className={styles.header}>Sushi</h2>
            <div className={styles.sushiList}>
              {menu
                .filter((position) => {
                  return position.categories === "sushi";
                })
                .map((position) => {
                  return <Position key={position.id} position={position} />;
                })}
            </div>
          </section>
          <section className={styles.sushi}>
            <h2 className={styles.header}>Rolls</h2>
            <div className={styles.sushiList}>
              {menu
                .filter((position) => {
                  return position.categories === "rolls";
                })
                .map((position) => {
                  return <Position key={position.id} position={position} />;
                })}
            </div>
          </section>
          <section className={styles.sushi}>
            <h2 className={styles.header}>Ramen</h2>
            <div className={styles.sushiList}>
              {menu
                .filter((position) => {
                  return position.categories === "ramen";
                })
                .map((position) => {
                  return <Position key={position.id} position={position} />;
                })}
            </div>
          </section>
        </div>
        <Order />
      </main>
      <Footer />
    </div>
  );
};

export default Categories;
