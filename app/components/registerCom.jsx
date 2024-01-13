'use client'
import styles from "@/app/page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SelectForm from "./selectForm";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faPhone, faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterCom() {
    const [user_name, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [password_2, setPassword_2] = useState("");
    const [department, setDepartment] = useState("");
    const [mejor, setMejor] = useState("");
    const [errors, setError] = useState("");
    const router = useRouter();

    const handel_validate_input = (user_name, email, phoneNumber, password, password_2) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneNumberPattern = /^05\d{8}$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

        if (user_name.length !== 9) {
            return 'اسم المستخدم خطأ';
        } else if (!emailPattern.test(email)) {
            return 'الأيميل المدخل غير صحيح';
        } else if (!phoneNumberPattern.test(phoneNumber)) {
            return 'رقم الجوال خطأ يجب أن يبدأ بـ 05';
        } else if (!passwordPattern.test(password)) {
            return `كلمة المرور خطأ 
            يجب أن تحتوي على 8 خانات على الأقل
             وحرف كبير وحرف صغير`;
        } else if (password !== password_2) {
            return 'الرمز السري لا يساوي تأكيد الرمز السري';
        } else {
            return true;
        }
    };

    const handelSubmit = async (e) => {
        const check_input = handel_validate_input(user_name, email, phoneNumber, password, password_2);
        e.preventDefault();

        if (!user_name || !email || !phoneNumber || !password || !password_2) {
            setError('كل الحقول مطلوبة');
            return;
        }

        if (check_input !== true) {
            setError(check_input);
            return;
        }

        try {
            const resExist = await fetch('api/exist_student', {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ user_name }),
            });

            const { user } = await resExist.json();

            if (user) {
                setError("اسم المستخدم مسجل بالفعل");
                return;
            }

            const res = await fetch('api/register', {
                method: "POST",
                body: JSON.stringify({
                    user_name,
                    email,
                    phoneNumber,
                    password
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
        <>
            <h1>تسجيل جديد</h1>
            <form onSubmit={handelSubmit} className="d-flex flex-column">
                {/* Full Name */}
                <div className={styles.iconsAuth}>
                    <FontAwesomeIcon icon={faUser} className={styles.formIcons} />
                </div>
                <label htmlFor="username" className={` ${styles.formLabel}`}>
                    الاسم كامل
                </label>
                <input
                    type="text"
                    placeholder="أدخل الاسم كامل"
                    id="username"
                    className={`${styles.formInput}`}
                    onChange={(e) => setUser(e.target.value)}
                />

                {/* Email */}
                <div className={styles.iconsAuth}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.formIcons} />
                </div>
                <label htmlFor="email" className={` ${styles.formLabel}`}>
                    البريد الإلكتروني
                </label>
                <input
                    type="text"
                    placeholder="أدخل البريد الإلكتروني"
                    id="email"
                    className={`${styles.formInput}`}
                    onChange={(e) => setEmail(e.target.value)}
                />

                {/* Phone Number */}
                <div className={styles.iconsAuth}>
                    <FontAwesomeIcon icon={faPhone} className={styles.formIcons} />
                </div>
                <label htmlFor="phone" className={` ${styles.formLabel}`}>
                    رقم الجوال
                </label>
                <input
                    type="text"
                    placeholder="أدخل رقم الجوال"
                    id="phone"
                    className={`${styles.formInput}`}
                    onChange={(e) => setPhone(e.target.value)}
                />

                {/* Password */}
                <div className={styles.iconsAuth}>
                    <FontAwesomeIcon icon={faLock} className={styles.formIcons} />
                </div>
                <label htmlFor="password" className={` ${styles.formLabel}`}>
                    كلمة المرور
                </label>
                <input
                    type="password"
                    placeholder="أدخل كلمة المرور"
                    id="password"
                    className={`${styles.formInput} `}
                    onChange={(e) => setPassword(e.target.value)}
                />

                {/* Confirm Password */}
                <div className={styles.iconsAuth}>
                    <FontAwesomeIcon icon={faLock} className={styles.formIcons} />
                </div>
                <label htmlFor="password2" className={` ${styles.formLabel}`}>
                    أعد كلمة المرور
                </label>
                <input
                    type="password"
                    placeholder="أعد كلمة المرور"
                    id="password2"
                    className={`${styles.formInput} ${styles.password}`}
                    onChange={(e) => setPassword_2(e.target.value)}
                />

                {/* Department */}
                <div className="container text-center">
                    <div className="row">
                        <div className="col p-0 ">
                            <SelectForm />
                        </div>
                        <div className="col p-0 ">
                            <SelectForm />
                        </div>
                    </div>
                </div>

                {/* Login Link */}
                <span className={`${styles.linksLogin}`}>
                    <Link href={"/"}> لديك حساب؟</Link>
                </span>

                {/* Error Message */}
                {errors && (
                    <div className='bg-red-500 text-white w-fit '>
                        {errors}
                    </div>
                )}

                {/* Submit Button */}
                <input
                    type="submit"
                    value="تسجيل الدخول"
                    className={`${styles.btnLogin} align-self-center`}
                />
            </form>
        </>
    );
}