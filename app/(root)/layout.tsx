<<<<<<< HEAD
import Navbar from "@/app/components/Navbar";
=======
import Navbar from "@/components/Navbar";
>>>>>>> d697ab6 (feat: header section)

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="font-work-sans">
      <Navbar />
<<<<<<< HEAD
=======

>>>>>>> d697ab6 (feat: header section)
      {children}
    </main>
  );
}
