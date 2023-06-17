import ReactImg from "../assets/testimage.jpg";
function LoginPage() {
  return (
    <>
      {/* div pembungkus semuanya */}
      <div className="flex flex-row items-center h-screen">
        {/* div title */}
        <div className=" container flex flex-col mr-6 items-start">
          <img className="w-96" src={ReactImg} alt="car" />
          <h1 className="text-4xl">Welcome to May Jlo Shop</h1>
          <p>
            Dont have account,{" "}
            <a href="#" className="text-blue-400">
              register here
            </a>
          </p>
        </div>
        {/* div input */}
        <div className="flex flex-col container bg-red-400">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label className=" text-gray-700 text-sm font-bold mb-2 items-start flex">
              Username
            </label>
            <input
              type="text"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-5"
            />
            <label className="items-start flex text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className="w-80 h-10 bg-orange-400 border rounded-md mx-auto mt-3">
              Login
            </button>
            <p>Forget Password?</p>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
