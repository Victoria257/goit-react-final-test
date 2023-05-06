import { useSelector } from "react-redux";
import css from "./UserList.module.css";
import Logo from "../../assets/icons/Logo.svg";
import Icon from "../../assets/icons/icon.png";
import ELlipse from "../../assets/icons/ellipse.png";
import { useState } from "react";

export const UsersList = () => {
  const users = useSelector((state) => state.users.users.items);
  const [nameButton, setNameButton] = useState(false);
  const toggleClick = (id) => {
    setNameButton({
      ...nameButton,
      [id]: !nameButton[id],
    });
    console.log(id);
    setNameButton(!nameButton);
  };

  return (
    <ul className={css.list}>
      {users.map(({ user, tweets, id, followers, avatar }) => (
        <li id={id} key={id} className={css.item}>
          <div className={css.thumbLogo}>
            <img
              src={Logo}
              alt="logo"
              className={css.Logo}
              width={76}
              height={22}
            ></img>
          </div>
          <div className={css.thumbIcon}>
            <img src={Icon} alt="icon" width={308} height={168}></img>
          </div>
          <div className={css.line}></div>
          <img
            src={ELlipse}
            alt="ELlipse"
            width={80}
            height={80}
            className={css.ellipse}
          />
          <div className={css.thumbAvatar}>
            <img
              className={css.avatar}
              src={avatar}
              alt={`${user}'s avatar`}
              title={user}
              width={62}
              height={62}
            ></img>
          </div>

          <p className={css.tweets}>
            <span>{tweets}</span>Tweets
          </p>
          <p className={css.followers}>
            <span>{followers}</span>Followers
          </p>
          <button
            type="button"
            onClick={() => toggleClick(id)}
            className={css.button}
            style={{ backgroundColor: nameButton[id] ? "green" : "white" }}
          >
            {nameButton[id] ? "following" : "Follow"}
          </button>
        </li>
      ))}
    </ul>
  );
};
