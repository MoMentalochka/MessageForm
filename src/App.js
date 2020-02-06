import React from 'react';
import './App.css';
import FormPage from './components/FormPage/FormPage';
import { MessageApi } from './DAL/MessageApi';




class App extends React.Component {

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
  componentDidMount() {

  }


  SendMessage = (data) => {
    let monthList = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
    let month = monthList[new Date().getMonth()];
    let day = new Date().getDate();
    data.date = day + ' ' + month;

    this.setState({
      messageData: [...this.state.messageData, { ...data }],
      fileData: [],
    })

    MessageApi.SendMessage(data,)
    .then( (res) =>{
      let check = setInterval((res)=>{
        MessageApi.Track(res['track.id'])
        .then((res) => {
          console.log(res.obj.status)
          if (res.obj.status === '-1') {
            clearTimeout(check)
            console.log('Отправлено')
            let last = this.state.messageData.pop()
            last.status = 'Отправлено'
            this.setState({
              messageData: [...this.state.messageData, { ...last }],
            })}
            else  if (res.obj.status === '-2') {
              clearTimeout(check)
              console.log('Ошибка')
              let last = this.state.messageData.pop()
              last.status = 'Ошибка'
              this.setState({
                messageData: [...this.state.messageData, { ...last }],
              })}
           
        });
      }, 1000,res,this.state)}
    )
   
  };

  UpdateFiles = (data) => {
    this.setState({
      fileData: data,
    })
  };

  DeleteFile = (index) => {
    let copyFileData = [...this.state.fileData]
    copyFileData.splice(index, 1)
    this.setState({
      fileData: copyFileData
    })
  };
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
