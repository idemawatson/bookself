import { RhfSelectField } from "@/components/parts/forms/SelectField";
import { SelectChangeEvent } from "@mui/material";
import { Control, FieldValues, Path } from "react-hook-form";

interface Props<T extends FieldValues> {
  control: Control<T, any>;
  name: Path<T>;
  onChange?: (event: SelectChangeEvent<unknown>) => void;
}

const STATUS_SELECTIONS = [
  { text: "読みたい", value: 0 },
  { text: "積読", value: 1 },
  { text: "読んでる", value: 2 },
  { text: "読んだ！", value: 3 },
];

const BookStatusSelectField = <T extends FieldValues>(props: Props<T>) => {
  return (
    <RhfSelectField
      name={props.name}
      control={props.control}
      label="今どんな感じ？"
      selectPropsList={STATUS_SELECTIONS}
      onChange={props.onChange}
    />
  );
};

export default BookStatusSelectField;
