const label = "font-normal text-base text-[#4f4f4f]";
const input =
  "w-full bg-[#f7f8f9] text-base font-normal text-[#bdbdbd] py-4 pl-4 rounded-lg";

export default function Contact() {
  return (
    <section className="section center">
      <div className="container grid grid-cols-2 gap-x-10 place-items-center">
        <div className="flex flex-col items-start justify-start gap-20">
          <h1 className="font-bold text-5xl text-[#333]">Get in touch</h1>
          <form className="flex flex-col items-start justify-start gap-5">
            <div className="center gap-4">
              <div className="w-full flex flex-col gap-2 items-start justify-start">
                <label className={label} htmlFor="first name">
                  First Name
                </label>
                <input
                  className={input}
                  type="text"
                  name="first name"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-full">
                <label className={label} htmlFor="last name">
                  Last Name
                </label>
                <input
                  className={input}
                  type="text"
                  name="last name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="w-full">
              <label className={label} htmlFor="email">
                Your Email
              </label>
              <input
                className={input}
                type="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="w-full">
              <label className={label} htmlFor="message">
                Message
              </label>
              <textarea
                className={input}
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button
              className="center py-4 px-12 bg-black text-white rounded-lg font-medium text-sm"
              type="submit"
            >
              SEND
            </button>
          </form>
        </div>
        <div>
          <img src="/asset/contact.png" alt="contact" />
        </div>
      </div>
    </section>
  );
}
