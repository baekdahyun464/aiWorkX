// src/data.ts
export type ColourOption = {
  label: string;
  value: string;
};

export type FlavourOption = {
  label: string;
  value: string;
};

export type GroupedOption = {
  label: string;
  options: (ColourOption | FlavourOption)[];
};

export const colourOptions: ColourOption[] = [
  { value: 'blue', label: 'Blue' },
  { value: 'red', label: 'Red' },
];

export const groupedOptions: GroupedOption[] = [
  {
    label: 'Colours',
    options: colourOptions,
  },
];
