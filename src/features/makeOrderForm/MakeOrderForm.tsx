import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFormInfo } from "./makeOrderFormSlice";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import styles from "./MakeOrderForm.module.css";
import { useNavigate } from "react-router-dom";

const MakeOrderForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [submit, setSubmit] = useState(false);
  const name = useAppSelector((state) => state.makeOrderForm.form.name);
  const secondName = useAppSelector(
    (state) => state.makeOrderForm.form.secondName
  );
  const address = useAppSelector((state) => state.makeOrderForm.form.address);
  const phone = useAppSelector((state) => state.makeOrderForm.form.phone);
  const email = useAppSelector((state) => state.makeOrderForm.form.email);
  const form = useAppSelector((state) => state.makeOrderForm.form);

  const [nameError, setNameError] = useState("");
  const [isNameErrorValid, setIsNameErrorValid] = useState(false);

  const [secondNameError, setSecondNameError] = useState("");
  const [isSecondNameValid, setIsSecondNameValid] = useState(false);

  const [addressError, setAddressError] = useState("");
  const [isAddressErrorValid, setIsAddressErrorValid] = useState(false);

  const [phoneError, setPhoneError] = useState("");
  const [isPhoneErrorValid, setIsPhoneErrorValid] = useState(false);

  const [emailError, setEmailError] = useState("");
  const [isEmailErrorValid, setIsEmailErrorValid] = useState(false);

  // Dispatch to makeOrderFormSlice state
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch(setFormInfo({ id: event.target.id, value: event.target.value }));
  };

  // Submit method
  const formSubmitHandler = () => {
    alert("Thank you for your order we'll call you right back!");
    navigate("/");
    console.log(form);
    window.location.reload();
  };

  // Show error fields on bluer event
  const blurHandler: React.FocusEventHandler = (e) => {
    switch (e.target.id) {
      case "name":
        setIsNameErrorValid(true);
        break;
      case "secondName":
        setIsSecondNameValid(true);
        break;
      case "address":
        setIsAddressErrorValid(true);
        break;
      case "phone":
        setIsPhoneErrorValid(true);
        break;
      case "email":
        setIsEmailErrorValid(true);
        break;
    }
  };

  // Validate Form method
  const formValidator = () => {
    // validate name field
    if (name.length < 3) {
      setNameError("Incorrect name, name has to be longer than 2 digits!");
    } else {
      setNameError("");
    }

    // validate secondName field
    if (secondName.length < 5) {
      setSecondNameError(
        "Incorrect secondName, second Name has to be longer than 4 symbols!"
      );
    } else {
      setSecondNameError("");
    }

    // validate address field
    if (address.length < 4) {
      setAddressError(
        "Incorrect address, address has to be longer than 3 symbols!"
      );
    } else {
      setAddressError("");
    }

    // validate phone field
    if (phone.length <= 9) {
      setPhoneError(
        "Incorrect phone, phone has to be 10 symbols, example '0638074095' !"
      );
    } else {
      setPhoneError("");
    }

    // validate email field
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!re.test(String(email).toLowerCase())) {
      setEmailError("Incorrect email, has contain ....@gmail.com etc!");
    } else {
      setEmailError("");
    }
  };

  // Wait state from makeOrderFormSlice and then validate inputs
  useEffect(() => {
    formValidator();
  }, [email, name, secondName, address, phone]);

  // Check error fields and change button disabled
  useEffect(() => {
    if (
      nameError ||
      secondNameError ||
      addressError ||
      phoneError ||
      emailError
    ) {
      setSubmit(true);
    } else {
      setSubmit(false);
    }
  }, [nameError, secondNameError, addressError, phoneError, emailError]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <form className={styles.form} onSubmit={formSubmitHandler}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            name="name"
            id="name"
            placeholder="Type your name..."
            onChange={onChangeHandler}
            onBlur={blurHandler}
          />
          {isNameErrorValid && nameError ? (
            <div className={styles.error}>{nameError}</div>
          ) : null}
          <label className={styles.label} htmlFor="secondName">
            Second Name
          </label>
          <input
            className={styles.input}
            name="secondName"
            id="secondName"
            placeholder="Type your secondName..."
            onChange={onChangeHandler}
            onBlur={blurHandler}
          />
          {isSecondNameValid && secondNameError ? (
            <div className={styles.error}>{secondNameError}</div>
          ) : null}
          <label className={styles.label} htmlFor="address">
            Address
          </label>
          <input
            className={styles.input}
            name="address"
            id="address"
            placeholder="Type your address..."
            onChange={onChangeHandler}
            onBlur={blurHandler}
          />
          {isAddressErrorValid && addressError ? (
            <div className={styles.error}>{addressError}</div>
          ) : null}
          <label className={styles.label} htmlFor="phone">
            Phone
          </label>
          <input
            className={styles.input}
            name="phone"
            id="phone"
            type='number'
            placeholder="Type your phone..."
            onChange={onChangeHandler}
            onBlur={blurHandler}
          />
          {isPhoneErrorValid && phoneError ? (
            <div className={styles.error}>{phoneError}</div>
          ) : null}
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            name="email"
            id="email"
            placeholder="Type your email..."
            onChange={onChangeHandler}
            onBlur={blurHandler}
          />
          {isEmailErrorValid && emailError ? (
            <div className={styles.error}>{emailError}</div>
          ) : null}
          <button className={styles.submit} disabled={submit}>
            Submit
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default MakeOrderForm;
