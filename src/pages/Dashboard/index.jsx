import {CircleCheck,Circle,Clock3,Calendar,LogOut,User,Plus} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Stats from "../../components/Form/dashboard/Stats";
import AddTask from "../../components/Form/AddTask";
import { useState } from "react";
import DropDown from "../../components/DropDown";
import TodoCard from "../../components/Form/dashboard/TaskCards";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <header className="flex justify-between items-center px-[10%] py-4 bg-white shadow-lg sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <h1 className="text-primary font-bold text-2xl">Todo Master</h1>
          <div className="flex items-center gap-2 text-gray-600">
            <User size={18} />
            Welcome, Ben-yelles Ikram
          </div>
        </div>

        <button
          onClick={() => {
            navigate("/sign-in");
          }}
          className="transition-all duration-500 hover:bg-gray-200 flex items-center gap-2 border-[1.5px] text-sm text-gray-700 border-gray-400 rounded-md px-4 py-2"
        >
          <LogOut size={16} /> LogOut
        </button>
      </header>
      <main className="bg-background  px-[10%] ">
        {showModel && (
          <AddTask setTasks={setTasks} setShowModel={setShowModel} />
        )}
        <section className="flex  items-center gap-8 justify-between pt-16">
          <Stats
            Icon={<Circle size={34} className="text-primary" />}
            title="Total Tasks"
            count={0}
            color="text-black"
          />
          <Stats
            Icon={<CircleCheck size={34} className="text-green" />}
            title="Completed"
            count={0}
            color="text-green"
          />
          <Stats
            Icon={<Clock3 size={34} className="text-orange" />}
            title="Pending"
            count={0}
            color="text-orange"
          />
          <Stats
            Icon={<Calendar size={34} className="text-red" />}
            title="High Priority"
            count={0}
            color="text-red"
          />
        </section>
        <section className="flex items-center justify-between mt-8 mb-4">
          <DropDown
            options={["All Tasks", "Pending", "Completed", "High Priority"]}
            defaultTitle={"All Tasks"}
            onOptionChose={(option) => {
              console.log(option);
            }}
          />
          <button
            onClick={() => {
              setShowModel(true);
            }}
            className="flex items-center gap-2 text-gray-100 text-sm hover:cursor-pointer bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700 transition-all duration-300"
          >
            <Plus size={17} /> Add Task
          </button>
          {showModel && <AddTask setShowModel={setShowModel} />}
        </section>
        <section className="mt-12 pb-16 flex flex-col gap-6">
          {tasks.map((task, index) => (
            <TodoCard
              key={index}
              title={task.title}
              description={task.description}
              priority={task.priority}
              date={task.date}
              isCompleted={task.isCompleted}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Dashboard;
