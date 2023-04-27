import { MapProps } from "../../@types/Type";

// Define the component as a function that takes the props as an argument
function Map<T>({ data, renderItem }: MapProps<T>): JSX.Element {
    /*
    * • Use the `map` method to iterate over the `data` array and render 
    * the items using the `renderItem` function
    */
    return <>{data.map((element, index) => renderItem(element, index))}</>;
}

/*
*   • Export the component and its props interface for use in other parts 
*   of the application
*/
export default Map;
