import Sendsay from 'sendsay-api';

const sendsay = new Sendsay({
    auth: {
      login: 'momentalochka@yandex.ru', 
      password: 'be7Bukeeg',     
    }
  });
  
  
export const MessageApi = {

        Track(id){
           return (sendsay.request({
                "action" : "track.get",
                "id": id, 
                "session": "session" 
        },
        ))
},

        SendMessage(data){
            debugger
            return(
        sendsay.request({
        
            "action" : "issue.send.test",
            "letter" : {
              "subject" : data.theme,
              "from.name" : data.from_name ,
              "from.email" : data.from_email,
              "to.name" : data.for_name,
              "message": { "text" : data.message },
              "attaches": [ 
                            {
                              "name" : "имя файла",
                              "content": "содержимое файла закодированное base64",
                              "encoding" : "base64",
                            }
                          ]
            },
            "sendwhen": "test",
            "mca": [
              data.for_email,
            ]
          }
          ))
    }

}

