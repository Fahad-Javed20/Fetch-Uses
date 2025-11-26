import type { UserType } from "../types/UserType";
import UserComponent from "./UserComponent";

interface UserListComponentProps {
  users: UserType[];
}

const UserListComponent = ({ users }: UserListComponentProps) => {
  return (
    <div className="flex gap-3 flex-wrap">
      {users.map((userData) => (
        <UserComponent key={userData.id} user={userData} />
      ))}
    </div>
  );
};

export default UserListComponent;
