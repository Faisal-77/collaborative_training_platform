
const handel_validate_input_entity = (name ,filde, email, phoneNumber) => {
    const name_pattern = /^[\p{L}\s]+$/u;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberPattern = /^05\d{8}$/;

    if (!name_pattern.test(name)){    
      return 'الاسم خطأ'
    }
    else  if (!name_pattern.test(filde)) {
        return 'اسم المستخدم خطأ';
    } else if (!emailPattern.test(email)) {
        return 'الأيميل المدخل غير صحيح';
    } else if (!phoneNumberPattern.test(phoneNumber)) {
        return 'رقم الجوال خطأ يجب أن يبدأ بـ 05';
    }else{
      return true;
    }
}
const handel_validate_input_student = (full_name ,user_name, email, phoneNumber) => {
  const name_pattern = /^[\p{L}\s]+$/u;
  const userNamePattern = /^4\d{8}$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberPattern = /^05\d{8}$/;
  if (!name_pattern.test(full_name)){    
    return 'الاسم الكامل خطأ'
  }
  else  if (!userNamePattern.test(user_name)) {
      return 'اسم المستخدم خطأ';
  } else if (!emailPattern.test(email)) {
      return 'الأيميل المدخل غير صحيح';
  } else if (!phoneNumberPattern.test(phoneNumber)) {
      return 'رقم الجوال خطأ يجب أن يبدأ بـ 05';
  }else{
    return true;
  }
}
export  {handel_validate_input_entity , handel_validate_input_student} ;