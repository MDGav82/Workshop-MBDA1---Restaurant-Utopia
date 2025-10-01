import Navbar from "../nav/nav";
function Home() {
  return (
    <>
      <main className="pt-28 bg-black">
        <section className="max-w-4xl mx-auto text-center py-40">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            Fine dining under the stars
          </h1>
          <p className="mt-6 text-white/90 max-w-2xl mx-auto">
            Seasonal tasting menu · Open Wed–Sun · Walk-ins & reservations
          </p>
        </section>
      </main>
    </>
  );
}

export default Home;
