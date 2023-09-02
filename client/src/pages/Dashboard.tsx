import Card from "../components/dashbaord/Card";
import { InvoiceIcon, LoveIcon, MoneyIcon, UserIcon } from "../icons/IconPool";
import Nav from "../components/dashbaord/Nav";
import Activites from "../components/dashbaord/Activities";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <main className="w-full h-auto min-h-screen flex gap-2 text-white bg-black ">
      {/* <SideBar /> */}
      <div className="w-full px-4 space-y-4">
        <div className="w-full flex justify-between p-4 border-b">
          <div>
            <h1 className="text-xl font-semibold">Good morning, Anita!</h1>
            <p className="text-sm">Wednesday, 2023</p>
          </div>
          <div className="flex items-center bg-gray-100 basis-1/2 rounded-md">
            <input
              type="search"
              placeholder="search"
              className="w-full p-2 bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center bg-gradient p-2">
            <button className="bg-blue-600">Create new</button>
          </div>
        </div>

          <Nav />
        <div className="w-full">
          <div
            id=""
            className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4"
          >
            <Card
              title={"Total Clicks"}
              content={"1,894"}
              icon={<MoneyIcon />}
              stats={"+3% increase from last week"}
            />
            <Card
              title={"Clicks rate"}
              content={"2,345"}
              icon={<InvoiceIcon />}
              stats={"15% increase from last month"}
            />
            <Card
              title={"Clients"}
              content={"1,279"}
              icon={<UserIcon />}
              stats={"9% increase from last month"}
            />
            <Card
              title={"Loyalty"}
              content={"70%"}
              icon={<LoveIcon />}
              stats={"10% drop from last month"}
            />
          </div>
        </div>
        <div className="flex gap-4">
          <Activites />
          <div className="w-full h-full  bg-slate-950">
            <p>Where you clicks comes from!</p>
            Geographic data
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
