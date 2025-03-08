import SerchForm from "@/components/SerchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Chayoot Kositwanich",
      },
      _id: 1,
      description: "This is a discription.",
      image:
        "https://economictimes.indiatimes.com/thumb/msid-117612520,width-1200,height-900,resizemode-4,imgsize-52680/after-deepseeks-success-in-ai-now-ubtech-chinese-robot-maker-plans-to-mass-produce-industrial-humanoid-robots-by-year-end.jpg",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="block_container">
        <h1 className="heading">
          Pitch Your Startup, <br /> Connect With Entrepreeneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SerchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
