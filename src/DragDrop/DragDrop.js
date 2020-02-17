import React from 'react';
import {
    DropTarget,
} from 'react-dnd';

import { NativeTypes } from 'react-dnd-html5-backend';

const style = {
    border: '1px solid gray',
    height: '15rem',
    width: '15rem',
    padding: '2rem',
    textAlign: 'center',
};

const spec = {

    drop(props, monitor) {
        let FilesData = []
        const file = monitor.getItem().files
        for (let i = 0; i < file.length; i++) {

            const reader = new FileReader();

            reader.onload = () => {
                FilesData[i].content = reader.result.split(',')[1]
            };

            reader.readAsDataURL(file[i]);

            FilesData[i] = {
                name: file[i].name,
                encoding: "base64"
            }

            console.log(FilesData)
        };
           
        props.UpdateFiles(FilesData)
    }
}

const collect = (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
});


class TargetBox extends React.Component {
    render() {
        const { connectDropTarget } = this.props;
        return connectDropTarget(
            <div style={style}>
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