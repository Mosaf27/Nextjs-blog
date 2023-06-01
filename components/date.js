import { parseISO, format } from "date-fns"; //date-fns npm package

export default function Date({dateString}){

    const date = parseISO(dateString);   //parse date in ISO format

    return <time dateTime={dateString}>{format(date, "LLLL do, yyyy")}</time> //format date see docs 
}