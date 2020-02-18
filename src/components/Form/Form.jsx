import React from 'react'
import styles from "./Form.module.css"
import File from '../File/File'
import { Formik, Field, Form } from "formik";
import BasicFormSchema from "../../Validation/BasicScheme";
import TargetBox from '../DragDrop/DragDrop';
import { DndProvider } from 'react-dnd';
import Backend from 'react-dnd-html5-backend'

const MessageForm = (props) => {
    //==== ввод файлов через input[file]
    // // ===== Мониторинг полей формы ========
    // let FileUpdate = async () => {
    //     let Data = []
    //     let Files = document.getElementById('file').files
    //     for (let i = 0; i < Files.length; i++) {
    //         Data.push({name : document.getElementById('file').files[i].name})
    //     }
    //     let d = await CatchFile(Files)
    //     props.UpdateFiles(d)     
    // // }
  
    // async function CatchFile(Files) {
        
    //     const FilesData =[]
    //     for (let i = 0; i < Files.length; i++) {
    //         let res = await new Promise((resolve, reject) => {
    //             let reader = new FileReader()
    //             reader.onload = function () {
    //                 resolve(reader.result.split(',')[1])
    //             };
    //             reader.readAsDataURL(Files[i]);   
    //         })
    //         FilesData[i] = {
    //             name: Files[i].name,
    //             content: res,
    //             encoding: "base64"
    //         }
           
    //     }
    //     return FilesData;
    // }

    return (
        <> {props.state.UploadFiles &&
            <DndProvider backend={Backend}>
                <TargetBox  UpdateFiles = {props.UpdateFiles} UploadFilesToggler = {props.UploadFilesToggler}/>
            </DndProvider>}
        <Formik
            //инициализируем значения input-ов
            initialValues={{
                for_email: '',
                for_name: '',
                from_email: '',
                from_name: '',
                theme: '',
                message: '',
            }}
            //подключаем схему валидации, которую описали выше
            validationSchema={BasicFormSchema}
            //определяем, что будет происходить при вызове onsubmit
            onSubmit={(values, { resetForm }) => {
                values.status = 'В очереди'
                props.SendMessage(values)
                setTimeout(() => {
                    resetForm()
                }, 500);

            }}

            //свойство, где описывыем нашу форму
            //errors-ошибки валидации формы
            //touched-поля формы, которые мы "затронули",
            //то есть, в которых что-то ввели
            render={({ errors, touched, isValid }) => (
                <Form action='' className={styles.container} encType='multipart/form-data'>
                    <div className={styles.title}><h2>Отправлялка сообщений</h2></div>

                    <div className={styles.form_blok}>

                        <span className={styles.form_label}>От кого</span>

                        <div className="form-row">

                            <div className={styles.col + " col"}>
                                <Field type="text" className={styles.form_control + ' form-control ' + (errors.from_name && touched.from_name && ' is-invalid')} name="from_name" placeholder="Имя" />

                                <div className="invalid-feedback">
                                    {errors.from_name}
                                </div>
                            </div>

                            <div className={styles.col + " col"}>
                                <Field type="text" className={styles.form_control + ' form-control ' + (errors.from_email && touched.from_email && ' is-invalid')} name="from_email" placeholder="Email" />

                                <div className="invalid-feedback">
                                    {errors.from_email}
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.form_blok}>
                        <span className={styles.form_label}>Кому</span><br />
                        <div className="form-row">
                            <div className={styles.col + " col"}>
                                <Field type="text" className={styles.form_control + ' form-control ' + (errors.for_name && touched.for_name && ' is-invalid')} name="for_name" placeholder="Имя" />

                                <div className="invalid-feedback">
                                    {errors.for_name}
                                </div>
                            </div>
                            <div className={styles.col + " col"}>
                                <Field type="text" className={styles.form_control + ' form-control ' + (errors.for_email && touched.for_email && ' is-invalid')} name="for_email" placeholder="Email" />
                                <div className="invalid-feedback">
                                    {errors.for_email}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.form_blok}>
                        <span className={styles.form_label}>Тема письма</span><br />
                        <Field type="text" className={styles.form_control + ' form-control ' + (errors.theme && touched.theme && ' is-invalid')} name="theme" placeholder=" Тема" />
                        <div className="invalid-feedback">
                            {errors.theme}
                        </div>
                    </div>

                    <div className={styles.form_blok}>

                        <span className={styles.form_label}>Сообщение</span>
                        <Field type="text" className={styles.form_control + ' form-control ' + (errors.message && touched.message && ' is-invalid')} style={{ paddingTop: 15, paddingBottom: 90 }} name="message" placeholder="Ваше сообщение" />
                        <div className="invalid-feedback">
                            {errors.message}
                        </div>
                    </div>

                    <File fileData={props.state.fileData} DeleteFile={props.DeleteFile} />

                    {/* <div className={styles.form_file}>
                        <label htmlFor="file"><i className={styles.fa + " fa fa-paperclip"} aria-hidden="true"></i> Прикрепить файл</label>
                        <Field type="file" id="file" name="files" multiple onChange={FileUpdate} />
                    </div> */}

                    <div className={styles.form_file} onClick={()=>{props.UploadFilesToggler(true)}}>
                        <div className={styles.form_file_label}><i className={styles.fa + " fa fa-paperclip"} aria-hidden="true"></i> Прикрепить файл</div>
                    </div>


                    <div className={styles.form_blok10}>
                        <button type="submit" className={styles.btn + " btn btn-primary"} disabled={!isValid}>Отправить</button>

                        
                    </div>  


                </Form>

            )}

        />
        </>
    )
}

export default MessageForm