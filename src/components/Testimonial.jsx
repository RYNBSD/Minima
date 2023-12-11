import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

export default function Testimonial() {
  return (
    <section className="bg-white section center">
      <div className="container flex items-center flex-col justify-around gap-20">
        <h1 className="font-bold text-5xl">What our customer says</h1>
        <div className="center gap-20">
          <div className="w-14 h-14 bg-black rounded-lg center">
            <IoIosArrowRoundBack color="#fff" height="24" width="24" />
          </div>
          <div className="h-full w-full flex flex-col justify-around items-center gap-10">
            <img
              src="/asset/testimonial.png"
              alt="Shalima Hayden - Product Designer"
            />
            <p className="text-center font-normal text-lg text-[#666] px-28">
              ReachCircle is the friendliest and most efficient company I have
              ever used. The whole thing takes time to introduce the product and
              as a result puts forward only the best opportunities that really
              suit you. they help from start to finish to create a great product
              identity for your company
            </p>
            <div className="center flex-col">
              <h5 className="font-bold text-base">Shalima Hayden</h5>
              <small className="font-normal text-sm text-[#4f4f4f]">
                Product Designer
              </small>
            </div>
          </div>
          <div className="w-14 h-14 bg-black rounded-lg center">
            <IoIosArrowRoundForward color="#fff" height="24" width="24" />
          </div>
        </div>
      </div>
    </section>
  );
}
