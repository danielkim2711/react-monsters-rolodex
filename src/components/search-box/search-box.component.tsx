import { ChangeEventHandler } from 'react';

import './search-box.styles.scss';

type Props = {
  className: string;
  placeholder: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: Props) => (
  <div>
    <input
      className={`search-box ${className}`}
      type='search'
      placeholder={placeholder}
      onChange={onChangeHandler}
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
