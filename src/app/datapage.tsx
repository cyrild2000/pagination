import { domainToASCII } from "url";

export default function DataPage({datatable, curPage, numPerPage}: {datatable:any[], curPage: number, numPerPage: number}) {

    const start: number = ((curPage - 1) * numPerPage);
    const end: number = start + numPerPage;
    const sa = datatable.slice(start, end);
    const listItems = sa.map((current) => <li key={current.id} className="list-group-item">{current.id} {current.title}</li>);
    
    return(
        <ul className="list-group">{listItems}</ul>
    )
}