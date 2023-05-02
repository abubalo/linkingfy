const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient">
      <div className="space-y-12">
        <div className="flex flex-col w-full space-y-3 text-center text-white">
          <h1 className="text-5xl font-bold">
            Generate a custom URL on the go!
          </h1>
          <p className="mx-auto lg:w-3/5">
            Say goodbye to long, complicated URLs with our custom link
            generator. Create short, memorable links that are perfect for
            sharing on social media, email, or anywhere else online.
          </p>
        </div>
        <div className="space-y-3 text-white">
          <label htmlFor="" className="block w-full text-center ">
            Paste your long url and get a custom one.
          </label>
          <div className="flex items-center justify-between w-1/2 gap-1 mx-auto overflow-hidden bg-white rounded-md">
            <input
              type="text"
              name="originalLink"
              placeholder="https://www.theladders.com/career-advice/the-problem-with-habits"
              className="w-full px-6 py-4 focus:outline-none focus-within:"
            />
            <button className="font-semibold bg-gradient px-6 py-4 border-[5px] border-white text--white rounded-lg">
              Generate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
