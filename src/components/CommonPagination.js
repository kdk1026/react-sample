import { Link } from "react-router-dom";
import "../assets/css/pagination.css";

function CommonPagination(props) {
    const { data, rendering, handlePage } = props;

    return (
        <>
            <div className="pagination">
                <Link to={{javascript:void(0)}} onClick={(e) => {handlePage(e, 1, 'first')}}>&laquo;</Link>
                <Link to={{javascript:void(0)}} onClick={(e) => {handlePage(e, data.paging.prevBlockPage, 'prev')}}>&#60;</Link>
                {
                    rendering()
                }
                <Link to={{javascript:void(0)}} onClick={(e) => {handlePage(e, data.paging.nextBlockPage, 'next')}}>&#62;</Link>
                <Link to={{javascript:void(0)}} onClick={(e) => {handlePage(e, data.paging.totalPage, 'last')}}>&raquo;</Link>
            </div>
        </>
    )
}

export default CommonPagination;