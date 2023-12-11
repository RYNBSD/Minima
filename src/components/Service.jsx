import { FaArrowTrendUp } from "react-icons/fa6";
import { FaClipboardList } from "react-icons/fa";
import { HiCash, HiOutlineSpeakerphone } from "react-icons/hi";

const services = [
  {
    icon: <FaArrowTrendUp width="32" height="32" />,
    title: "Performance Marketing",
    description:
      "Help create a website and redesign it so that it becomes a website that is more trendy and looks fresh.",
  },
  {
    icon: <FaClipboardList width="32" height="32" />,
    title: "Feed Management E-Commerce",
    description:
      "Create customizable illustrations with attractive designs that are made visually through high creativity",
  },
  {
    icon: <HiCash width="32" height="32" />,
    title: "Content Production",
    description:
      "Make the appearance of a mobile application that has quality and increases user convenience",
  },
  {
    icon: <HiOutlineSpeakerphone width="32" height="32" />,
    title: "Influencer Marketing",
    description:
      "Create customizable illustrations with attractive designs that are made visually through high creativity",
  },
];

export default function Service() {
  return (
    <section className="bg-white section center" id="services">
      <div className="container grid grid-cols-2 place-items-center">
        <div className="flex flex-col items-start justify-center gap-5">
          <h1 className="font-bold text-5xl">Service we provide</h1>
          <div className="flex flex-col gap-10 items-start justify-start h-full">
            <p className="font-normal text-lg">
              We will help a client&apos;s problems to provide their social
              media performance
            </p>
            <div className=" flex flex-col gap-7">
              {services.map((service) => (
                <div key={service.title} className="flex items-start justify-start gap-3">
                  <div className="bg-[#f0f0f0] w-[52px] h-[52px] rounded-lg grid place-items-center">{service.icon}</div>
                  <div>
                    <h2 className="font-bold text-2xl">{service.title}</h2>
                    <p className="font-normal text-base">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img src="/asset/service.png" alt="service" />
        </div>
      </div>
    </section>
  );
}
