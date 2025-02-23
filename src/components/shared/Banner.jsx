import bannerImg from "../../images/banner.jpg";

export default function Banner({ title }) {
  return (
    <div
      className="bg-cover bg-center h-45 "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="w-full h-full bg-black/60  flex items-center justify-center">
        <h1 className="text-white text-4xl font-extrabold text-nowrap">{title}</h1>
      </div>
    </div>
  );
}
