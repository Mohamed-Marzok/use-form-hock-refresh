interface IProps {
  active: number;
  setActive: (active: number) => void;
  length: number;
}
export default function SliderBtn({ active, setActive, length }: IProps) {
  const btns = Array.from({ length: length });
  return (
    <div className="flex gap-3 items-center justify-center w-full  ">
      {btns.map((_, i) => (
        <p
          className={`w-8 h-8  text-white flex items-center justify-center cursor-pointer ${
            active === i ? "bg-blue-800" : "bg-gray-500"
          }`}
          onClick={() => setActive(i)}
        >
          {i + 1}
        </p>
      ))}
    </div>
  );
}
