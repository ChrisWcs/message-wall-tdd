import React from 'react';

class App extends React.Component {
    state = {
        value: '',
        wall: []
    };

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleClick = () => {
        this.setState({
            value: '',
            wall: [...this.state.wall, this.state.value]
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input value={this.state.value} data-testid="input" onChange={this.handleChange}/>
                    <button data-testid="post" onClick={this.handleClick}>Post</button>
                </div>
                <ul>
                    {this.state.wall.map( (x, i) => <li key={`p${i}`} data-testid={`post-${i}`}>{x}</li>)}
                </ul>
            </div>
        );
    }
}

export default App;