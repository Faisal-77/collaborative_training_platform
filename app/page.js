import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/home_page/header.jsx";
import Nav from "./components/home_page/nav.jsx";
import { Content, Under_content } from "./components/home_page/conent";
import { Footer, Footer_2 } from "./components/home_page/footer";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  return (
    <div className="container-fluid text-center">
      <Header />
      <Nav />
      <Content />
      <Footer />
      <Footer_2 />
    </div>
    // </div>
  );
}
