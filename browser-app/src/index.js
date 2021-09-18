import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Base extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // TODO: アプリ内で保持する状態やデータを記述する
        }
    }

    render() {
        return (
            <></>
        );
    }

    // render後に一度だけ走る処理
    componentDidMount() {
    }

    // render後に毎回必ず走る処理（レイアウトを変更するような処理→render→これ）
    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    // componentが破棄される時に走る処理（画面遷移時とか）
    componentWillUnmount() {
    }

}

ReactDOM.render(
    <Base />,
    document.getElementById('root')
);