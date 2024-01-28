import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import AdminHeader from "../adminHeader";
import React from 'react'

export default function Header() {
  return (
    <div className="row">
        <div className="col-12">
            <AdminHeader />
        </div>
    </div>
  )
}
