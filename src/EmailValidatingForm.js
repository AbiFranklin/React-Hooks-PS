import React, { useState, useReducer } from 'react';
import useInterval from './useInterval';
import { Container, Button } from 'react-bootstrap'

function EmailValidatingForm() {
    const validateEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email)
    };

    const [emailValid, setEmailValid] = useState(false);
    const reducer = (state, action) =>{
        state = action;
        setEmailValid(validateEmail(state));
        return action;
    };

    const [email, setEmail] = useReducer(reducer, '');
    const secondsFormValidFor = 30;
    const [count, setCount] = useState(secondsFormValidFor);
    useInterval(
        () => {
            setCount(count - 1);
        },
        count > 0 ? 1000 : null
    )

    return (
        <Container>
            <br />
            <div>
                <div className='content'>
                <input
                  disabled={ count <= 0 }
                  value={email}
                  onChange={e => {
                      setEmail(e.target.value)
                  }}
                  placeholder='Enter Email'
                  type='email'
                  name='email'
                  required
                />
                <Button
                disabled={!emailValid || count <= 0}
                onClick={() => alert(`button clicked with email ${email}`)}
                type='submit'
                >
                PRESS ME!
                </Button>
                <div>
                    {count > 0 ? `You have ${count} seconds left` :
                     'Times Up'}
                </div>
              </div>
            </div>
        </Container>
    )
}

export default EmailValidatingForm;