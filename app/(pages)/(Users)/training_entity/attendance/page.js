import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/app/components/training_entity/header";
import Nav from "@/app/components/training_entity/nav";
import Fillter from "@/app/components/training_entity/attendance/filtter"
import Container from "@/app/components/training_entity/attendance/conainer";

export default function page() {
  return (
    <div className="container-fluid">
        <Header />
        <Nav />
        <Fillter />
        <Container />
    </div>
  )
}
