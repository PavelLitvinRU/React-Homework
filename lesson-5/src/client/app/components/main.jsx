import React, { Component } from 'react';

import { Panel } from 'react-bootstrap';
import { PageHeader } from 'react-bootstrap';

import UploadPok from '../actions/UploadPok'

export default class Main extends Component {
    render() {
        return <Panel>
            <Panel.Heading>
                <Panel.Title componentClass="h1">Panel heading with a title</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
                <PageHeader>
                    <UploadPok />
                    Example page header <small>Subtext for header</small>
                </PageHeader>
            </Panel.Body>
        </Panel>;
    }
}