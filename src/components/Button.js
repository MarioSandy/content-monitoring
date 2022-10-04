import Spinner from "./Spinner";

const Button = ({children, size = 'md', block = false, loading = false, disabled = false, onClick}) => {
    return (
        <button className={`
                    rounded-lg py-2 px-4 bg-sky-400 text-white font-medium
                    text-${size}
                    disabled:bg-slate-100 disabled:text-slate-500
                    focus:ring-4 focus:ring-sky-300
                    ${block ? 'w-full' : ''}
                `}
                disabled={disabled || loading}
                onClick={onClick}>
            {
                loading ? (
                    <Spinner />
                ) : children
            }
        </button>
    )
}

export default Button;