import { auth } from "@/auth";
import StartupForm from "@/components/StartupForm";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      <section className="block_container !min-h-[230px]">
        <h1 className="heading">List Your Item</h1>
      </section>

      <StartupForm />
    </>
  );
};

export default Page;
