import { ListItems } from "@/DATA";
export default function ListGroup() {
  return (
    <ul>
      {ListItems.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </ul>
  );
}
