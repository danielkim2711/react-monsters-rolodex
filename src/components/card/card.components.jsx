import './card.styles.css';

const Card = ({ monster }) => {
  const { name, email } = monster;

  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${name}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { name, email } = this.props.monster;
//     return (
//       <div className='card-container'>
//         <img
//           src={`https://robohash.org/${name}?set=set2&size=180x180`}
//           alt={`monster ${name}`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
