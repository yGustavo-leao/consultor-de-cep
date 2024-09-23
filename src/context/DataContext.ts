import { createContext, Dispatch, SetStateAction } from "react";

export type dataProps = {
    [key: string]: string;
}

export type dataType = Dispatch<SetStateAction<dataProps>>;

export const DataContext = createContext<{
    data: dataProps,
    setData: dataType
}>({
    data: {},
    setData: () => {}
});