import React from "react";
import { PositionI } from "../../interface/global";
import styles from "./OrderPosition.module.css";

interface OrderPositionProps {
  pos: any;
  count: number;
}

const OrderPosition: React.FC<OrderPositionProps> = ({ pos, count }) => {
  return (
    <div className={styles.orderPosition}>
      <span className={styles.text}>
        <b className={styles.bold}>{pos.categories}:</b> {pos.name}
      </span>
      <div>
        <span className={styles.text}><b className={styles.bold}>price:</b> {pos.price} $</span>
        <span className={styles.text}><b className={styles.bold}>count:</b> {count}</span>
      </div>
    </div>
  );
};

export default OrderPosition;
