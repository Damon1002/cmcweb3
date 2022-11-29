import type { NextPage } from "next";
import Header from "../components/Header";
const Home: NextPage = () => {
  return (
    <div className="min-h-screen">
      {/* Heading */}
      <Header />
      <div className="mt-10"></div>
      {/* Treading */}
      <div className="mt-20"></div>
      {/* CMCTable */}
    </div>
  );
};

export default Home;
