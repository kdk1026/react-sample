import instance from "../utils/http";

export const fetchPageData = (currentPage) => {
    return instance.get(`/page`, {
        params: {
            currentPage
        }
    });
};