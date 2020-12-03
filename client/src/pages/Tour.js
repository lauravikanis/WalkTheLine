import React from "react";
import styled from "styled-components/macro";
import PageHeadline from "../components/Header/PageHeadline";
import Standort from "../components/Standorte/Standort";
import mappath from "../assets/map.svg";
import { Link } from "react-router-dom";
// import { getLocationNamebyTour } from "../api/locations";

const TourDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width: 600px;
`;

const Tour = () => {
  // const { listTour } = useParams();
  // const [list, setList] = useState(null);

  // useEffect(async () => {
  //   const List = await getListsByTour(listTour);
  //   setList(List);
  // }, []);

  return (
    <TourDiv>
      <PageHeadline>Tourname</PageHeadline>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio a
        beatae ducimus fuga assumenda recusandae nam, quam facere maxime
        accusamus dolore numquam provident libero voluptas animi quas vitae
        incidunt.
      </p>
      <Standort>
        <Link to="/location">
          {/* {list.items.map((item) => (
            <li key={item}>{item}</li>
          ))} */}
        </Link>
      </Standort>
      <img src={mappath} alt="placeholder" />
    </TourDiv>
  );
};
export default Tour;
