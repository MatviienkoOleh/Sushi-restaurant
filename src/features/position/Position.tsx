import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { PositionI } from "../../interface/global";
import styles from "./Position.module.css";
import { addToOrderId, deleteFromOrderId } from "./positionSlice";

interface PositionProps {
  position: PositionI;
}

const Position: React.FC<PositionProps> = ({ position }) => {
  const dispatch = useAppDispatch();


  return (
    <div className={styles.position}>
      <div>
        <h4 className={styles.name}>{position.name}</h4>
        <img className={styles.image} src={position.url} alt="sushi" />
      </div>
      <p className={styles.description}>{position.desc}</p>
      <div className={styles.piceSection}>
        <p className={styles.price}>Price: {position.price} $</p>
        <div className={styles.buttonBlock}>
          <button className={styles.button} onClick={() => dispatch(deleteFromOrderId(position.id))}>-</button>
          <button className={styles.button} onClick={() => dispatch(addToOrderId(position))}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Position;
