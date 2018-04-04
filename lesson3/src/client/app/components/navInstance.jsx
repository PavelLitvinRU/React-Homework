import React, { Component } from 'react';

export default class NavInstance extends Component {
    render() {
        return <div className="list-group">
            <button type="button" className="list-group-item">Разметка</button>
            <button type="button" className="list-group-item">Компоненты</button>
            <button type="button" className="list-group-item">Утилиты</button>
        </div>;

    }
}