import React from "react";
import { connect } from "react-redux";

import { User } from '../components/User';
import { Main } from '../components/Main';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Main changeUsername={ (username) => this.props.setName(username)} />
                <User username={this.props.user.name} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({
                type: "SET_NAME",
                payload: name
            });
        }
    }
}

/*** 
 * 1). metoda 'connect' zwraca mi najpierw funckję, do której przekazuję komponent, który chcę połączyć z Redux (w tym przypadku 'App').
 * 2). potem zwracany jest już tak jakby gotowy, połączony z Redux komponent ('App'), który eksportuję i importuję w pliku w 'index.js'
***/
export default connect(mapStateToProps, mapDispatchToProps)(App);
