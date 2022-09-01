import './search-box.styles.css';

const SearchBox = ({ className, placeholder, onChangeHanlder }) => (
  <div>
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHanlder}
    />
  </div>
);

// class SearchBox extends Component {
//   render() {
//     const { className, placeholder, onChangeHanlder } = this.props;

//     return (
//       <div>
//         <input
//           className={`search-box ${className}`}
//           type='search'
//           placeholder={placeholder}
//           onChange={onChangeHanlder}
//         />
//       </div>
//     );
//   }
// }

export default SearchBox;
