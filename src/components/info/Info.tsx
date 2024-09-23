import { useContext } from "react";
import { DataContext, dataProps } from "../../context/DataContext";

const renderInfo = (data: dataProps) => {

    if (data.erro)
        return <p style={{color: "red", fontStyle: "italic"}}>CEP inválido</p>
    else
        return Object.entries(data).map(entries =>
            entries[1] &&
            <p key={Math.random()} className="entries">
                <span className="key">{entries[0]}:</span>
                <span className="value">{entries[1]}</span>
            </p>
        )
}

export const Info = () => {

    const { data } = useContext(DataContext);

    return (
        <div className="info">{renderInfo(data)}</div>
    )
}