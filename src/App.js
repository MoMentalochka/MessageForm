import React from 'react';
import './App.css';
import FormPage from './components/FormPage/FormPage';
import { MessageApi } from './Api/MessageApi';



class App extends React.Component {

  // ==== Подгружаем инициализационные данные(если есть) ====
  componentWillMount() {
    localStorage.getItem('state')
      ? this.setState({
        ...JSON.parse(localStorage.getItem('state'))
      })
      : this.setState({
        fileData: [],
        messageData: [],
      })
  }
  componentWillUpdate(nextProps, nextState) {

    localStorage.setItem('state', JSON.stringify({ ...nextState }))
  }

  // Отправка формы 
  SendMessage = (data) => {
    //==== Формируем время отправки сообщения ====
    let monthList = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    let month = monthList[new Date().getMonth()];
    let day = new Date().getDate();
    data.date = day + ' ' + month;

    //==== Добавляем поле время объекту с сообщением ====
    this.setState({
      messageData: [...this.state.messageData, { ...data }],
    })



    //==== Отправка сообщения ====
    let files = this.state.fileData

    MessageApi.SendMessage(data, files)
      .then((res) => {
        let check = setInterval((res) => {
          //==== ожидание завершения отправки ====
          MessageApi.Track(res['track.id'])
            .then((res) => {

              //==== при успешной отправке ====
              if (res.obj.status === '-1') {
                clearTimeout(check)
                let last = this.state.messageData.pop()
                last.status = 'Отправлено'
                this.setState({
                  messageData: [...this.state.messageData, { ...last }],
                  fileData: [],
                })
              }
              //==== при ошибке ====
              else if (res.obj.status === '-2') {
                clearTimeout(check)
                let last = this.state.messageData.pop()
                last.status = 'Ошибка'
                this.setState({
                  messageData: [...this.state.messageData, { ...last }],
                  fileData: [],
                })
              }

            });
        }, 1000, res, this.state)
      })
  };

  //==== Загрузка выбранных файлов ====
  UpdateFiles = (data) => {
    this.setState({
      fileData: data,
    })
  };

  //==== Удаление файла из списка выбраннных ====
  DeleteFile = (index) => {
    let copyFileData = [...this.state.fileData]
    copyFileData.splice(index, 1)
    this.setState({
      fileData: copyFileData
    })
  };

  // ==== Очистка localstorage ==== 
  ClearHistory = () => {
    localStorage.removeItem('state')
    setTimeout(() => {
      this.setState({
        messageData: [],
      })
    }, 300);
  };

  render() {
    return (
      <FormPage UpdateFiles={this.UpdateFiles} state={this.state} DeleteFile={this.DeleteFile} Validate={this.Validate} SendMessage={this.SendMessage} ClearHistory={this.ClearHistory} />
    )

  }
}
export default App;
