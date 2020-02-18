import React from 'react'
import styles from "./FormPage.module.css"
import Form from '../Form/Form'
import MessagePage from '../MessagePage/MessagePage';
const FormPage = (props) => {
    let Sending = !props.state.messageData.some(i => i.status === 'В очереди')
    
    return (
        <div className={styles.container}>
            {Sending

                ? <div className={styles.form}>
                
                    <Form {...props} />
                </div>

                : <div className={styles.loading}>
                    <h2>Сообщение поставлено в очередь на отправку</h2>
                    <p>Совсем скоро сообщение вылетит из сервера,
                     и будет двигаться в сторону почты получателя
                    «{props.state.messageData[props.state.messageData.length - 1].for_email}»
                    со скоростью электронов.</p>
                </div>
            }
            <MessagePage state={props.state} />

            <button className="btn btn-danger" onClick={() => props.ClearHistory()}>Очистить историю</button>
        </div>
    )
}
export default FormPage