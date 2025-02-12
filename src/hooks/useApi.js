
import { useState, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
/**
 * @example
 * const { apiData: a23CodeListData, callApi: fetchA23CodeList } = useApi(getCodeList, ['HMPG', 'HC037', lang], false);
 * const { apiData: a26CodeListData, callApi: fetchA26CodeList } = useApi(getCodeList, ['HMPG', 'HC038', lang], false);
 * const { apiData: userInfoData, callApi: fetchUserInfo } = useApi(getUserInfo, [], false);
 * const { apiData: usageWriteData, callApi: registUsageWriteApi } = useApi(registUsageWrite, [], false);
 * 
 * useEffect(() => {
 *  fetchA23CodeList();
 *  fetchA26CodeList();
 *  
 *  if ( isLogin ) {
 *      fetchUserInfo();
 *  }
 * }, []);
 * 
 * const handleSubmit = async (e) => {
 *  e.preventDefault();
 * 
 *  ...
 * 
 *  sendData(formData);
 * };
 * 
 * const sendData = async (formData) => {
 *  const res = await registUsageWriteApi([formData]);
 *  console.log(res);
 * };
 * ===============================================
 * const { apiData: notiListData, callApi: fetchNotiList, apiPaging } = useApi(getNotiList, [storeCd, lang, 'HC01601', pageIndex, notiCd, q], false);
 * 
 * useEffect(() => {
 *  fetchNotiList();
 * }, []);
 * 
 * useEffect(() => {
 *  fetchNotiList();
 * 
 *  if ( q ) {
 *      setSrchText(q);
 *  }
 * }, [fetchNotiList, pageIndex, notiCd, q]);
 * 
 * @param {*} apiFunction 
 * @param {*} initialParams
 * @param {undefined|null|blank|boolean} callOnInit
 * @returns 
 */
const useApi = (apiFunction, initialParams, callOnInit = true) => {
    const navigate = useNavigate();

    const [apiParams, setApiParams] = useState(initialParams || []);
    const [apiData, setApiData] = useState(null);
    const [apiPaging, setApiPaging] = useState(null);
    const [prevParams, setPrevParams] = useState(null);

    const callApi = useCallback(async (params = apiParams) => {
        if ( params[0] instanceof FormData ) {
            //
        } else {
            if ( JSON.stringify(params) === JSON.stringify(prevParams) ) {
                return;
            }
            setPrevParams(params);
        }

        try {
            const res = await apiFunction(...params);

            if ( res.data.list ) {
                setApiData(res.data.list);
            } else if ( res.data.data ) {
                setApiData(res.data.data);
            } else {
                setApiData(res.data);
            }
            
            if ( res.data.paging ) {
                setApiPaging(res.data.paging);
            }

            return res.data;
        } catch (error) {
            if (error.status === 999) {
                navigate("/error-network");
            }
            console.log(error);
            throw error;
        }
    }, [apiFunction, apiParams, prevParams, navigate]);

    useEffect(() => {
        if ( JSON.stringify(apiParams) !== JSON.stringify(initialParams) ) {
            setApiParams(initialParams);
        }
    }, [apiParams, initialParams]);

    useEffect(() => {
        if ( callOnInit)  {
            callApi(apiParams);
        }
    }, [callOnInit, callApi, apiParams]);

    return {
        apiData, apiPaging,
        callApi
    };
};
export default useApi;
