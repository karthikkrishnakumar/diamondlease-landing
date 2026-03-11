import { ContactCards } from "@/components/ContactCards";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-stretch">
        <Hero />
        <ContactCards />
      </main>
      <Footer />
    </div>
  );
}
