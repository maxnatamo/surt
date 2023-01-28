'use client'

import styles from './TextInput.module.scss';

import React from 'react';

export default class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value ?? "",
            placeholder: props.placeholder ?? ""
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({
            value: e.target.value
        });

        if(this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        return (
            <input
                className={styles.textInput}
                placeholder={this.state.placeholder}
                value={this.state.value}
                onChange={this.onChangeHandler}
            />
        );
    }
}