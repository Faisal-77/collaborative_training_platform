// TwoStepForm component
"use client";
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faPhone,
  faUser,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { set } from "mongoose";
import { handel_validate_input_student } from "@/lib/handel_validate_input";

// TwoStepForm component
const TwoStepForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    user_name: "",
    email: "",
    phoneNumber: "",
    full_name: "",
    password: "",
    password2: "",
    department: "القسم",
    major: "التخصص",
  });

  const [error, setError] = useState("");
  const [step, setStep] = useState(1);
  
  
  const nextStep = (e) => {
    e.preventDefault();
    
    const {full_name ,user_name , email , phoneNumber } = formData;
    if (!full_name || !user_name || !email || !phoneNumber){
      setError("جميع الحقول مطلوبة");
      return
    }
    const check_input = handel_validate_input_student(full_name ,user_name , email , phoneNumber )
    if (check_input !== true){
      setError(check_input)
      return
    }else{
    setError("")
    setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };
  
  const handelSubmit = async (e) => {
    e.preventDefault();

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,}$/;
    if(!passwordPattern.test(formData.password) ){
      setError(`كلمة المرور خطأ 
      يجب أن تحتوي على 8 خانات على الأقل
       وحرف كبير وحرف صغير`)
       return;
    }
    if (formData.password !== formData.password2){
      setError("تأكيد كلمة المرر لا يساوي كلمة المرور")
      return;
    }if(formData.department == 'القسم'){
      setError('الرجاء تحديد القسم')
      return;
    }if(formData.major == 'التخصص'){
      setError("الرجاء تحديد التخصص")
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

        const res = await fetch('api/register', {
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
      <h1>تسجيل متدرب جديد</h1>
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
        {/* Full Name */}
          <div className={`col-md-10 `}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faUser} className={styles.formIcons} />
            </div>
            <label htmlFor="fullname" className={` ${styles.formLabel}`}>
              الاسم كامل
            </label>

            <div className="form-group">
              <input
                type="text"
                placeholder="أدخل الاسم كامل"
                id="fullname"
                name="fullname"
                value={formData.full_name}
                required
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, full_name: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>
          {/* Training Number */}
          <div className={`col-md-10 `}>
            <div className={styles.iconsAuth}>
              <FontAwesomeIcon icon={faUser} className={styles.formIcons} />
            </div>
            <label htmlFor="trainingNumber" className={` ${styles.formLabel}`}>
              رقم التدريبي
            </label>

            <div className="form-group">
              <input
                type="text"
                placeholder="رقم التدريبي"
                id="trainingNumber"
                name="trainingNumber"
                value={formData.user_name}
                required
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, user_name: e.target.value });
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
                value={formData.phoneNumber}
                className={`${styles.formInput}`}
                onChange={(e) => {
                  setFormData({ ...formData, phoneNumber: e.target.value });
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
function StepTwo({ setFormData, formData, prevStep, error, setError , handelSubmit}) {
  return (
    <>
      <h1>تسجيل متدرب جديد</h1>
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
          <div className={`col-md-10`}>
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
                className={`${styles.formInput} ${styles.password}`}
                value={formData.password2}
                onChange={(e) => {
                  setFormData({ ...formData, password2: e.target.value });
                  //   handleChange(e); // Assuming handleChange is a function you want to call
                }}
              />
            </div>
          </div>
          {/* Department */}
          <div className="container text-center mb-5">
            <div className="row">
              <div className="col p-0 ">
                <SelectForm  setFormData={setFormData} formData={formData}/>
              </div>
              <div className="col p-0 ">
                <SelectForm_mejor  setFormData={setFormData} formData={formData} />
              </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
                    <div className='bg-red-500 text-white w-fit '>
                        {error}
                    </div>
                )}
          {/* Submit Button */}

          <div className="container text-center">
            <div className="row justify-content-evenly">
              <div className="col p-0 ">
                <button className={styles.submitBtn} onClick={prevStep}>
                  الخطوة السابقة
                </button>
              </div>
              <div className="col p-0 ">
                <input
                  type="submit"
                  value="تسجيل"
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


const SelectForm = ({setFormData , formData}) => {
  const [isContentSelectVisible, setContentSelectVisible] = useState(false);
  
  const clickedSelect = () => {
    setContentSelectVisible(!isContentSelectVisible);
  };

  const chosenOption = (optionValue) => {
    setFormData({ ...formData, department: optionValue });
    clickedSelect();
  };

  return (
    <div className={`${styles.selectForm}`}>

      <span className={`${styles.selectedOption} ${styles.titleSelect} ${isContentSelectVisible ? 'show' : ''}`} onClick={clickedSelect}>
        {formData.department}
      </span>
      {isContentSelectVisible && (
        <div className={`${styles.contentSelect}`}>

          <div className={`${styles.formOption}`} onClick={() => chosenOption('تقنية الحاسب الألي')}>تقنية الحاسب الألي</div>
          <div className={`${styles.formOption}`} onClick={() => chosenOption('التقنية الألكترونية')}>التقنية الألكترونية</div>
          <div className={`${styles.formOption}`} onClick={() => chosenOption('التقنية الميكانيكية')}>التقنية الميكانيكية</div>
          <div className={`${styles.formOption}`} onClick={() => chosenOption('التقنية الأدارية')}>التقنية الأدارية</div>
          <div className={`${styles.formOption}`} onClick={() => chosenOption('التقنية الكهربائية')}>التقنية الكهربائيبة</div>
        
        </div>             
      )}
    </div>
  );
};


const SelectForm_mejor = ({setFormData , formData}) => {
  const [isContentSelectVisible, setContentSelectVisible] = useState(false);
  const [cells , setCell] = useState ([]);

  const clickedSelect = () => {
    setContentSelectVisible(!isContentSelectVisible);
  };
  const dispaly_cells = () =>{
      if(formData.department ==  'تقنية الحاسب الألي' ){
        setCell(["برمجيات" , "شبكات" , "دعم فني"])
      }else if(formData.department == 'التقنية الألكترونية'){
        setCell(['ألكترونيات صناعة وتحكم', 'الأجهزة الطبية'])
      }else if (formData.department == 'التقنية الميكانيكية'){
        setCell(['تبريد وتكييف','إنتاج','مركبات','الات ومعدات ثقيلة'])
      }else if (formData.department == 'التقنية الأدارية'){
        setCell(['تسويق','إدارة مكتبية','محاسبة'])
      }else if (formData.department == 'التقنية الكهربائية'){
        setCell(['قوى كهربائية'])
      }else{
        setCell['التخصص']
      }
  }
  useEffect(()=>{
    dispaly_cells();
    setFormData({...formData , major : 'التخصص'})
    
  },[formData.department])

  const chosenOption = (optionValue) => {  
    setFormData({ ...formData, major: optionValue });
    clickedSelect();
  };

  return (
    <div className={`${styles.selectForm}`}>

      <span className={`${styles.selectedOption} ${styles.titleSelect} ${isContentSelectVisible ? 'show' : ''}`} onClick={clickedSelect}>
        {formData.major}
      </span>

      {isContentSelectVisible && (
        <div className={`${styles.contentSelect}`}>

            {cells.map ((val , index) =>
                <div className={`${styles.formOption}`} onClick={() => chosenOption(cells[index])} key={index} >
                    {val}
                </div>
            )}
        </div>            
      )}
    </div>
  );
};

export default TwoStepForm;
