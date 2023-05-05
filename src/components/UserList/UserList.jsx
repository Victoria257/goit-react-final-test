import { useSelector } from "react-redux";
import css from "./UserList.module.css";

export const UsersList = () => {
  const users = useSelector((state) => state.users.users.items);

  const handleClick = (id) => {
    console.log(id);
  };

  return (
    <ul className={css.list}>
      {users.map(({ user, tweets, id, followers, avatar }) => (
        <li id={id} key={id}>
          <img src={avatar} alt={`${user}'s avatar`} title={user}></img>
          <p>
            <span>{tweets}</span>Tweets
          </p>
          <p>
            <span>{followers}</span>Followers
          </p>
          <button type="button" onClick={() => handleClick(id)}>
            Follow
          </button>
        </li>
      ))}
    </ul>
  );
};
