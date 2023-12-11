const info = [
  {
    num: 1000,
    source: "project complete",
  },
  {
    num: 235,
    source: "our team",
  },
  {
    num: 1100,
    source: "ou client",
  },
];

export default function Success() {
  return (
    <section className="bg-white section center" id="success-story">
      <div className="container grid grid-cols-2 place-items-center gap-x-5">
        <div>
          <img src="/asset/success.png" alt="success story" />
        </div>
        <div className="flex flex-col h-full items-start justify-center gap-5">
          <h1 className="font-bold text-5xl">Our success story</h1>
          <div className="w-[121px] h-[1px] bg-[#dedede]" />
          <p className="font-normal text-base">Develop a website by finding a product identity that has value and branding to become a characteristic of a company. </p>
          <div className="flex items-center w-full justify-around">
            {info.map((inf) => (
              <div key={inf.source} className="flex flex-col items-center gap-3">
                <h2 className="font-bold text-5xl">{inf.num}</h2>
                <h3 className="font-bold text-base">{inf.source}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
