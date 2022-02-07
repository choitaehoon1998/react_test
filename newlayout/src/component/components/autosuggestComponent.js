import React, { Component } from 'react';
import SearchBar from './autocomplete/searchBar'

class autosuggestComponent extends Component {
    state = {
        data: [
        { name: "Andrew R. Kelly", age: 22, position: "Janitor" },
        { name: "Adrian Sanchez", age: 30, position: "Teacher" },
        { name: "Anderson Brown", age: 25, position: "Principal" },
        { name: "Anna Valio", age: 30, position: "guidance councelor" },
        { name: "Asha Mathews", age: 50, position: "Teacher" },
        { name: "Alicia keys", age: 25, position: "Librarian" },
        { name: "Alexa Dot", age: 30, position: "teacher" },
        { name: "Bob Squarepants", age: 20, position: "secretary" },
        { name: "브로넥스", age: 20, position: "Hi" },
        ],
        keyword: "",
        results: []
    };

    matchName = (name, keyword) => {
        var keyLen = keyword.length;
        name = name.toLowerCase().substring(0, keyLen);
        if (keyword === "") return false;
        return name === keyword.toLowerCase();
    };
    
    onSearch = async text => {
        let {data} = this.state;

        var results = data.filter(item => true === this.matchName(item.name, text));

        this.setState({results})
    };
    
    updateField = (field, value, update = true) => {
        if (update) this.onSearch(value);
        this.setState({ [field]: value });
    };
    render() {
        let { results, keyword } = this.state;
    
        return (
        <div className="App">
            <SearchBar
            results={results}
            keyword={keyword}
            updateField={this.updateField}
            />
        </div>
        );
    }
}

export default autosuggestComponent;