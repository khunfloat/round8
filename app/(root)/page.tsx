<<<<<<< HEAD
export default function Home() {
  return (
    <>
      <h1 className="text-2xl">Home</h1>
=======
import SerchForm from "@/components/SerchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

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
>>>>>>> d697ab6 (feat: header section)
    </>
  );
}
