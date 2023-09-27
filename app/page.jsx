import { ModeToggle } from "@/components/mode-toggle";
import Hero from "@/components/hero";
import AboutMe from "@/components/aboutme-section";
import NavigationBar from "@/components/navigation-bar";

export default function Home() {
  return (
    <main className="hero flex-1">
      <div className="grid items-center">
        <Hero className={`text-center py-40`} />
      </div>
    </main>
  );
}
