import Sendsay from 'sendsay-api';

const sendsay = new Sendsay({
  auth: {
    login: 'momentalochka@yandex.ru',
    password: 'be7Bukeeg',
  }
});

// === Интерфейс запросов ===
export const MessageApi = {
  //==== Запрос о состоянии ====
  Track(id) {
    return (sendsay.request({
      "action": "track.get",
      "id": id,
      "session": "session"
    },
    ))
  },
  //==== Отправка сообщения ====
  SendMessage(data, files) {
    //==== Создаём пакет файлов ====
    files = files.map(e => e = { 'name': `${e.name}`, 'content': `${e.content}`, 'encoding': 'base64' })
    return (
      sendsay.request({

        "action": "issue.send",
        "letter": {
          "subject": data.theme,
          "from.name": data.from_name,
          "from.email": data.from_email,
          "to.name": data.for_name,
          "message": { "text": data.message },
          "attaches": files
          // {
          //   "name": `${files[0].name}`,
          //   "content": `${files[0].content}`,
          //   "encoding": "base64"
          // },
        },
        "sendwhen": "test",
        "mca": [
          data.for_email,
        ]
      }
      ))
  }

}

