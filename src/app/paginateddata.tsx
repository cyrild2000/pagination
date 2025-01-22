'use client'
import { useEffect, useState, ChangeEventHandler, ChangeEvent } from "react";
import DataPage from "./datapage";

export default function PaginatedData() {

    const [datatable, setdatatable] = useState<any[]>([]);
    const [numPages, setnumPages] = useState(1);
    const [curPage, setCurPage] = useState(1);
    const [numPerPage, setnumPerPage] = useState(5);

    useEffect(() => {
        const getData = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setdatatable(data);
            Math.round(data.length % numPerPage) === 0 ? setnumPages(Math.round(data.length / numPerPage)) : setnumPages(Math.round(data.length / numPerPage) + 1);
            
        }
        getData();        
    }, []);

    function navigateNext(){
        curPage >= numPages ? setCurPage(numPages) : setCurPage(curPage + 1);
    }

    function navigatePrev(){
        curPage <= 1 ? setCurPage(1) : setCurPage(curPage - 1);
    }

    const handleChange : ChangeEventHandler<HTMLInputElement> = (event) =>{
        event.preventDefault();
        setCurPage(1);
        setnumPerPage(parseInt(event.target.value));
        Math.round(datatable.length % parseInt(event.target.value)) === 0 ? setnumPages(Math.round(datatable.length / parseInt(event.target.value))) : setnumPages(Math.round(datatable.length / parseInt(event.target.value)) + 1);
    }


    return(
        <>
        <div className="container">
        <h1>Nombre de r&eacute;sultats : {datatable.length}</h1>
        
        <ul className="nav justify-content-end">
            <li><p>&nbsp;&nbsp;Page : {curPage} sur {numPages}&nbsp;&nbsp;</p></li>
            <li><button className="btn btn-primary" onClick={() => setCurPage(1)}>Premier</button>&nbsp;</li>
            <li><button className="btn btn-primary" onClick={() => navigateNext()}>Suivant</button>&nbsp;</li>
            <li><button className="btn btn-primary" onClick={() => navigatePrev()}>Pr&eacute;c&eacute;dent</button>&nbsp;</li>
            <li><button className="btn btn-primary" onClick={() => setCurPage(numPages)}>Dernier</button>&nbsp;</li>
            <li>
                <select  value={numPerPage} onChange={handleChange} className="form-control">
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
            </li>
            
        </ul>
        <DataPage datatable={datatable} curPage={curPage} numPerPage={numPerPage} />
        </div>
        </>
    )
}