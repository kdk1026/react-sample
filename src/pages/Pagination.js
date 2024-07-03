import { useEffect, useState } from "react";
import "../assets/css/pagination.css";
import axios from "axios";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import CommonPagination from "../components/CommonPagination";

function Pagination() {
    const [params] = useSearchParams();

    const [page, setPage] = useState(params.get('page')||'1');
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    const { pathname } = useLocation;

    useEffect(() => {
        navigate({
            pathname: pathname,
            search: `?${createSearchParams({
                page: page,
            })}`,
        });

        const fetchData = async () => {
            const res = await axios.get(`${process.env.REACT_APP_API_URL}/page?currentPage=${page}`);
            setData(res.data);
        }
        fetchData();
    }, [navigate, pathname, page]);

    const handlePage = (e, currentPage, type) => {
        e.preventDefault();

        if ( data.paging.firstPage === 1 && type === 'first' ) {
            return false;
        }

        if ( data.paging.firstPage === 1 && type === 'prev') {
            return false;
        }

        if ( data.paging.lastPage === data.paging.totalPage && type === 'next' ) {
            return false;
        }

        if ( data.paging.lastPage === data.paging.totalPage && type === 'last' ) {
            return false;
        }

        setPage(currentPage);
    };

    return (
        <>
            <CommonPagination
                data={data}
                handlePage={handlePage}
            />
        </>
    )
}

export default Pagination;