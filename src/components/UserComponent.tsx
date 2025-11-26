
import type { UserType } from "../types/UserType";

interface UserComponentProps {
  user: UserType;
}

const UserComponent = ({ user }: UserComponentProps) => {
  const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <div style={{background:user.color}} className="max-w-sm w-full  shadow-lg rounded-xl">
      <img
        className="rounded-xl w-full h-32 object-cover"
        src={user.image}
        alt={fullName}
      />
      <h2 className="text-xl font-semibold my-4 text-left pl-3">
        {fullName}
      </h2>

      <p className="text-gray-600 mt-2 text-justify px-4 tracking-tight">
        My name is {fullName}, and I am {user.age} years old. I am currently
        focused on improving my abilities and gaining more experience in my
        field. For any communication, you can reach me at {user.email}.
      </p>

      <button className="w-2/3 py-1 bg-linear-to-r from-purple-600 to-pink-600 font-bold text-white my-5 rounded-xl mx-auto block">
        Contact Me
      </button>
    </div>
  );
};

export default UserComponent;
