import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const AutoDetails = () => {
  const { autoId } = useParams();
  console.log({ autoId });
  return (
    <>
      <div>AutoDetails: {autoId}</div>
      <div>
        <ul>
          <li>
            <Link>Car brand</Link>
          </li>
          <li>
            <Link>Price/ 1 hour</Link>
          </li>
          <li>
            <Link>Сar mileage / km</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
export default AutoDetails;
