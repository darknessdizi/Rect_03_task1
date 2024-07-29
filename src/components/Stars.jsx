import { Star } from "./Star.jsx";

export const Stars = (props) => {
  const { count } = props;
  if (count < 1 || count > 5) {
    return null;
  }

  let arr = new Array(count).fill(undefined);

  return (
    <ul className="card-body-stars u-clearfix">
      { arr.map((item, index) => <Star key={index} />) }
    </ul>
  )
}
