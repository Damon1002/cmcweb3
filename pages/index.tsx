import type { NextPage } from "next";
import Header from "../components/Header";
import Trending from "../components/Trending";
const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      {/* Heading */}
      <Header />
      {/* Treading */}
      <div className="mt-10">
        <Trending />
      </div>

      <div className="mt-20"></div>
      {/* CMCTable */}
    </div>
  );
};

export default Home;
