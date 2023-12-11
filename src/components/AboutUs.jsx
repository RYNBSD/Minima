export default function AboutUs() {
  return (
    <section className="bg-white section center" id="about-us">
      <div className="container grid grid-cols-2 gap-x-5 place-items-center">
        <div>
          <img src="/asset/about-us.png" alt="about us" />
        </div>
        <div className="flex flex-col gap-16 h-screen justify-center">
          <h1 className="font-bold text-5xl">About us</h1>
          <p className="font-normal text-black text-xl">
            <span className="font-bold">Minima</span> is a Minima is a template
            social agency that offers full-service social media solutions.
          </p>
          <p className="font-normal text-black text-xl">
            With our co-founder Philip Deml we have one of the biggest German
            influencers in our team which also gives our clients a direct access
            to the influencer world.
          </p>
          <p className="font-normal text-black text-xl">
            Our target group is primarily established brands that know us as a
            modern premium agency.
          </p>
        </div>
      </div>
    </section>
  );
}
