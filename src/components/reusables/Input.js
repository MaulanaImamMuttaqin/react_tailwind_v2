const Input = ({ ...props }) => {

    return (
        <div className='mb-3'>
            <label className='block pl-5 mb-2 font-semibold text-cyan-900' htmlFor={props.title}>
                {props.title}  :
            </label>
            <input
                {...props.register(props.name)}
                id={props.title}
                className="px-5 mb-1 h-[50px] w-full rounded-full border border-gray-400 outline-cyan-700"
                placeholder={props.placeholder}
                type={props.type}
                onChange={props.onChange}
            />
            <small className='error'>{props.errors?.message}</small>
        </div>
    )
}

export default Input