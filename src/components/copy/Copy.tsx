import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

export const Copy = () => {
    const { data } = useContext(DataContext);
    const [pressed, setPressed] = useState(false);
    const [informativeMessage, setInformativeMessage] = useState('');

    return (
        <button
            disabled={Object.keys(data).length > 1 ? false : true}
            onClick={async e => {
                try {

                    const filteredData = Object.entries(data).filter(entries => entries[1]).reduce((result, [key, value]) => {
                        result[key] = value;
                        return result
                    }, {} as Record<string, string>);

                    const formattedData = JSON.stringify(filteredData).replaceAll(/["{}]/g, '').replaceAll(',', '\r\n');
                    await navigator.clipboard.writeText(formattedData);
                    setInformativeMessage('Informações copiadas!');
                    
                } catch (error) {
                    setInformativeMessage('Cópia bloqueada');
                } finally {
                    setPressed(true);
                    setTimeout(() => setPressed(false), 1000);
                }
            }} >{pressed ? `${informativeMessage}` : 'Copiar'}</button>
    )
};