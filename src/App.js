import vehicleData from "./data.json";

function App() {
  return (
    <div className="App font-roboto">
      <p className="font-extralight text-2xl p-5">Vehicle Metrics:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 ">
        {vehicleData.content.map((data) => {
          return (
            <div className="col-span-1 rounded-md mx-3 my-2 p-5 bg-custom-green text-center gap-2 flex sm:flex-col lg:flex-row justify-between items-center">
              <div className="w-36 flex justify-center lg:justify-start">
                <p className="font-bold ">{data._badge.name}</p>
              </div>
              <div className="flex justify-between gap-1 items-center">
                <p className="font-bold ">{data._badge.value}</p>
                <p className="font-extralight">{data._badge.unit}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
