import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../training_entity/page.module.css";

export default function Request_form() {
  return (
    <div className={`${styles.form_request} container`} >
        <div className={`row`}>
            
            <div className={`col`}>
            <i className={`${styles.cancel} bi bi-x-circle`}></i>
                <h2 className={`${styles.form_title} text-center`}>انشاء طلب جديده</h2> 
            </div>

            <form>
                <div className={`${styles.row_content} row`}>
                   
                    <div className={`${styles.col_content} col`}>
                         <label htmlFor="mejor"> التخصص </label>
                         <br />
                        <input 
                            className={styles.text_form_input}
                            type="text" 
                            placeholder="ادخل التخصص"
                            name="mejor"
                            
                        />
                    </div>

                    <div className={`${styles.col_content} col`}>
                        <label htmlFor="number" > العدد </label>
                        <br />
                        <input 
                            className={styles.text_form_input}
                            type="text" 
                            placeholder="العدد"
                            name="number"
                        />
                    </div>
                </div>
                <div className={`${styles.row_content} row`}>
                   
                    <div className={`${styles.col_content} col`}>
                         <label htmlFor="mejor"> التخصص </label>
                         <br />
                        <input 
                            className={styles.text_form_input}
                            type="text" 
                            placeholder="ادخل التخصص"
                            name="mejor"
                            
                        />
                    </div>

                    <div className={`${styles.col_content} col`}>
                        <label htmlFor="number" > العدد </label>
                        <br />
                        <input 
                            className={styles.text_form_input}
                            type="text" 
                            placeholder="العدد"
                            name="number"
                        />
                    </div>
                </div>
                <div className={`${styles.row_content} row`}>
                   
                    <div className={`${styles.col_content} col`}>
                         <label htmlFor="mejor"> التخصص </label>
                         <br />
                        <input 
                            className={styles.text_form_input}
                            type="text" 
                            placeholder="ادخل التخصص"
                            name="mejor"
                            
                        />
                    </div>

                    <div className={`${styles.col_content} col`}>
                        <br />
                      <input 
                        className={`${styles.btn_create} text-center`}
                        type="submit"
                        value="انشاء الطلب"
                      />
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}
