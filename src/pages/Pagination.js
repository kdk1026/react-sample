import { useEffect, useState } from "react";
import "../assets/css/pagination.css";
import axios from "axios";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import CommonPagination from "../components/CommonPagination";
import { Helmet } from "react-helmet-async";

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
            try {
                const res = await axios.get(`${process.env.REACT_APP_API_URL}/page?currentPage=${page}`);
                setData(res.data);
            } catch (error) {
                console.error(error);
            }
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

    const title = process.env.REACT_APP_TITLE;

    return (
        <>
            <Helmet>
                <title>{title} | Pagination</title>
            </Helmet>
            <CommonPagination
                data={data}
                handlePage={handlePage}
            />
        </>
    )
}

export default Pagination;