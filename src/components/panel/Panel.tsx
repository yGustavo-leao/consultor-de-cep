import { Copy } from "../copy/Copy"
import { Info } from "../info/Info"
import { Search } from "../search/Search"

export const Panel = () => {
    return (
        <div className="panel">
            <h1>Consultar CEP</h1>
            <Search />
            <Info />
            <Copy />
        </div>
    )
}