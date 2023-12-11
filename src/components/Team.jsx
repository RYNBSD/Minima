const teams = [
  {
    img: "/asset/team1.png",
    name: "Thar Mien",
    department: "Senior UX Designer",
  },
  {
    img: "/asset/team2.png",
    name: "Prat Mhan",
    department: "Senior IxD",
  },
  {
    img: "/asset/team3.png",
    name: "Yhan Tho",
    department: "Creative Director",
  },
  {
    img: "/asset/team4.png",
    name: "Bro Tho",
    department: "Motion Designer",
  },
  {
    img: "/asset/team5.png",
    name: "Mhar No",
    department: "Illustrator",
  },
  {
    img: "/asset/team6.png",
    name: "Mhan Tho",
    department: "Senior UX Researcher",
  },
];

export default function Team() {
  return (
    <section className="bg-white section center" id="our-team">
      <div className="container flex flex-col gap-20 items-center justify-center">
        <h1 className="font-bold text-5xl">Our Awesome Team</h1>
        <div className="grid grid-cols-3 place-items-center gap-x-10 gap-y-10">
          {teams.map((team) => (
            <div
              className="flex flex-col items-center justify-center gap-2"
              key={team.name}
            >
              <img
                className="w-full h-full object-cover"
                src={team.img}
                alt="team"
              />
              <small className="font-normal text-base text-[#333]">Hi! My Name</small>
              <h2 className="font-bold text-2xl text-[#333]">Shoo {team.name}</h2>
              <small className="font-normal text-xs text-[#333]">{team.department}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
