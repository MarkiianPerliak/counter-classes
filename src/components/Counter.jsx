import { Component } from "react"

class Counter extends Component {

    // constructor() {
    //     this.count = 0
    // }

    state = {
        count: 0
    }

    increase() {
        this.state.count = this.state.count + 1
    }

    decrease() {
        this.state.count = this.state.count - 1
    }

    render() {
        return         <div>
            <button onClick={this.increase} type="button">Increase</button>
            <button onClick={this.decrease} type="button">Decrease</button>
            <p>Count: <span>{this.state.count}</span></p>
        </div>
    }
}

export default Counter