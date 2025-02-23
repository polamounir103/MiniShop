import { serviceData } from "../../../utils/products";

export default function Wrapper() {
  return (
    <section className="py-16 px-10 bg-slate-50">
      <div className="w-[100%] md:w-[85%] lg:w-[80%] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 ">
          {serviceData.map((item, index) => (
            <div
              key={index}
              style={{ backgroundColor: item.bg }}
              className="lg:px-10 xl:px-20 py-12 rounded text-center col-span-1 flex flex-col gap-2"
            >
              <div className="flex justify-center items-center">
                <div className="flex justify-center items-center text-3xl bg-white rounded-full h-10 w-10">
                  {item.icon}
                </div>
              </div>
              <h2 className="text-lg font-bold">{item.title}</h2>
              <p className="text-sm">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
