import Navbar from "@/demoComponents/Navbar";
import Search from "@/demoComponents/Search";
import AvailabilitySearch from "@/demoComponents/AvailabilitySearch";
import Cards from "@/demoComponents/Cards";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Search />
      <Cards />
      <AvailabilitySearch />
      <br />
      <br />
    </div>
  );
}
