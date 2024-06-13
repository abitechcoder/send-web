const ContactFormInput = ({placeholder, type ="text"}: {placeholder: string, type?: string}) => {
  return (
    <input type={type} placeholder={placeholder} className="px-4 py-3 w-full bg-[#f7f7f7]"/>
  )
}

export default ContactFormInput