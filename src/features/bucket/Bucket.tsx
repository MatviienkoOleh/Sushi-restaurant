import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { BucketArrayI } from "../../interface/global";
import BucketPosition from "../bucketPosition/BucketPosition";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { setOrder } from "../makeOrderForm/makeOrderFormSlice";
import styles from "./Bucket.module.css";

const Bucket = () => {
  const orderId = useAppSelector((state) => state.position.orderId);
  const menu = useAppSelector((state) => state.categories.menu);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  let bucketArray: BucketArrayI | any = [];

  let ordersIds = Object.keys(orderId);
  let arrayOfOrder: any = [];
  let total = 0;

  const makeOrder: React.MouseEventHandler = () => {
    dispatch(setOrder(bucketArray));
    navigate('/makeOrder');
  };

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        {ordersIds.length >= 1
          ? ordersIds.map((key, index) => {
              let copyOrder: any = menu.find((el) => el.id === +key);
              let countOfPosition: number = orderId[copyOrder.id];
              let priceOnCount: number = +copyOrder.price * +countOfPosition;
              arrayOfOrder.push(+priceOnCount);
              total = arrayOfOrder.reduce((a: string, b: string) => {
                return parseFloat(a) + parseFloat(b);
              });

              bucketArray.push({
                ...copyOrder,
                count: countOfPosition
              })

              let showPosition =
                countOfPosition > 0 ? (
                  <BucketPosition
                    key={copyOrder.id}
                    pos={copyOrder}
                    count={countOfPosition}
                  />
                ) : null;

              return showPosition;
            })
          : null}
        <div>
          <h2>Total: {total} $</h2>
          <button className={styles.button} onClick={makeOrder}>
            MAKE ORDER
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Bucket;
