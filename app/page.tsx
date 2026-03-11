import { ContactCards } from "@/components/ContactCards";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import  Landing from "@/components/Landing";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-stretch">
        <Landing />
        {/* <ContactCards /> */}
      </main>
      <Footer />
    </div>
  );
}
