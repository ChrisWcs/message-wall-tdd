import React from 'react'
import { render, fireEvent, cleanup } from 'react-testing-library'
import App from './App';

test('the app contains a form I can fill with text', () => {
    const {getByTestId} = render(<App />);
    const my_input = getByTestId('input');
    expect(my_input.value).toEqual("");

    fireEvent.change(my_input, { 
        target: { 
            value: "some words"
        } 
    });
    
    expect(my_input.value).toEqual("some words");
    cleanup();
});

test('the app contains a button that will post the input to the wall', () => {
    const {getByTestId} = render(<App />);
    const my_input = getByTestId('input');
    const post_button = getByTestId('post');

    fireEvent.change(my_input, { 
        target: { 
            value: "some words"
        } 
    });

    fireEvent.click(post_button);
    
    expect(my_input.value).toEqual("");
    expect(getByTestId('post-0').textContent).toEqual("some words");
    cleanup();
});