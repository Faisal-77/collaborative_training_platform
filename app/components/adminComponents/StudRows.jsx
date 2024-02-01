"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "@/app/page.module.css";
import adminStyle from "./page.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";
import Link from "next/link";
export default function StudRows({ no, name, trainigNumber, major }) {
  return (
    <>
      <div className={`${adminStyle.row}`}>
        <div className={` ${adminStyle.col}`}>{no}</div>
        <div className={` ${adminStyle.col}`}>{name}</div>
        <div className={` ${adminStyle.col}`}>{trainigNumber}</div>
        <div className={` ${adminStyle.col}`}>{major}</div>
      </div>
    </>
  );
}
