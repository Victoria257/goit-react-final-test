import { useDispatch } from "react-redux";
import { UsersList } from "../../components/UserList/UserList";
import { useEffect } from "react";
import { fetchUsers } from "../../redux/operations";

export const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return <UsersList />;
};
