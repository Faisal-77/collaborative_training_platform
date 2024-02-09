"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/page.module.css";
import AdminHeader from "@/app/components/adminComponents/adminHeader";
import Link from "next/link";
import SelectForm from "@/app/components/selectForm";
import { useState } from "react";
import DeptAdmin from "@/app/components/adminComponents/deptAdmin";
import AdminSidebar from "@/app/components/adminComponents/adminSidebar";
import { useCombinedSort } from "@/lib/filter";

export default function page({ initialItems }) {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [isAdded, setAdded] = useState(false);
  const toggleAdd = () => {
    setAdded(!isAdded);
  };
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  initialItems = [
    {
      id: 1,
      name: "قسم الحاسب وتقنية المعلومات",
      deptHead: {
        email: "malharby@tvtc.gov.sa",
      },
      majors: ["دعم فني", "برمجيات", "شبكات"],
      deptID: "IT",
    },
    {
      id: 2,
      name: "قسم التقنية الإدارية",
      deptHead: {
        email: "saalda@tvtc.gov.sa",
        name: "أ. مشعل بن عبدالمحسن الحربي",
      },
      majors: ["إدارة أعمال", "محاسبية", "التسويق والابتكار"],
    },
    {
      id: 3,
      name: "قسم التقنية الكهربائية",
      deptHead: {
        email: "faljeraifani@tvtc.gov.sa",
        name: "أ. فهد بن علي الجريفاني",
      },
      majors: ["قوى كهربائية"],
    },
    {
      id: 4,
      name: "قسم التقنية الخاصة",
      deptHead: {
        email: "aalfawzan1@tvtc.gov.sa",
        name: "أ. أديب بن محمد الفوزان",
      },
      majors: ["تطبيقات مكتبية"],
    },
    {
      id: 5,
      name: "قسم التقنية السيارات",
      deptHead: {
        email: "kalbakri@tvtc.gov.sa",
        name: "م. خالد بن علي البكري",
      },
      majors: ["محركات ومركبات"],
    },
    {
      id: 6,
      name: "قسم التقنية الميكانيكية",
      deptHead: {
        email: "falrobaish@tvtc.gov.sa",
        name: "م. فهد بن محمد الربيش",
      },
      majors: ["التصنيع", "التبريد وتكييف الهواء"],
    },
    {
      id: 7,
      name: "قسم التقنية الإلكترونية",
      deptHead: {
        email: "Aaalnajran@tvtc.gov.sa",
        name: "م. عبدالكريم بن عبدالله النجران",
      },
      majors: ["إلكترونيات صناعية وتحكم", "أجهزة طبية"],
    },
  ];
  const { items, handleSortChangeAZ } = useCombinedSort(initialItems);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <AdminHeader />
          </div>
          <section
            className={`col-12 align-items-center h-100  ${styles.filterSection}`}
          >
            <div className="row h-100 align-items-center ">
              <div className={`col-3 ${styles.menuBtn}`}>
                <Link
                  href={"#"}
                  onClick={toggleSidebar}
                  style={{ fill: "white" }}
                  className={styles.sidebarAdminBtn}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="28"
                    viewBox="0 -960 960 960"
                    width="28"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
                </Link>
              </div>
              <div
                className={`col-2 h-100 text-center p-0 m-0 ${styles.colsOftools} ${styles.hideOnSmall}`}
              >
                <Link href={"/admin/"} style={{ color: "white" }}>
                  <i className={`bi bi-house`}></i>
                </Link>
                <i className={`bi bi-arrow-clockwise me-4`}></i>
              </div>
              <div className="form-group col-4">
                <input
                  type="search"
                  className={`${styles.formInput} ${styles.searchInput} m-0`}
                  id="search"
                  placeholder="البحث"
                />
              </div>
              <div className="form-group col-1">
                <SelectForm
                  selectedOption={"الترتيب"}
                  options={["أ - ي", "ي - أ", "الأحدث", "الأقدم"]}
                  onChange={handleSortChangeAZ}
                  defaultSelected={"الترتيب"}
                />
              </div>
              <div className="form-group col-1 pe-5">
                <button className={styles.submitBtn} onClick={toggleAdd}>
                  إضافة منسق جديد
                </button>
              </div>
            </div>
          </section>
          <AdminSidebar
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
          />
          <section
            className={`col-lg-10 col-md-12 p-0 m-0 ${styles.mainAdmin}`}
          >
            <main className="container-fluid mt-5">
              <section className={`row align-items-stretch pe-5 ps-5`}>
                {items.map((data, index) => (
                  <DeptAdmin
                    deprtmentName={data.name}
                    nameHead={data.deptHead.name}
                    deptID={data.deptID}
                    noOfStud={data.noOfStud}
                    key={index}
                    isAddOpen={isAdded}
                    add={toggleAdd}
                  />
                ))}
              </section>
            </main>
          </section>
        </div>
      </div>
    </>
  );
}
