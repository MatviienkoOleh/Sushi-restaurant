import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { PositionI } from "../../interface/global";
import OrderPosition from "../orderPosition/OrderPosition";
import styles from "./Order.module.css";

const Order = () => {
  const navigate = useNavigate();
  const orderId = useAppSelector((state) => state.position.orderId);
  const menu = useAppSelector((state) => state.categories.menu);

  let ordersIds = Object.keys(orderId);
  let arrayOfOrder: any = [];
  let total = 0;

  return (
    <div className={styles.order}>
      <section className={styles.orderList}>
        <h2 className={styles.header}>Order</h2>
        {ordersIds.length >= 1
          ? ordersIds.map((key, index) => {
              let copyOrder: PositionI | any = menu.find((el) => el.id === +key);
              let countOfPosition: number = orderId[copyOrder.id];
              let priceOnCount = copyOrder.price * +countOfPosition;
              arrayOfOrder.push(priceOnCount);
              total = arrayOfOrder.reduce((a: string, b: string) => {
                return parseFloat(a) + parseFloat(b);
              });

              let showPosition =
                countOfPosition > 0 ? (
                  <OrderPosition
                    key={copyOrder.id}
                    pos={copyOrder}
                    count={countOfPosition}
                  />
                ) : null;

              return showPosition;
            })
          : null}
      </section>
      {ordersIds.length >= 1 ? (
        <section className={styles.orderTotal}>
          <div className={styles.totalPrice}>Total price: {total} $</div>
          <button className={styles.button} onClick={() => navigate('/bucket')}>Order</button>
        </section>
      ) : null}
    </div>
  );
};

export default Order;
