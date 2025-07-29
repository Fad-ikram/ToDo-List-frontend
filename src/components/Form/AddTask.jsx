import Input from "../../components/Form/Input";
import { X } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import DropDownMenu from "../../components/DropDown";

const AddTask = ({ setTasks, setShowModel }) => {

  const selectRef = useRef(null);

  function handleClickOutside(event) {
    console.log(event.target);
    
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setShowModel(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Low",
    date: "",
    isCompleted: false,
  });

  const handleAddTask = () => {
    if (!task.title || !task.description || !task.date) {
      alert("Please fill all fields");
      return;
    }
    setTasks((prevTasks) => [...prevTasks, task]);
    setShowModel(false);
  };

  return (
    <div className=" z-50 fixed inset-0 w-screen h-screen bg-black bg-opacity-45">
      <div ref={selectRef}
        className="bg-white rounded-lg shadow-md p-8 flex flex-col gap-4 justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
      >
        <div>
          <h4 className="text-2xl font-bold flex justify-between items-center">
            Add New Task{" "}
            <X
              onClick={() => {
                setShowModel(false);
              }}
              className="text-gray-600 hover:cursor-pointer"
              size={16}
            />
          </h4>
          <p className="text-gray-500">
            Create a new task to add to your todo list.
          </p>
        </div>
        <Input label="Title" placeholder="Task title" />
        <div className="flex flex-col ">
          <label className="text-sm pb-2" htmlFor={"description"}>
            Description
          </label>
          <textarea
            className="border-[1.5px] border-gray-400 rounded-md px-3 py-2 w-full"
            id={"description"}
            placeholder={"Enter Task description"}
          ></textarea>
          <div className="flex gap-4 mt-4">
            <DropDownMenu
              onOptionChose={(option) => {
                setTask({ ...task, priority: option });
              }}
              label={"Priority"}
              defaultTitle={"Low"}
              options={["Low", "Medium", "High"]}
            />
            <Input
              label={"Due Date"}
              type={"date"}
              onChange={(event) => {
                setTask({ ...task, date: event.target.value });
              }}
              placeholder={"Enter Due Date"}
            />
          </div>
          <button
            onClick={() => {
              handleAddTask();
            }}
            className="bg-black rounded-lg px-4 py-2  text-white self-end mt-8 transition-all duration-500 hover:opacity-70"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
