import ExploreBtn from "@/components/ExploreBtn";

function page() {
  return (
    <section>
      <h1 className="text-center">
        The Hub For Every Dev <br /> Event You Can&apos;t Miss
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups and Conferences all in one place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7 px-4">
        <h3>Featured Events</h3>
        <ul className="events">
          {[1, 2, 3, 4, 5].map((event) => (
            <li key={event}>Event {event}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default page;
