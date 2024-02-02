import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "@/app/components/training_entity/header";
import Nav from "@/app/components/training_entity/nav";
import Fillter from "@/app/components/training_entity/fillter";
import Request_content from "@/app/components/training_entity/request_content";

export default function page() {
  return (
    <div className="container-fluid">
        <Header />
        <Nav />
        <Fillter />
        <Request_content />
        
    </div>
  )
}
