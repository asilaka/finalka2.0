import React from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./Header.module.scss";

const Header = () => {
  const location = useLocation(); // Получаем текущий маршрут

  const scrollToTop = () => {
    if (location.pathname !== "/") {
      // Если не на главной странице, перенаправляем на "/"
      window.location.href = "/";
    } else {
      // Если уже на главной, просто скроллим вверх
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <section>
      <div className={s.start}>
        <div className={s.container}>
          <div className={s.main}>
            {/* При клике: либо скролл вверх, либо переход на главную */}
            <img
              className={s.tyanka}
              src="https://pngicon.ru/file/uploads/anime-girls.png"
              alt="Tyanka"
              onClick={scrollToTop}
            />
            <div className={s.menu}>
              <Link to="/currency">
                Currency
                <img src="/public/coin.svg" alt="Currency" />
              </Link>
              <Link to="/join">
                Join
                <img src="/public/man.svg" alt="Join" />
              </Link>
              <Link to="/wishlist">
                Wishlist
                <img src="/public/heart.svg" alt="Wishlist" />
              </Link>
              <Link to="/cart">
                Cart
                <img src="/public/bitcoin.svg" alt="Cart" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
