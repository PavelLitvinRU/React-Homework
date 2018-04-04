import React, { Component } from 'react';

import { Form } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import  {ControlLabel} from 'react-bootstrap';
import { Modal } from 'react-bootstrap';

export default class UserForm extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            show: false
        };
    }
    handleClose() {
        this.setState({ show: false });
    }
    handleShow() {
        this.setState({ show: true });
    }
    render() {
        return <div>
        <Button bsStyle="primary" bsSize="small" onClick={this.handleShow}>
            Авторизация
        </Button>
         <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Форма авторизации</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form inline>
                    <FormGroup controlId="formInlineName">
                        <ControlLabel>Логин</ControlLabel>{' '}
                        <FormControl type="text" placeholder="Jane_Doe" />
                    </FormGroup>{' '}
                    <FormGroup controlId="formInlineEmail">
                        <ControlLabel>Пароль</ControlLabel>{' '}
                        <FormControl type="password" placeholder="***********" />
                    </FormGroup>{' '}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button bsStyle="primary" type="submit">Войти</Button>
                <Button onClick={this.handleClose}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    </div>;
    }
}