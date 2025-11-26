import type { UserType } from "../types/UserType";

interface UserComponentProps {
    user:UserType;
}
const UserComponent = ({user}:UserComponentProps) => {
  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-xl">
      <img
        className="rounded-xl"
        src={user.image}
        alt=""
      />
      <h2 className="text-xl font-semibold my-4 text-left pl-3">
        {user.firstName + user.lastName}
      </h2>

      <p className="text-gray-600 mt-2 text-justify px-4 tracking-tight">
        My name is {user.firstName + user.lastName}, and I am {user.age} years old. I am currently
        focused on improving my abilities and gaining more experience in my
        field. For any communication, you can reach me at {user.email}.
      </p>
      <button className="w-2/3 py-2 bg-linear-to-r from-purple-600 to-pink-600 font-bold text-white my-5 rounded-xl mx-auto ">Contact Me</button>
    </div>
  );
};

export default UserComponent;
