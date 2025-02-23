import React from 'react';
import s from './Dolar.module.scss';
const Dolar = () => {
  return (
    <>
      <section>
        <div className={s.wrapper}>
          <div className={s.card}>
            <h1>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </h1>
          </div>
          <div className={s.card}>
            <h2>Support</h2>
            <p>Check order status</p>
            <p>Shipping & Returns</p>
            <p>Help/FAQ</p>
            <p>Terms of use</p>
            <p>Mountain instruction</p>
            <p>Contact us</p>
            <p>Privacy policy</p>
          </div>
          <div className={s.card}>
            <h2>About</h2>
            <p>What’s a Displate?</p>
            <p>Displate Club</p>
            <p>About Us</p>
            <p>Blog</p>
            <p>Career</p>
            <p>Copyrights</p>
          </div>
          <div className={s.cards}>

            <div className={s.card_img}>
              <h2>Find us</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error</p>

              <div className={s.image}>
                <img src="/Link.png" alt="" />
                <img src="/Link (1).png" alt="" />
                <img src="Link (2).png" alt="" />
                <img src="Link (3).png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dolar;
