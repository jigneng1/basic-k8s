import { Button, ButtonGroup, TableCell, TableRow } from "@mui/material";
interface ITodoProps {
  id: number;
  title: string;
  finished: boolean;
  onFinished: () => void;
  onDelete: () => void;
}
const Todo = ({ id, title, finished, onFinished, onDelete }: ITodoProps) => {
  return (
    <TableRow key={id}>
      <TableCell>{id}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell>{finished ? "Finished" : "Not Yet"}</TableCell>
      <TableCell>
        <ButtonGroup>
          <Button disabled={finished} color="success" onClick={onFinished}>
            Finish
          </Button>
          <Button onClick={onDelete} color="error">
            Delete
          </Button>
        </ButtonGroup>
      </TableCell>
    </TableRow>
  );
};

export default Todo;
