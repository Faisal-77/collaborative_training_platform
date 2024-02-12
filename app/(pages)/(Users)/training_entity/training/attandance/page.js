import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/app/components/training_entity/header";
import Nav from "@/app/components/training_entity/nav";
import Fillter from "@/app/components/training_entity/training/fillter";
import Attendance from "@/app/components/training_entity/training/attandance/content";
export default function page() {
  return (
    <div className="container-fluid">
        <Header />
        <Nav />
        <Fillter />
        <Attendance />
    </div>
  )
}
