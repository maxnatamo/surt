'use client'

import styles from './ButtonInput.module.scss';

import React from 'react';

export default class ButtonInput extends React.Component {
    constructor(props) {
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(e) {
        if(this.props.onClick) {
            this.props.onClick(e);
        }
    }

    render() {
        return (
            <input
                type="button"
                value={this.props.value}
                className={styles.button}

                onClick={this.onClickHandler}
            />
        );
    }
}