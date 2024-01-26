import '../../App.css';

const StateBlock = ({ summ, setState, value }) => {

    return (
        <div className="label">
            <p className="label">{`Максимальное значение: ${value}`}</p>
            <p className="label">{`Сумма четных чисел: ${summ}`}</p>
            <input min="0" max="100" onChange={e => setState(Number(e.target.value))} step="1" type="range"/>
        </div>
    )
}

export default StateBlock