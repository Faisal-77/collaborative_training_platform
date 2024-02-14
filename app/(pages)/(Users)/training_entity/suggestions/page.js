"use client";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminSidebar from "@/app/components/adminComponents/adminSidebar";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import SelectForm from "@/app/components/selectForm";
import Link from "next/link";
import styles from "@/app/page.module.css";
import adminStyle from "@/app/components/adminComponents/page.module.css";
import Fillter_sug from "@/app/components/training_entity/training/felter_sug"
import ViewSugg from "@/app/components/adminComponents/viewSugg";
import Header from "@/app/components/training_entity/header";
import Nav from "@/app/components/training_entity/nav";
export default function page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  ///   جلب الأقتراحات من قواعد البيانات
  const suggestions_display = async ()=>{
    try{
      const suggestions = await fetch("../api/get_suggestions", {
        method: "GET",
      });
      const res =  suggestions.json()
      
      return res 
    }catch(err){
      console.log(err)
    }
  }
  
  const fakeData = [
    {
      id: 1,
      name: "Faisa",
      history: "12/12/2022",
      suggestion:
        "disease green kitchen band alive means taught differ next change trade organized slipped complex bark prevent pictured daughter planet enough pick pig feet division",
      compl: true,
    },
    {
      id: 2,
      name: "Maud Joseph",
      history: "6/5/2062",
      suggestion:
        "driving newspaper mainly find change outside discussion needed cross bee order build soap leg slave spring bit herd cage also best won music cat",
      compl: false,
    },
    {
      id: 3,
      name: "Fanny Higgins",
      history: "6/1/2085",
      suggestion:
        "value crew point battle keep power aboard anybody rear your building crowd ten actual smile draw active meat say are fought corn be took",
      compl: false,
    },  
  ];
  const togglePopup = () => {
    setIsPopupOpen((prevState) => {
      return !prevState; // Returning the new state value
    });
  };
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="container-fluid">
        <Header />
        <Nav />
        <Fillter_sug />
          <section
            className={`col-lg-10 col-md-12 p-2 m-0 ${styles.mainAdmin_train}`}
          >
            <main className="container-fluid mt-5">
              <div className={`row p-5`}>
                <div className="row p-5">
                  <div className={`${adminStyle.table}`}>
                    <div className={`${adminStyle.headerRow} `}>
                      <div className={` ${adminStyle.col}`}>
                        المشتكي / المقترح
                      </div>
                      <div className={` ${adminStyle.col}`}>التاريخ</div>
                      <div className={` ${adminStyle.col}`}>عرض</div>
                    </div>
                    {fakeData.map((sugg, index) => (
                      <div className={`${adminStyle.row}`} key={index}>
                        <div
                          className={` ${adminStyle.typeOfRow} ${
                            sugg.compl ? adminStyle.complaint : adminStyle.sugg
                          }`}
                        ></div>
                        <div className={` ${adminStyle.col}`}>{sugg.name}</div>
                        <div className={` ${adminStyle.col}`}>
                          {sugg.history}
                        </div>
                        <div
                          className={` ${adminStyle.viewBtn}`}
                          onClick={togglePopup}
                        >
                          <i className="bi bi-eye-fill"></i>
                        </div>
                        <ViewSugg 
                            isOpen={isPopupOpen}
                            onClose={togglePopup}
                            name={sugg.name}
                            date={sugg.history}
                            content={sugg.suggestion}
                            index={index}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </main>
          </section>
    </div>
  );
}
