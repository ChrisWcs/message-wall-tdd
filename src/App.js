import React from 'react';

class App extends React.Component {
    state = {
        value: ''
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    render() {
        return (
            <div>
                <input value={this.state.value} data-testid="input" onChange={this.handleChange}/>
                <button data-testid="post">Post</button>
            </div>
        );
    }
}

export default App;