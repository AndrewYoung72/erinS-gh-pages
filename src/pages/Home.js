export default function Home() {
  return (
    <div className="grid">
      <div className="">
        <nav className=" text-end">
          <div className="border-b-2 bg-slate-200 border-primary py-2">
            <h1 className=" text-primary underline font-bold text-6xl text-center font-serif p-4">
              See Food
            </h1>
          </div>
        </nav>
      </div>
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-xs">
          <form
            action=""
            className="bg-white shadow-2xl border-2 border-primary rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="restSearch"
                // for="restSearch"
                className="block text-sm font-bold mb-2"
              >
                Image Search
              </label>
              <input
                type="text"
                className="shadow border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Restaurant Name"
                id="restSearch"
              />
              <div className="flex items-center justify-between">
                <button className=" btn border-4 mt-4 hover:border-primary transform hover:scale-125 bg-white ">
                  Login
                </button>
                <button className=" btn border-4 mt-4 hover:border-primary transform hover:scale-125 bg-white ">
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="grid-cols-2">
        <h1>Space for advertising</h1>
      </div>
    </div>
  );
}
