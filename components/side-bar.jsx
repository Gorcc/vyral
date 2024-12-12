import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire, faGamepad, faLightbulb, faBook, faMusic, faFilm, faTv } from '@fortawesome/free-solid-svg-icons';
import "../public/styles/sidebar.scss";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <a href="#">
        <FontAwesomeIcon icon={faHome} /> Home
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFire} /> Trending
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faGamepad} /> Gaming
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faLightbulb} /> Learning
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faBook} /> Library
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faMusic} /> Music
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faFilm} /> Movies
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTv} /> Live
      </a>
    </div>
  );
};

export default Sidebar;
