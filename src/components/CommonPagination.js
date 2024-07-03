import { Link } from "react-router-dom";
import "../assets/css/pagination.css";

function CommonPagination(props) {
    const { data, handlePage } = props;

    const rendering  = () => {
        const result = [];

        if ( data.paging ) {
            for (let i = data.paging.firstPage; i <= data.paging.lastPage; i++) {
                if ( i === data.paging.currentPage ) {
                    // eslint-disable-next-line
                    result.push( <a href="javascript:void(0);" key={i} className="active">{i}</a> );
                } else {
                    // eslint-disable-next-line
                    result.push( <a href="javascript:void(0);" key={i} onClick={(e) => {handlePage(e, i)}}>{i}</a> );
                }
            }
        }

        return result;
    };

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