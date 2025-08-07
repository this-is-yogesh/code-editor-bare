import Image from "next/image";
import "./_styles/main_page.css";
import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="containerClass">
      <div className="content-wrapper">
        <Header />
      </div>
    </div>
  );
}
