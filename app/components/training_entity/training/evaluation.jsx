"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/components/training_entity/page.module.css";
import React, { useEffect, useState } from "react";

export default function Evaluation({setDisplay}) {
  const [graed, setGread] = useState(["", "", "", "", "", "", "", ""]);
  const qusion = [
    "إتقانه للمهارات وقدرته على التطبيق",
    "اهتمامه بمظهره الشخصي وتعامله مع الآخرين",
    "رغبته في التعلم واكتساب الخبرة وتقبل توجيهات المسؤولين",
    "مراعاته لقواعد السلامة والتزامه بأنظمة المنشأة",
    "اهتمامه بمكان التدريب ومحافظته على التجهيزات",
    "تعاونه مع زملائه في المنشأة واندماجه في بيئة العمل",
    "انضباطه في أوقات الدوام",
    "مستوى الإنتاجية",
  ];
  const grad_of = [8, 7, 8, 4, 5, 4, 10, 4];
  const [total, setTotal] = useState();

  return (
    
    <div className={`${styles.evaluation_container} container`}>
      <div className={`${styles.eval_title} row`}>
          <div className={`${styles.back_arrow_plan_continer} col`}>
              <i 
                  onClick={() => setDisplay(true)}
                  className={`${styles.back_arrow_plan} bi bi-caret-right-square-fill`}> 
              </i>
          </div>
      </div>
      <div className={`${styles.eval_title} row`}>
        <div className={`col-1`}></div>
        <div className={`col text-center`}>
          <span className={styles.eval_right}> م </span>
          <span> القدرات المكتسبة </span>
        </div>
        <div className={`col text-center`}> التقييم </div>
      </div>
      {graed.map((val, ind) => (
        <Row
          key={ind}
          qusion={qusion[ind]}
          gread_of={grad_of[ind]}
          m={ind}
          graed={graed}
          setGread={setGread}
          ind={ind}
        />
      ))}
      <Total setTotal={setTotal} graed={graed} total={total} />
    </div>
  );
}

export function Row({ qusion, gread_of, m, graed, setGread, ind }) {
  const [isClicked, setClicked] = useState(true);
  const copy = [...graed];

  const toggleClick = (bool) => {
    setClicked(bool);
    bool === true ? handelGreadInput(copy[ind], gread_of) : null;
  };

  function handelGreadInput(num, num2) {
    num > num2
      ? alert("يجب ان تكون الدرجة المدخلة اصغر من درجة التقييم")
      : setGread(copy);
  }

  return (
    <div className={`${styles.eval_content} row`}>
      <div className={`col-1`}></div>
      <div className={`${styles.eval_row} col text-center`}>
        <span className={styles.eval_right}> {m} </span>
        <span className={styles.gread_of}> {gread_of} </span>
        <span>{qusion}</span>
      </div>
      <div className={`col text-center`}>
        <div>
          {isClicked ? (
            <span onClick={() => toggleClick(false)} className={styles.eval_row_ev}>
              {graed[ind]}
            </span>
          ) : (
            <input
              onChange={(e) => {
                copy[ind] = e.target.value;
              }}
              className={styles.eval_row_ev_input}
              type="text"
            />
          )}
          {!isClicked && (
            <span>
              <i
                className={`${styles.icone_inter_gread} bi bi-check-circle-fill`}
                onClick={() => toggleClick(true)}
              ></i>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function Total({ total, setTotal, graed }) {
  const counter = (array) => {
    array = array.map((element) => (element ? parseInt(element) : null));
    let sum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  };

  useEffect(() => {
    setTotal(counter(graed));
  }, [graed]);

  return (
    <div className={`${styles.eval_content} row`}>
      <div className={`col-1`}></div>
      <div onClick={() => toggleClick(true)} className={`${styles.eval_row} col text-center`}>
        <span className={styles.eval_right}> 9 </span>
        <span className={styles.gread_of}>50</span>
        <span> المجمــــــــــــــــــــــــــوع</span>
      </div>
      <div className={`col text-center`}>
        <div>
          <span className={styles.eval_row_ev}> {total} </span>
        </div>
      </div>
    </div>
  );
}