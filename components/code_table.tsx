import styles from "../styles/Home.module.css";
import { CountryData } from "../data/codes";

export default function CodeTable({ data }) {
  if (data.length == 0)
    return (
      <h2 className="text-white">
        Sorry, we couldnt find anything related to that search!
      </h2>
    );
  return (
    <table className={styles["table-class"]}>
      <thead>
        <tr>
          <th> Name </th>
          <th> Code </th>
          <th> ISO </th>
          <th> Population </th>
          <th> Area </th>
          <th> GDP </th>
        </tr>
      </thead>
      <tbody>
        {data.map((c: CountryData) => (
          <tr key={c.name}>
            <td data-label="Name"> {c.name} </td>
            <td data-label="Code"> {c.code} </td>
            <td data-label="ISO"> {c.iso} </td>
            <td data-label="Population"> {c.population} </td>
            <td data-label="Area"> {c.area} </td>
            <td data-label="GDP"> {c.gdp} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
