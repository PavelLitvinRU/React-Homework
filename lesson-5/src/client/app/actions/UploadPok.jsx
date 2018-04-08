import React, { Component } from 'react'

import { Grid, Thumbnail, Row, Col } from 'react-bootstrap'

export default class UploadPok extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            result: []
        };
    }
    componentDidMount() {
        fetch("https://pokeapi.co/api/v2/pokemon/?limit=20")
            .then(res => res.json())
            .then(
                (data) => {
                    this.setState({
                        isLoaded: true,
                        result: data.results
                    })
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    })
                }
            )
    }
    render() {
        const { error, isLoaded, result } = this.state
        if (error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            const url = '../../client/img/sprites/'
            return (
                    <Row>
                        {result.map((res, count) => (
                        <Col xs={6} md={4}>
                            <Thumbnail src={`${url}${++count}.png`} alt="242x200">
                                <h3 key={res.name}>{res.name}</h3>
                            </Thumbnail>
                        </Col>
                        ))}
                    </Row>
            )
        }
    }
    }
