import hero from "../../../images/hero.png";
const Home = () => {
  return (
    <section className="bg-[#211C24] w-full h-full flex justify-center pt-10">
      <div className="container">
        <div className="flex justify-center items-center gap-10">
          <div>
            <p className="text-3xl font-bold text-[#fbfbfb]">
              Best E-Commerce Platform on the Earth!
            </p>
            <p className="text-xl font-semibold text-white">
              14 Feburary sales!
            </p>
          </div>
          <div>
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
