import React from 'react'
import styles from "./Form.module.css"

const Form = () => {
    return (
        <div className={styles.container}>

            <form action="">
                <div className={styles.title}><h1>Отправлялка сообщений</h1></div>

                <div className={styles.form_blok}>
                    <span className={styles.form_label}>От кого</span><br />
                    <div class="form-row">
                        <div className={styles.col + " col"}>
                            <input type="text" class={styles.form_control + ' form-control'} placeholder="Имя" />
                        </div>
                        <div className={styles.col + " col"}>
                            <input type="text" class={styles.form_control + ' form-control'} placeholder="Email" />
                        </div>
                    </div>
                </div>

                <div className={styles.form_blok}>
                    <span className={styles.form_label}>Кому</span><br />
                    <div class="form-row">
                        <div className={styles.col + " col"}>
                            <input type="text" class={styles.form_control + ' form-control'} placeholder="Имя" />
                        </div>
                        <div className={styles.col + " col"}>
                            <input type="text" class={styles.form_control + ' form-control'} placeholder="Email" />
                        </div>
                    </div>
                </div>

                <div className={styles.form_blok}>
                    <span className={styles.form_label}>Тема письма</span><br />
                    <input type="text" class={styles.form_control + ' form-control'} placeholder="Тема письма" />
                </div>

                <div className={styles.form_blok}>

                    <span className={styles.form_label}>Сообщение</span>
                    <input type="text" class={styles.form_control + ' form-control'} style={{ paddingTop: 15, paddingBottom: 90 }} placeholder="Ваше сообщение" />
                </div>

                <div className={styles.form_file + " " + styles.form_blok10}>
                    <label for="customFile"><i class={styles.fa + " fa fa-paperclip"} aria-hidden="true"></i> Прикрепить файл</label>
                    <input type="file" placeholder="Прив" id="customFile" multiple />
                </div>

                <div className={styles.form_blok}>
                    <button type="submit" class={styles.btn + " btn btn-primary"}>Отправить</button>
                </div>
            </form>


        </div>
    )
}
export default Form