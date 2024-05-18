import Image from "next/image";
import css from "./card.module.css";
import CardsContent from "../cardsContent/CardsContent";
import svg from "../../public/sprite/sprite.svg";

const Card = () => {
  return (
    <>
      {CardsContent.map(
        ({ icon, fill, iconWidth, iconHeight, title, list, link }, index) => {
          return (
            <div
              className={css.card_container}
              key={index}
              style={{ border: `2px solid ${fill}` }}
            >
              <svg
                className={css.icon}
                fill={fill}
                width={iconWidth}
                height={iconHeight}
              >
                <use xlinkHref={`/sprite/sprite.svg#${icon}`} />
              </svg>
              <h1 className={css.card_title}>{title}</h1>
              <ul className={css.card_list}>
                {list.map((elem, i) => {
                  return (
                    <li key={i} className={css.card_list__item}>
                      {elem}
                    </li>
                  );
                })}
              </ul>
              <a
                className={css.card_link}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title="Let`s go to Example.com"
              >
                View more
              </a>
            </div>
          );
        }
      )}
    </>
  );
};

export default Card;
