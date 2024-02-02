import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/app/components/training_entity/header";
import Nav from "@/app/components/training_entity/nav";
import Fillter from "@/app/components/training_entity/training/fillter";
import Request_content from "@/app/components/training_entity/request_content";
import Training_content from "@/app/components/training_entity/training/training_content";
import Evaluation from "@/app/components/training_entity/training/evaluation";

export default function page() {
  return (
    <div className="container-fluid">
        <Header />
        <Nav />
        <Fillter />
        <Training_content />
        <Evaluation />
    </div>
  )
}
