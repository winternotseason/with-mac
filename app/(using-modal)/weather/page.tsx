import MacHeader from "@/app/_component/mac-header";
import WeatherBar from "@/app/_component/weather/weatherBar";
import WeatherContent from "@/app/_component/weather/weatherContent";

const Modal = () => {
  return (
    <div className="flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[40rem] bg-stone-700/90 rounded-2xl shadow-3xl overflow-hidden">
      <MacHeader />
      <div className="flex h-full  bg-rose-300 ">
        <WeatherBar />
      </div>
    </div>
  );
};

export default Modal;
