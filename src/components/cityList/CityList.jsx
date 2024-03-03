import React from "react";
import styles from "./CityList.module.css";
import Spinner from "../spinner/Spinner";
import CityItem from "../cityItem/CityItem";
import Message from "../message/Message";
import { useCities } from "../../contexts/CitiesContext";

export default function CityList() {
  const { cities, isLoading } = useCities();
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
