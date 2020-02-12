import React from 'react'
import styles from './MessageStatus.module.css'
const MessageStatus = (props) => {
    //Цвет статуса
    let color
    if (props.status === 'Отправлено') {
        color = 'green'
    }
    else if (props.status === 'Ошибка') {
        color = 'red'
    }

    return (
        <div className={styles.header + " row"}>
            <div className={"col-2 " + styles.data}>{props.date}</div>
            <div className={"col-8 " + styles.theme}>{props.theme}</div>
            <div className={"col-2 " + styles.status + " " + (color === 'green' && styles.green) + ' ' + (color === 'red' && styles.red)}>{props.status}</div>
        </div>
    )
}
export default MessageStatus