// TwoStepForm component
"use client";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectForm from "./selectForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faPhone,
  faUser,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
// TwoStepForm component
const TwoStepForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    entityName: "",
    feieldOfCompany: "",
    email: "",
    phone: "",
    username: "",
    password: "",
    password2: "",
  });
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          error={error}
          setError={setError}
        />
      )}
      {step === 2 && (
        <StepTwo
          setFormData={setFormData}
          formData={formData}
          prevStep={prevStep}
          error={error}
          setError={setError}
        />
      )}
    </div>
  );
};

// StepOne component
function StepOne({ formData, setFormData, nextStep, error, setError }) {

  return (
    <>
      <h1>تسجيل جهة تدريب جديدة</h1>
      <div className="container text-center">
        <div className="row justify-content-evenly">
          <div
            className={`d-flex align-items-center justify-content-center ${styles.stepForm} `}
          >
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className={`col-8 p-0  ${styles.timeLine}`}>
            <div className={`${styles.timeLineReg}`}></div>
          </div>

          <div
            className={`d-flex align-items-center justify-content-center ${styles.stepForm}`}
          >
            2
          </div>
        </div>
      </div>
      <form>
        
        <div className={`row justify-content-center`}>
        {/* اسم المؤسسة / جهة التدريب */}
          <div className={`col-md-10 `}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faUser} className={styles.formIcons} />
            </div>
            <label htmlFor="entityName" className={` ${styles.formLabel}`}>
              اسم المؤسسة / جهة التدريب
            </label>

            <div className="form-group">
              <input
                type="text"
                placeholder="أدخل اسم المؤسسة / جهة التدريب"
                id="entityName"
                name="entityName"
                value={formData.entityName}
                required
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, entityName: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>
          {/* مجال المؤسسة / جهة التدريب */}
          <div className={`col-md-10 `}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faUser} className={styles.formIcons} />
            </div>
            <label htmlFor="feieldOfCompany" className={` ${styles.formLabel}`}>
              مجال المؤسسة / جهة التدريب
            </label>

            <div className="form-group">
              <input
                type="text"
                placeholder="مجال المؤسسة / جهة التدريب"
                id="feieldOfCompany"
                name="feieldOfCompany"
                value={formData.feieldOfCompany}
                required
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, feieldOfCompany: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>
          {/* Email */}
          <div className={`col-md-10 `}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.formIcons} />
            </div>
            <label htmlFor="email" className={` ${styles.formLabel}`}>
              البريد الإلكتروني
            </label>
            <div className="form-group">
              <input
                type="email"
                placeholder="أدخل البريد الإلكتروني"
                id="email"
                name="email"
                required
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>
          {/* Phone Number */}
          <div className={`col-md-10 `}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faPhone} className={styles.formIcons} />
            </div>
            <label htmlFor="phone" className={` ${styles.formLabel}`}>
              رقم الجوال
            </label>
            <div className="form-group">
              <input
                type="text"
                placeholder="أدخل رقم الجوال"
                id="phone"
                name="phone"
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, phone: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>

          

          {/* Error Message */}

          {/* Submit Button */}

          <div className="container text-center mt-5">
            <div className="row justify-content-evenly">
              <div className="col p-0 ">
                <Link href="/login">
                  <button className={styles.submitBtn}>الخطوة السابقة</button>
                </Link>
              </div>
              <div className="col p-0 ">
                <button className={styles.submitBtn} onClick={nextStep}>
                  التالي
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

// StepTwo component
function StepTwo({ setFormData, formData, prevStep, error, setError }) {
  return (
    <>
      <h1>تسجيل جهة تدريب جديدة</h1>
      <div className="container text-center">
        <div className="row justify-content-evenly">
          <div
            className={`d-flex align-items-center justify-content-center ${styles.stepForm} `}
          >
            <FontAwesomeIcon icon={faCheck} />
          </div>
          <div className={`col-8 p-0  ${styles.timeLine}`}>
            <div className={`${styles.timeLineReg}`}></div>
          </div>

          <div
            className={`d-flex align-items-center justify-content-center ${styles.stepForm}`}
          >
            2
          </div>
        </div>
      </div>
      <form>
        <div className={`row justify-content-center`}>
          {/* USERNAME */}
          <div className={`col-md-10`}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faUser} className={styles.formIcons} />
            </div>
            <label htmlFor="username" className={` ${styles.formLabel}`}>
              اسم المستخدم
            </label>
            <div className="form-group">
              <input
                type="text"
                placeholder="أدخل اسم المستخدم"
                id="username"
                name="username"
                className={`${styles.formInput} `}
                onChange={(e) => {
                  setFormData({ ...formData, username: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>
          {/* Password */}
          <div className={`col-md-10`}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faLock} className={styles.formIcons} />
            </div>
            <label htmlFor="password" className={` ${styles.formLabel}`}>
              كلمة المرور
            </label>
            <div className="form-group">
              <input
                type="password"
                placeholder="أدخل كلمة المرور"
                id="password"
                name="password"
                className={`${styles.formInput} `}
                onChange={(e) => {
                  setFormData({ ...formData, password: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>
          {/* Confirm Password */}
          <div className={`col-md-10 `}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faLock} className={styles.formIcons} />
            </div>
            <label htmlFor="password2" className={` ${styles.formLabel}`}>
              أعد كلمة المرور
            </label>
            <div className="form-group">
              <input
                type="password"
                placeholder="أعد كلمة المرور"
                id="password2"
                name="password2"
                className={`${styles.formInput} `}
                onChange={(e) => {
                  setFormData({ ...formData, password2: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>
          <div className="container text-center mt-5">
            <div className="row justify-content-evenly">
              <div className="col p-0 ">
                <button className={styles.submitBtn} onClick={prevStep}>
                  الخطوة السابقة
                </button>
              </div>
              <div className="col p-0 ">
                <input
                  type="submit"
                  value="تسجيل الدخول"
                  className={`${styles.submitBtn} align-self-center`}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default TwoStepForm;
