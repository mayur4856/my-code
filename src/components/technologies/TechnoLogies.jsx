import TechnoLogiesData from "../../api/TechnoLogiesData.json";
import { NavLink } from "react-router-dom";
import "./technologies.css";

const TechnoLogies = () => {

  return (
    <div className="technologies-main">
        <div className="container">
            <h2 className="text-center">Technologies</h2>
            <ul className="technologies-list">
                {TechnoLogiesData.map((myElem) => {
                    return (
                        <li className="item shadow-box" data-aos="fade-up" key={myElem.id}>
                            <div className="item-wrap">
                                <div className="thumb">
                                    <img src={myElem.img_url} alt="placeholder-image" width="100%" height="100%" />
                                </div>
                                <div className="infos">
                                    <h3 className="name">{myElem.name}</h3>
                                    <h5 className="raring">Rating: {myElem.rating}</h5>
                                    <p className="description">{myElem.description}</p>
                                    <a className="btn" href={myElem.watch_url} target="_blank">Read More</a>
                                </div>
                                <NavLink className="star-pattern" to="/contact">
                                    <img src="./images/star-pattern.png" alt="" />
                                </NavLink>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </div>
  );

};

export default TechnoLogies;
