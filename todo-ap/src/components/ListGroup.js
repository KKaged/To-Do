import { ListItems } from "@/DATA";
export default function ListGroup() {
  return (
    <ul>
      {ListItems.map((item) => (
        <p key={item}>
          {item}
          <button className="test">X</button>
        </p>
      ))}
    </ul>
  );
}
