import React from 'react';
import {connect} from "react-redux";
import {removeAll} from "./actionCreators/actionCreaters";
import { REMOVE_ALL } from './actions/actions';


class RemoveAll extends React.Component {
    render() {
        return <button className="remove-all" onClick={() => { this.props.RemoveAll()}}>
                Tümünü Sil
        </button>
    }
}


const mapStateToProps = () => {
    return {
        todos: []
    }
};

const mapDispatchToProps = dispatch => ({
    RemoveAll: () => {dispatch(removeAll())}
  });
export default connect(mapStateToProps, mapDispatchToProps)(RemoveAll);