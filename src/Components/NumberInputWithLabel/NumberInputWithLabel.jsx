import '../../App.css';

const NumberInputWithLabel = ({ label, setState, state }) => {
    return (
        <div className="label">
            <p className="label">{label}</p>
            <input onChange={e => setState(Number(e.target.value))} className="input" value={state} type="number"/>
        </div>
    )
}

export default NumberInputWithLabel