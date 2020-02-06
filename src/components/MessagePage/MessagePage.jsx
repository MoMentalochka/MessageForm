import React from 'react'
import styles from './MessagePage.module.css'
import MessageStatus from './MessageStatus'



const MessagePage = (props) => {

    let MessageStatusItems = props.state.messageData.map((i,index) => <MessageStatus key={index} theme= {i.theme} status={i.status} date = {i.date} /> )
    return (
        <div className={styles.container}>
            <h4>Отправленные сообщения</h4>

            { props.state.messageData.length ===0
            ? <div>Сообщения ещё не отправлялись</div>

            : <><div className={styles.header   + " row"}> 
                <div className={"col-2 " + styles.data}>Дата</div>
                <div className={"col-8 " + styles.theme}>Тема</div>
                <div className={"col-2 " + styles.status}>Статус</div>
              </div>

            {MessageStatusItems}
            </>
            }
        </div>
    )
}
export default MessagePage