import React from 'react';
import {DropTarget} from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';
import styles from './DragDrop.module.css'

const spec = {

    drop(props, monitor) {
        let FilesData = []

        const file = monitor.getItem().files
            for (let i = 0; i < file.length; i++) {

                const reader = new FileReader();
              
                    reader.onload = () => {
                        (file[i].size < (5*1024*1024)) ?
                        
                        FilesData[i] = {
                            name: file[i].name,
                            content: reader.result.split(',')[1],
                            encoding: "base64",
                            size: file[i].size
                        }
                        :
                        FilesData[i] = {
                            name: file[i].name,
                            content: '',
                            encoding: "base64",
                            size: file[i].size,
                            error : 'максимальный размер файла 5Mb'
                        }
                        props.UpdateFiles(FilesData)
                    }
                        reader.readAsDataURL(file[i])

            }
            
                props.UploadFilesToggler(false)
                

        
    }
}

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
});


class TargetBox extends React.Component {
    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div className={styles.dropZone}>
            <h2>Бросайте файлы сюда, я ловлю</h2>
                    <p>Мы принимаем картинки (jpg, png, gif), офисные файлы (doc, xls, pdf) и zip-архивы. Размеры файла до 5 МБ</p>
            </div>
        );
    }
}

export default DropTarget(
    NativeTypes.FILE,
    spec,
    collect
)(TargetBox);