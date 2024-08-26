interface Props {
    message: string;
}

const Alert = ({ message }: Props) => {
    return (
        <div className="absolute top-[10px] p-2 rounded border border-green-300 bg-green-200">
            {message}
        </div>
    );
};

export default Alert;
