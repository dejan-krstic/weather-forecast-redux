import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchWeather } from "../actions/index"

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            city: "",
            countryCode: ""
        }
        this.onFormSubmit=this.onFormSubmit.bind(this)
    }
    onFormSubmit() {
        event.preventDefault();
        this.props.fetchWeather(this.state.city, this.state.countryCode);
        this.setState({ city: "", countryCode: "" });
    }

    render() {
        console.log(this.state.city, this.state.countryCode);
        return (
            <div  className="input-group">
                <div className="row">
                    <div className="col-md-10">
                        <input
                            placeholder="City..."
                            className="form-control"
                            value={this.state.city}
                            onChange={(event) => this.setState({ city: event.target.value })} />
                        </div>
                    <div className="col-md-2">
                        <input
                            placeholder="Country code..."
                            className="form-control"
                            value={this.state.countryCode}
                            onChange={(event) => this.setState({ countryCode: event.target.value })} />
                    </div>
                </div>
                <span className="input-group-btn">
                    <button type="submit" onClick={this.onFormSubmit} className="btn btn-secondary">Submit</button>
                </span>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
