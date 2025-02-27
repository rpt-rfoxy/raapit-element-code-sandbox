import { DateTimeInput } from "./date-time-input";



const App = () => {
  return (
    <div>
      <DateTimeInput
        {...{
          placeholder: 'A Placeholder',
          label: 'Date Time Input',
          errorMessage: "Some Error",
          size: 'small',
          helperText: "This is a long optional helper text that won’t fit in a single row"

        }}
      />
      <DateTimeInput
        {...{
          type: 'time',
          placeholder: 'A Placeholder',
          label: 'Date Time Input',
          errorMessage: "Some Error",
          size: 'small',
          helperText: "This is a long optional helper text that won’t fit in a single row"

        }}
      />
      <DateTimeInput
        {...{
          type: 'time',
          placeholder: 'A Placeholder',
          label: 'Date Time Input',
          errorMessage: "Some Error",
          size: 'large',
          helperText: "This is a long optional helper text that won’t fit in a single row"

        }}
      />
      <DateTimeInput
        {...{
          type: 'time',
          placeholder: 'A Placeholder',
          label: 'Date Time Input',
          errorMessage: "Some Error",
          size: 'large',
          helperText: "This is a long optional helper text that won’t fit in a single row",
          isError: true
        }}
      />
    </div>
  );
};

export default App;
