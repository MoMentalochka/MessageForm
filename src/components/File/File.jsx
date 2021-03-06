import React from 'react'
import styles from './File.module.css'

const FormFile = (props) => {

    //==== Формируем модули для оттображения файлов ====
    let blok = props.fileData.map((b, index) =>
        (!b.error)?

        <div className={styles.blok} key={index}>
            <div className={styles.file}>
                <i className={styles.fa + " fa fa-paperclip"} aria-hidden="true"></i>
                {b.name.split('.')[0].length > 15 ? (b.name.split('.')[0].slice(0, 15) + "..." + b.name.split('.')[1]) : b.name}
            </div>

            <div className={styles.delete}>
                <i className={styles.fa + " fa fa-trash-o"} aria-hidden="true"></i>
                <span onClick={() => props.DeleteFile(index)} >Удалить </span>
            </div>
        </div>
        :
            <div className={"alert alert-danger"} role="alert" key={index} >
                 Файл : {b.name}  не будет отправлен, {b.error}
            </div>

    )

    return (
        <div >
            {blok}
        </div>
    )
}
export default FormFile 