export type Input = {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
};
