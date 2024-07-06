import Transactions from "./components/Transactions";
function App() {
  return (
    <div className="w-full bg-gray-800 h-screen">
      <div className="flex flex-wrap items-center justify-center min-h-[100vh] w-full">
        <h1 className="text-white text-center w-full text-3xl ">
          The list of Transactions of Customers
        </h1>
        <Transactions/>
      </div>
    </div>
  );
}

export default App;
