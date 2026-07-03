interface CustomDatePickerProps {
  selectedDate: string;
  setSelectedDate: (date: string) => void;
}

function CustomDatePicker({
  selectedDate,
  setSelectedDate,
}: CustomDatePickerProps) {
  return (
    <div className="w-full">
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
        className="form-input"
      />
    </div>
  );
}

export default CustomDatePicker;
