// TwoStepForm component
"use client";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectForm from "./selectForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {handel_validate_input_entity} from '../../lib/handel_validate_input'
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
    name: "",
    field: "",
    email: "",
    phone_number: "",
    user_name: "",
    password: "",
    password2: "",
  });
  
  const [error, setError] = useState("");
  const [step, setStep] = useState(1);

  const nextStep = (e) => {
    e.preventDefault();
    const {name , field , email , phone_number} = formData
    if(!name || !field || !email || !phone_number){
      setError('جميع الحقول مطلوبة ');
      return
    }
    const check_input = handel_validate_input_entity(name , field , email , phone_number)
    if (check_input !== true){
      setError(check_input)
      return;
    }
    setError("")
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    const user_namePattern = /^[^\d\s]+$/u;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;

    if(!user_namePattern.test(formData.user_name)){
      setError(' اسم المستخدم يجب الا يبدأ برقم ولا يحتوي على مسافات');
      return;
    }
    if(!passwordPattern.test(formData.password) ){
      setError(`كلمة المرور خطأ 
      يجب أن تحتوي على 8 خانات على الأقل
       وحرف كبير وحرف صغير`)
       return;
    }
    if (formData.password !== formData.password2){
      setError("تأكيد كلمة المرر لا يساوي كلمة المرور")
      return;
    }
    try {
      const resExist = await fetch('api/exist_student', {
          method: "POST",
          headers: {
              "Content-type": "application/json"
          },
          body: JSON.stringify( formData.user_name ),
      });

      const { user } = await resExist.json();

      if (user) {
          setError("اسم المستخدم مسجل بالفعل");
          return;
      }

      const res = await fetch('api/register_entity', {
          method: "POST",
          body: JSON.stringify({
              formData
          }),
      });

      if (res.ok) {
        
          const form = e.target;
          form.reset();
          router.push("/login");
      } else {
          console.log("خطأ في التسجيل");
      }
    } catch (error) {
      console.log("error api :", error);
    }
  }
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
          handelSubmit = {handelSubmit}
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
                value={formData.name}
                required
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
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
                value={formData.field}
                required
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, field: e.target.value });
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
                value={formData.email}
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
                value={formData.phone_number}
                onChange={(e) => {
                  setFormData({ ...formData, phone_number: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>

          

          {/* Error Message */}
          {error && (
                    <div className='bg-red-500 text-white w-fit '>
                        {error}
                    </div>
                )}
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
function StepTwo({ setFormData, formData, prevStep, error, setError  , handelSubmit}) {
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
      <form onSubmit={handelSubmit}>
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
                value={formData.user_name}
                className={`${styles.formInput} `}
                onChange={(e) => {
                  setFormData({ ...formData, user_name: e.target.value });
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
                value={formData.password}
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
                value={formData.password2}
                className={`${styles.formInput} `}
                onChange={(e) => {
                  setFormData({ ...formData, password2: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>

          {/* Error Message */}
            {error && (
                    <div className='bg-red-500 text-white w-fit '>
                        {error}
                    </div>
                )}

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
