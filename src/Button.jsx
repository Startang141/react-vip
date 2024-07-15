const Button = (props) =>{
    return(
        <button className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`} type="submit">
                 {props.text}
        </button>
    )
}

export default Button