import { Component } from 'react';

class SearchBox extends Component {
  render() {
    const { className, placeholder, onChangeHanlder } = this.props;

    return (
      <div>
        <input
          className={className}
          type='search'
          placeholder={placeholder}
          onChange={onChangeHanlder}
        />
      </div>
    );
  }
}

export default SearchBox;
