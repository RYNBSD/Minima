import { FaInstagram } from "react-icons/fa";
import { FiTwitter, FiFacebook, FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

const touch = [
  {
    icon: <MdOutlineEmail color="#fff" size="24" />,
    info: "yourmail@hello.com",
  },
  {
    icon: <FiPhone color="#fff" size="24" />,
    info: "+1 386-688-3295",
  },
];

export default function Footer() {
  return (
    <footer className="w-full pt-7 pb-10 grid place-items-center bg-black">
      <div className="container min-h-auto grid grid-cols-4 gap-x-10">
        <div className="flex flex-col items-start justify-center gap-3 p-10">
          <img src="/asset/logo-white.png" />
          <p className="text-white text-base font-normal">
            Minima is a boutique social media agency that offers full-service
            social media solutions.
          </p>
        </div>
        <div className="p-10">
          <h2 className="font-bold text-base text-white pb-5">Get in Touch</h2>
          <ul className="flex flex-col gap-5">
            {touch.map((touch) => (
              <li className="flex gap-2" key={touch.info}>
                {touch.icon}
                <a className="font-normal text-base text-[#828282]" href="">
                  {touch.info}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-10">
          <h2 className="font-bold text-base text-white">Social Media</h2>
          <div className="flex items-center justify-start gap-6 pt-2">
            <FaInstagram color="#fff" size="24" />
            <FiTwitter color="#fff" size="24" />
            <FiFacebook color="#fff" size="24" />
          </div>
        </div>
        <div className="p-10 flex flex-col  gap-4">
          <h2 className="font-bold text-base text-white">Join a Newsletter</h2>
          <form className="flex flex-col gap-3">
            <label htmlFor="email">
              <h3 className="text-[#CCC] font-normal text-xs pb-2">
                Your Email
              </h3>
              <input
                className="w-full rounded-lg font-normal text-sm p-3 text-[#CCC]"
                placeholder="Enter Your Email"
                type="email"
                name="email"
                required
              />
            </label>
            <button
              type="submit"
              className="bg-[#FDEC57] text-sm font-bold w-full py-3 rounded-lg"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
