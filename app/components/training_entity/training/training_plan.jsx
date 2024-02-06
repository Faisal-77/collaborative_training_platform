"use client"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "@/app/components/training_entity/page.module.css";
import { useState } from "react";

export default function TrainingPlan() {
    const [isPlanClicked, setClicked] = useState(false);
    return (
        
        <div className={styles.container}>
            <div className={styles.back_arrow_container}>
                <i className={`${styles.back_arrow} bi bi-caret-right-square-fill`}></i>
            </div>
            <div className={styles.training_plan_container}>
                <Training_plan_cell name={"خطة تخصص تقنية الحاسب الآلي"} />
                <Training_plan_cell name={"خطة تخصص التقنية الإلكترونية"} />
                <Training_plan_cell name={"خطة تخصص التقنية الإلكترونية"} />
                <Training_plan_cell name={"خطة تخصص التقنية الإلكترونية"} />
                <Training_plan_cell name={"خطة تخصص التقنية الإلكترونية"} />
            </div>
            
            <div className={styles.add_button_container}>
                <button
                    onClick={()=>setClicked(true)}
                    className={styles.add_button}>إضافة</button>
            </div>
            <div
                className={styles.popupContainer}
                style={{ display: isPlanClicked ? "flex" : "none" }}
            >
            <Training_plans setClicked={setClicked} />
            </div>
      </div>
    );
  }
function Training_plan_cell({name}) {
    return (
        <div className={styles.training_plan}>
            <p>{name}</p>
        </div>
    )
  }

function Training_plans({setClicked}){

    const [components, setComponents] = useState([]);

    const handleAddButtonClick = () => {
        const newComponent = "";
        setComponents([...components, newComponent]);;
  };

  const handleRemoveComponent = (index) => {
    const updatedComponents = [...components];
    updatedComponents.splice(index, 1);
    setComponents(updatedComponents);
  };

    return (
    <div className={`${styles.training_plan_cont} container`}>
        <i 
            onClick={() => setClicked(false)}
            className={`${styles.back_arrow} bi bi-caret-right-square-fill`}></i>
        <div className={`${styles.training_plan_cont_row} row text-center`}>
            <div className={`col-2`}>
                <span>NO</span>
            </div>
            <div className={`col`}>
                <span>القسم</span>
            </div>
            <div className={`col`}>
                <span>المهمة</span>
            </div>
            <div className={`col`}>
                <span className={styles.trining_plan_title_span}> التعديل , </span>
                <span className={styles.trining_plan_title_span}> الحذف </span>
            </div>
        </div>
        {components.map((val, index) => (
        <div key={index}>
            <Training_plan_content
                index={index}
                handleRemoveComponent={handleRemoveComponent}
                No={index}
            />
      </div>
      ))}

      <div className="row">
        <div className="col">
          <button onClick={handleAddButtonClick} className={styles.add_button_plan}>
            إضافة
          </button>
            </div>
         </div>
         
         <div className={`${styles.training_plan_cont_saveAndCancel} row text-center`}>
            <div className={`col`}>
                <button className={styles.saveAndCancel_button_plan}>الغاء</button>
                <button className={styles.saveAndCancel_button_plan}>حفظ التغييرات</button>
            </div>
         </div>
    </div>
    )
} 

function Training_plan_content({handleRemoveComponent , index , No}) {
    const [isClicked, setClicked] = useState(false);
    const [department , setDepartment] = useState("")
    const [task , setTask] = useState("")

    const toggleClick = (bool) => {
        setClicked(bool);
      };

  return (
    <div className={`${styles.training_plan_content} row text-center`}>
            <div className={`col-2`}>
                <span>{No}</span>
            </div>
            <div className={`col`}>
                {isClicked ? 
                <span>{department}</span>
                :<input 
                    className={`${styles.formInput}`}
                    type="text"
                    placeholder="أدخل القسم"
                    onChange={(e) => setDepartment(e.target.value)}
                    />
                }
                
            </div>
            <div className={`col`}>
                {isClicked ? 
                <span>{task}</span>
                :<input 
                    className={`${styles.formInput}`}
                    type="text"
                    placeholder="أدخل القسم"
                    onChange={(e) => setTask(e.target.value)}
                    />
                }

            </div>
            <div className={`col`}>
                <span className={styles.trining_plan_title_span}>
                    {isClicked ?
                        <i 
                            onClick={() => toggleClick(false)}
                            className={`${styles.training_plan_icon} bi bi-pencil`}> 
                        </i>
                        :<i 
                            onClick={() => toggleClick(true)}  
                            className={`${styles.training_plan_icon} bi bi-check-lg`}>

                        </i>
                    }
                    </span>
                <span className={styles.trining_plan_title_span}>
                    <i onClick={() => handleRemoveComponent(index)} className={`${styles.training_plan_icon_garpeg} bi bi-trash3-fill`}></i> 
                </span>
            </div>
        </div>
  )
}
