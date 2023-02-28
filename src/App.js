import React from 'react'


class App extends React.Component {
    constructor(props) {//отрабатывает 1 раз при создании компонента
        console.clear()
        console.log('CONSTRUCTOR')
        super();
        this.state = {
            value: 0
        }
    }

    static getDerivedStateFromProps(props, state) {//срабатывает при каждом перерендере
        //можно отслеживать изменения props и присваивать state value значения arg
        console.log('getDerivedStateFromProps')
        return null
        //return ({value: props.arg}) чтобы присовоить value значение args
    }

    componentDidMount() {//срабатывает после встраивания в дом дерево
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {//компонент обновлен
        console.log('componentDidUpdate', prevProps, prevState)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {//срабатывает при офновлении state после метода getDerivedStateFromProps
        console.log('shouldComponentUpdate', nextProps, nextState)
        return true
    }

    buttonHandler = () => {
        this.setState({value: this.state.value + 1})
    }

    componentWillUnmount() {//срабатывает перед размонтированием компонента
        console.log('componentWillUnmount')
    }
    //DEPRECATED METHODS
    //************************
    //componentWillMount
    //componentWillUpdate
    //componentWillReceiveProps
    //************************

    render() {
        console.log('render')
        return (
            <>
                <div>React Component App</div>
                <div>{this.state.value}</div>
                <button onClick={this.buttonHandler}>inc value</button>
            </>
        )
    }
}

export default App


//mounting
//***************************
// CONSTRUCTOR
// getDerivedStateFromProps
// render
// componentDidMount
//***************************

//update
//***************************
// getDerivedStateFromProps
// shouldComponentUpdate {arg: 10} {value: 1}
// render
// componentDidUpdate {arg: 10} {value: 0}
//***************************

//mounting
//***************************
//componentWillUnmount
//***************************