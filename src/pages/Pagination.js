import { useEffect, useState } from "react";
import "../assets/css/pagination.css";
import { createSearchParams, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import CommonPagination from "../components/CommonPagination";
import { Helmet } from "react-helmet-async";
import { fetchPageData } from "../apis/test";
import useApi from "../hooks/useApi";

function Pagination() {
    const [params, setParams] = useSearchParams();

    const [page, setPage] = useState(params.get('page')||'1');
    const [data, setData] = useState([]);

    // const navigate = useNavigate();
    // const { pathname } = useLocation;

    const { apiData: pageData, callApi: fetchPageDataApi } = useApi(fetchPageData, [page], false);

    useEffect(() => {
        // fetchPageDataApi();
        fetchPageDataApi([page]);
    }, [fetchPageDataApi, page]);

    // useEffect(() => {
    //     navigate({
    //         pathname: pathname,
    //         search: `?${createSearchParams({
    //             page: page,
    //         })}`,
    //     });
    // }, [navigate, pathname, page]);

    useEffect(() => {
        setParams({ page });
    }, [setParams, page]);

    useEffect(() => {
        if ( pageData ) {
            setData(pageData);
        }
    }, [pageData]);

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