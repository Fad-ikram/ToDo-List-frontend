import { UserPlus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import { useState } from "react";
const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user,setUser] = useState({fullName:"", email:"" , password:"" , confirmPassword:""});

const handleSignUp = (e) => { 
  e.preventDefault()
  if ( !user.fullName || !user.email || !user.password || !user.confirmPassword) {
    setError ("All fields are required" )
 return;

  }
  if (user.fullName.length < 3 ) {
    setError("Full name must be at least 3 characters");
    return;
  }
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email)) {
    setError("Invalid email format");
    return;
  }
  if (user.password.length < 6){
    setError("Password must be at least 6 characters");
    return;
  }
  if (user.confirmPassword !== user.password ){
    setError("Passwords do not match");
    return;
  }
  setError("")
  navigate("/Dashboard");
}
  return (
    <main className="bg-background h-screen flex flex-col items-center justify-center">
      <h1 className="text-primary text-4xl font-bold">TodoMaster</h1>
      <p className="pt-2 pb-4">Create your account to get started</p>
      <form className="bg-white border-[1.5px] border-gray-300 rounded-lg p-6  shadow-md flex flex-col w-[80%] sm:w-[50%] md:w-[40%] lg:w-[25%]">
        <h2 className="text-primary text-center font-semibold text-xl">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-500 pb-8">
          Sign up to start organizing your tasks
        </p>
        <div className="space-y-4 flex flex-col pb-6 text-start">
          {error && (
              <div className="text-red p-4 border-[1.5px] rounded-lg border-red">
              {error}{" "}
            </div>
          )}
          <Input
            label="Full Name"
            type="text"
            placeholder="Enter your full name"
            onChange={(e)=> {
              setUser({...user, fullName:(e.target.value)})
            }}
          />
          <Input label="Email" type="email" placeholder="Enter your email "   onChange={(e)=> {
              setUser({...user, email:(e.target.value)})
            }} />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
              onChange={(e)=> {
              setUser({...user, password:(e.target.value)})
            }}
          />
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your password"
              onChange={(e)=> {
              setUser({...user, confirmPassword:(e.target.value)})
            }}
          />
        </div>
        <Button
          Icon={<UserPlus size={16} />}
          text="Create Account"
          onClick={(e) => {
           handleSignUp(e)
          }}
          isLoading={loading}
        />

        <p className="text-center pt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link className="text-primary hover:underline" to={"/sign-in"}>
            Sign in here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
