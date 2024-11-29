import { useRef } from "react";

const RangeSlider = ({setStartValue, startValue, endValue, setEndValue}) => {
  const minValue = 18;
  const maxValue = 65;

  // const [startValue, setStartValue] = useState(18);
  // const [endValue, setEndValue] = useState(65);

  const rangeRef = useRef(null);

  const handleThumbMove = (clientX, isStart) => {
    const rect = rangeRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1);
    const value = Math.round(percent * (maxValue - minValue) + minValue);

    if (isStart) {
      setStartValue(Math.min(value, endValue - 1));
    } else {
      setEndValue(Math.max(value, startValue + 1));
    }
  };

  const handleMouseDown = (isStart) => {
    const onMouseMove = (e) => handleThumbMove(e.clientX, isStart);
    const onMouseUp = () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };

  const handleTouchStart = (isStart) => {
    const onTouchMove = (e) => handleThumbMove(e.touches[0].clientX, isStart);
    const onTouchEnd = () => {
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
    };

    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", onTouchEnd);
  };

  const startPercent = ((startValue - minValue) / (maxValue - minValue)) * 100;
  const endPercent = ((endValue - minValue) / (maxValue - minValue)) * 100;

  return (
    <div className="flex flex-col items-center w-full max-w-md mx-auto mt-2">
           <div className="my-1 w-full flex flex-row justify-between items-center font-mulish text-[#5E5E5E] font-medium">
           <span className="text-sm">Возраст</span>
           <span className="text-xs">{startValue}-{endValue}</span>
      </div>
      <div className="relative w-full h-12">
    
        <div
          ref={rangeRef}
          className="absolute top-1/2 -translate-y-1/2 w-full h-1 bg-gray-300 rounded"
        ></div>

        <div
          className="absolute top-1/2 -translate-y-1/2 h-1 bg-[#634F9E] rounded"
          style={{ left: `${startPercent}%`, width: `${endPercent - startPercent}%` }}
        ></div>

        
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#634F9E] border-2 border-white rounded-full cursor-pointer"
          style={{ left: `${startPercent}%` }}
          onMouseDown={() => handleMouseDown(true)}
          onTouchStart={() => handleTouchStart(true)}
        ></div>

        
        <div
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#634F9E] border-2 border-white rounded-full cursor-pointer"
          style={{ left: `${endPercent}%` }}
          onMouseDown={() => handleMouseDown(false)}
          onTouchStart={() => handleTouchStart(false)}
        ></div>
      </div>

   
    </div>
  );
};

export default RangeSlider;
