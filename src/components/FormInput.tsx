const FormInput = ({placeholder, type ="text", style="px-4 py-3 w-full bg-[#F9FBFC] border border-[#E3E3E3]"}: {placeholder: string, type?: string, style?: string}) => {
  return (
    <input type={type} placeholder={placeholder} className={style}/>
  )
}

export default FormInput