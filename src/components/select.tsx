import Select from 'react-select';
import './select.scss';

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  defaultValue?: Option;
  onChange?: (selected: Option | null) => void;
}

export default function CustomSelect({
  options,
  defaultValue,
  onChange,
}: CustomSelectProps) {
  return (
    <Select
      options={options}
      // menuIsOpen={true}
      defaultValue={defaultValue || options[0]}
      onChange={onChange}
      isSearchable={false}
    />
  );
}
