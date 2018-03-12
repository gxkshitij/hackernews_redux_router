import React, {Component} from 'react';
import { connect } from 'react-redux'
import fetchstories from '../actions';
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { query: '' }
    }
    

    formSubmit(e) {
        e.preventDefault();
        if (this.state.query === "") {
            alert('Sorry, no input');
            return;
        }
        this.props.history.push('/');
        this.props.fetchstories(this.state.query, false);
    }

    onInputChange(value) {
        this.setState({ query: value });
    }

    render() {
        return (
            <form
                onSubmit={this.formSubmit.bind(this)}
                className="searchBar">
                <input
                    className="form-control"
                    onChange={event => this.onInputChange(event.target.value)}
                    value={this.state.value}
                    placeholder="Please search a term on HackerNoon"
                    type="text"/>
                <button className="btn btn-primary" type="submit">Search</button>
            </form>
        )
    }

};

export default connect(null, { fetchstories })(withRouter(SearchBar));

