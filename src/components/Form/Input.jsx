import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Input = ({ label, type, placeholder, onChange }) => {
  const [Password, setPassword] = useState(false);
  return (
    <div className="flex flex-col ">
      <label className="text-sm pb-2" htmlFor={label}>
        {label}
      </label>
      <div className="relative">
        <input
          onChange={onChange}
          className="border-[1.5px] border-gray-400 rounded-md px-4 py-2 w-full"
          type={
            type !== "password" ? type : !Password ? "password" : "text"
          }
          id={label}
          placeholder={placeholder}
        />
        {type === "password" && (
          <div className="absolute hover:cursor-pointer right-3 top-1/2 transform -translate-y-1/2">
            {Password ? (
              <EyeOff size={16} onClick={() => setPassword(false)} />
            ) : (
              <Eye size={16} onClick={() => setPassword(true)} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;