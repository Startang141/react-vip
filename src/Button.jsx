const Button = (props) =>{
    const { variant="bg-black", text="Button"} = props;
    return(
        <button className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`} type="submit">
                 {text}
        </button>
    )
}

export default Button