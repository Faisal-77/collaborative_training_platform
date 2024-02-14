"use client";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";
import adminStyle from "@/app/components/adminComponents/page.module.css";
import Fillter_sug from "@/app/components/training_entity/training/felter_sug";
import ViewSugg from "@/app/components/adminComponents/viewSugg";
import Header from "@/app/components/training_entity/header";
import Nav from "@/app/components/training_entity/nav";
export default function page() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);
  const [suggestions_display, setSuggestions_display] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../api/get_suggestions", {
          method: "GET",
        });
        const data = await response.json();

        setSuggestions_display(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const togglePopup = (item) => {
    setSelectedItem(item);
    setIsPopupOpen(!isPopupOpen);
  };
  //الشكاوى
  const [suggestions_training, setSuggestions_training] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../api/get_training_sug", {
          method: "GET",
        });
        const data = await response.json();

        setSuggestions_training(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
        className={`col-lg-12 col-md-12 p-2 m-0 ${styles.mainAdmin_train}`}
      >
        <main className="container-fluid mt-5">
          <div className={`row p-5`}>
            <div className="row p-5">
              <div className={`${adminStyle.table}`}>
                <div className={`${adminStyle.headerRow} `}>
                  <div className={` ${adminStyle.col}`}>المشتكي / المقترح</div>
                  <div className={` ${adminStyle.col}`}>التاريخ</div>
                  <div className={` ${adminStyle.col}`}>عرض</div>
                </div>
                {suggestions_display !== null ? (
                  suggestions_display.map((sugg, index) => {
                    const dateString = sugg.createdAt;
                    const date = new Date(dateString);
                    const options = {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    };
                    const formattedDate = date.toLocaleString("ar-SA", options);
                    return (
                      <>
                        <div className={`${adminStyle.row}`} key={index}>
                          <div
                            className={` ${adminStyle.typeOfRow} ${adminStyle.sugg}`}
                          ></div>
                          <div className={` ${adminStyle.col}`}>
                            {sugg.name}
                          </div>
                          <div className={` ${adminStyle.col}`}>
                            {formattedDate} {/* Display formatted date */}
                          </div>
                          <div
                            className={` ${adminStyle.viewBtn}`}
                            onClick={() => togglePopup(sugg)}
                          >
                            <i className="bi bi-eye-fill"></i>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <h1 className="text-center text-white mt-5">
                    نرجوا الانتظار...
                  </h1>
                )}
                {selectedItem && (
                  <ViewSugg
                    isOpen={isPopupOpen}
                    onClose={() => setIsPopupOpen(false)}
                    content={selectedItem.content}
                    name={selectedItem.name}
                    date={selectedItem.createdAt}
                  />
                )}
                {suggestions_training !== null ? (
                  suggestions_training.map((sugg, index) => {
                    const dateString = sugg.createdAt;
                    const date = new Date(dateString);
                    const options = {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    };
                    const formattedDate = date.toLocaleString("ar-SA", options);
                    return (
                      <>
                        <div className={`${adminStyle.row}`} key={index}>
                          <div
                            className={` ${adminStyle.typeOfRow} ${adminStyle.complaint}`}
                          ></div>
                          <div className={` ${adminStyle.col}`}>
                            {sugg.name}
                          </div>
                          <div className={` ${adminStyle.col}`}>
                            {formattedDate} {/* Display formatted date */}
                          </div>
                          <div
                            className={` ${adminStyle.viewBtn}`}
                            onClick={() => togglePopup(sugg)}
                          >
                            <i className="bi bi-eye-fill"></i>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <h1 className="text-center text-white mt-5">
                    نرجوا الانتظار...
                  </h1>
                )}
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}
