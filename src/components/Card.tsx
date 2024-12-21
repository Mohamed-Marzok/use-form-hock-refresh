interface IProps {
  title: string;
  imgUrl: string;
}
export default function Card({ title, imgUrl }: IProps) {
  return (
    <div className="shadow-md flex flex-col gap-2 items-center py-2">
      <img className="w-full h-32" src={imgUrl} />
      <p className="font-bold text-slate-500 ">{title}</p>
    </div>
  );
}
