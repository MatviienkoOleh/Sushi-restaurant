import React from "react";
import { PositionI } from "../../interface/global";
import styles from "./BucketPosition.module.css";

interface BucketPositionProps {
  pos: PositionI;
  count: number;
}

const BucketPosition: React.FC<BucketPositionProps> = ({ pos, count }) => {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.image}
        src={pos.url}
        alt=""
        height="80px"
        width="80px"
      />
      <div className={styles.info}>
        <span className={[styles.infoSpan, styles.margin].join(' ')}>
          <b className={styles.bold}>{pos.categories}: </b>
          {pos.name}
        </span>
        <span className = {[styles.infoDescription, styles.margin].join(' ')}>{pos.desc}</span>
        <span className={styles.infoSpan}>
          <b className={styles.bold}>price: </b>
          {pos.price} $
        </span>
        <span className={styles.infoSpan}>
          <b className={styles.bold}>count: </b>
          {count}
        </span>
      </div>
    </div>
  );
};

export default BucketPosition;
