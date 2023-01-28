'use client'

import React from 'react';

import Container from '@components/Container';
import { TextInput, ButtonInput, InputGroup } from '@components/Input';
import { verify } from '@libs/url';
import { request } from '@libs/api';

import styles from './page.module.scss';
import colors from '@styles/colors.module.scss';

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      targetUrl: "",
      errorMessage: undefined,
      statusMessage: undefined
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.shorten = this.shorten.bind(this);
  }

  onChangeHandler(e) {
    this.setState({
      targetUrl: e.target.value,
      errorMessage: undefined
    });
  }

  async shorten() {
    const valid = verify(this.state.targetUrl);

    if(!valid) {
      this.setState({
        errorMessage: "That link doesn't seem to be valid."
      });
      return;
    }

    const res = await request("/api/create", {
      cache: 'no-store',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ target: this.state.targetUrl })
    });

    const doc = await res.json();
    const url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/view/${doc.hash}`;

    navigator.clipboard.writeText(url);

    this.setState({
      statusMessage: "The shortened link has been copied to your clipboard!"
    });
  }

  render() {
    return (
      <main className={styles.main}>
        <Container size="huge" title="Paste a website URL, so we can shorten it">
          <p>
            Need to shorten some of the the insanely long URLs, that websites use? Are you bored of all the identical URL shorteners?<br /><br />
  
            Well, this one is no better!<br /><br />
          </p>
  
          <InputGroup>
            <TextInput placeholder="Enter link here" onChange={this.onChangeHandler} />
            <ButtonInput value="Shorten" onClick={this.shorten} />
          </InputGroup>

          {this.state.errorMessage &&
            <p style={{ color: colors.errorColor }}>{this.state.errorMessage}</p>
          }

          {this.state.statusMessage &&
            <p style={{ color: "white" }}>{this.state.statusMessage}</p>
          }
        </Container>
  
        <Container size="medium" title="Want more premium features?">
          <p>
            <b>Too bad!</b><br /> <br />
  
            <i>surt</i> is a very basic URL shortener. It has no support for accounts, custom URLs or provides statistics.
            
            However, it is very easy.
          </p>
        </Container>
      </main>
    )
  }
}