import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSeatchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        Positions: {lat}, {lng}{" "}
      </h1>
      <button onClick={() => setSeatchParams({ lat: 23, lng: 50 })}>
        Change Position
      </button>
    </div>
  );
}
