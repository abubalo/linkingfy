import SideBar from "../components/SideBar";
import { RiArrowDropDownLine } from "react-icons/ri";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <main className="flex">
      <SideBar />
      <div className="w-4/5 h-screen">
        <div className="w-full flex justify-between p-4 border-b">
          <div>
            <h1 className="text-xl font-semibold">Good morning, Anita!</h1>
            <p className="text-sm">Wednesday, 2023</p>
          </div>
          <div className="flex items-center bg-gray-100 basis-1/2 rounded-md">
            <input type="search" placeholder="search" className="w-full p-2 bg-transparent outline-none"/>
          </div>
          <div className="flex items-center bg-gradient p-2">
            <button>Create new</button>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-start gap-5 p-2">
            <div className="border border-neutral-200 p-4 space-y-2">
              <h1 className="text-xl">Total Links</h1>
              <p className="text-3xl">30</p>
            </div>
            <div className="border border-neutral-200 p-4 space-y-2">
            <h1 className="text-xl">Clicks rate</h1>
              <div className="flex gap-2">
              <p className="text-3xl">20%</p>
              <small>in the past week</small>
              </div>
            </div>
            <div className="border border-neutral-200 p-4"></div>
          </div>
          <div className="w-full h-full flex bg-gray-50">
            <p>Where you clicks comes from!</p>
            Geographic data
            </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
