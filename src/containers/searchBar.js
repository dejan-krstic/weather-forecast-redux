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
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit() {
        event.preventDefault();
        let countryCode = "";
        if (this.state.countryCode) {
            countryCode = `,${this.state.countryCode}`;
        }
        this.props.fetchWeather(this.state.city, countryCode);
        this.setState({ city: "", countryCode: "" });
    }


    render() {
        return (
            <div className="input-group"
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        this.onFormSubmit()
                    }
                }
                }>
                <div className="row">
                    <div className="col-md-8">
                        <input
                            placeholder="Enter a city name and click on Submit or press Enter..."
                            className="form-control"
                            value={this.state.city}
                            onChange={(event) => this.setState({ city: event.target.value })} 
                            autoFocus />
                    </div>
                    <div className="col-md-4">
                        <input
                            placeholder="Country code (optional)"
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
