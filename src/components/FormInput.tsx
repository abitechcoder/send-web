const FormInput = ({
  placeholder,
  type = "text",
  value = "",
  style = "px-4 py-3 w-full bg-[#F9FBFC] border border-[#E3E3E3]",
  disabled = false,
  ...props
}: {
  placeholder: string;
  type?: string;
  style?: string;
  value?: string;
  disabled?: boolean;
  onChange?: any;
  required?: boolean;
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={style}
      value={value}
      disabled={disabled}
      {...props}
    />
  );
};

export default FormInput;
