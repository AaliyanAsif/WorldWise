import React from "react";
import styles from "./CityList.module.css";
import Spinner from "../Spinner";
import CityItem from "../cityItem/CityItem";
import Message from "../Message";

export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length)
    return <Message message={"Add you first city by clciking on the map"} />;
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}
