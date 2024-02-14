"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../training_entity/page.module.css";
import SelectForm from "@/app/components/selectForm";
import { useState } from "react";
export default function Fillter() {
  const [isChatClicked, setChatClicked] = useState(false);
  const toggleChat = () => {
    setChatClicked(!isChatClicked);
    console.log(isChatClicked);
  };

  return (
    <div className={`${styles.filtter_container} row`}>
      <div className="col">
        <div className="form-group me-5">
          <input
            type="search"
            className={`${styles.formInput} m-0`}
            id="search"
            placeholder="البحث"
          />
        </div>
      </div>

      <div className="col text-center">
        <div className="form-group me-5">
          <SelectForm
            selectedOption={"الترتيب"}
            chosenOption={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
          />
        </div>
      </div>

      <div className="col text-center">
        <div className="form-group me-5">
          <SelectForm
            selectedOption={"الترتيب"}
            chosenOption={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
          />
        </div>
      </div>
      <Request_form toggleChat={toggleChat} isChatClicked={isChatClicked} />
      <div className="col-6 text-center">
        <span className={styles.text}>إنشاء اعلان فرص تدريبه جديده</span>
        <button onClick={toggleChat} className={styles.create_button}>
          انشاء طلب
        </button>
      </div>
    </div>
  );
}

function Request_form({ toggleChat, isChatClicked }) {
  const [name, setName] = useState("");
  const [field, setFild] = useState("");
  const [number_of_student, setNumber] = useState("");
  const [time, setTime] = useState("");
  const [hour, setHour] = useState("");
  const [department, setDepartment] = useState("");
  const [major, setMajor] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("../api/training_request", {
        method: "POST",
        body: JSON.stringify({
          name,
          field,
          number_of_student,
          time,
          hour,
          department,
          major,
        }),
      });

      if (res.ok) {
        const form_seq = e.target;
        form_seq.reset();
        toggleChat();
      } else {
        console.log("خطأ في التسجيل");
      }
    } catch (error) {
      console.log("error api :", error);
    }
  };
  return (
    <div
      className={`${styles.popupContainer}`}
      style={{ display: isChatClicked ? "flex" : "none" }}
    >
      <div className={`${styles.form_request} container`}>
        <div className={`row`}>
          <div className={`col`}>
            <i
              onClick={toggleChat}
              className={`${styles.cancel} bi bi-x-circle`}
            ></i>
            <h2 className={`${styles.form_title} text-center`}>
              انشاء طلب جديده
            </h2>
          </div>

          <form onSubmit={handelSubmit}>
            <div className={`${styles.row_content} row`}>
              <div className={`${styles.col_content} col`}>
                <label htmlFor="major"> اسم المنشئة </label>
                <br />
                <input
                  className={styles.text_form_input}
                  type="text"
                  placeholder="ادخل المنشئة"
                  name="major"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className={`${styles.col_content} col`}>
                <label htmlFor="number"> المجال </label>
                <br />
                <input
                  className={styles.text_form_input}
                  type="text"
                  placeholder="المجال"
                  name="number"
                  onChange={(e) => setFild(e.target.value)}
                />
              </div>
            </div>
            <div className={`${styles.row_content} row`}>
              <div className={`${styles.col_content} col`}>
                <label htmlFor="major"> الفترة </label>
                <br />
                <input
                  className={styles.text_form_input}
                  type="text"
                  placeholder="ادخل الفترة"
                  name="major"
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div className={`${styles.col_content} col`}>
                <label htmlFor="number"> ساعات العمل </label>
                <br />
                <input
                  className={styles.text_form_input}
                  type="text"
                  placeholder="ادخل ساعات العمل"
                  name="number"
                  onChange={(e) => setHour(e.target.value)}
                />
              </div>
            </div>

            <div className={`${styles.row_content} row`}>
              <div className={`${styles.col_content} col`}>
                <label htmlFor="major"> القسم </label>
                <br />
                <input
                  className={styles.text_form_input}
                  type="text"
                  placeholder="ادخل القسم"
                  name="major"
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </div>

              <div className={`${styles.col_content} col`}>
                <label htmlFor="major"> التخصص </label>
                <br />
                <input
                  className={styles.text_form_input}
                  type="text"
                  placeholder="ادخل التخصص"
                  name="major"
                  onChange={(e) => setMajor(e.target.value)}
                />
              </div>
            </div>
            <div className={`${styles.row_content} row`}>
              <div className={`${styles.col_content} col`}>
                <label htmlFor="major"> عدد المتدربين </label>
                <br />
                <input
                  className={styles.text_form_input}
                  type="text"
                  placeholder="ادخل التخصص"
                  name="major"
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
              <div className={`${styles.col_content} col`}>
                <br />
                <input
                  className={`${styles.btn_create} text-center`}
                  type="submit"
                  value="انشاء الطلب"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
