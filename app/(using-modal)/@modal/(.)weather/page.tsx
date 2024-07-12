import MacHeader from "@/app/_component/mac-header";
import WeatherBar from "@/app/_component/weather/weatherBar";

const Modal = () => {
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] rounded-2xl shadow-3xl overflow-hidden">
      <MacHeader />
      <div className="flex h-full pt-10 bg-Thunderstorm bg-cover">
        <div>
          <WeatherBar />
        </div>
        <div className=" w-full flex flex-col items-center justify-center pb-10 text-3xl text-white font-thin">
          <p className="text-4xl">Seoul</p>
          <p className="text-base mb-2">kr</p>
          <p className="text-5xl">23°</p>
          <p className="text-base">부분적으로 흐림</p>
          <div className="w-32 text-base flex justify-between">
            <p>최고:30°</p>
            <p>최저:20°</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
