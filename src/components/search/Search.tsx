import { useContext, useState } from "react";
import { DataContext, dataType } from "../../context/DataContext";

const getData = async (cep: string, setData: dataType) => {
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    setData(data);
}

export const Search = () => {

    const [cep, getCep] = useState('');
    const { setData } = useContext(DataContext);

    return (
        <div className="search">
            <input type="number" placeholder="00000000" onChange={e => getCep(e.target.value)} />
            <button
                onClick={e => {
                    if (cep.length === 8 && cep.match(/^[0-9]+$/)) getData(cep, setData);
                }}
            >Buscar</button>
        </div>
    )
}