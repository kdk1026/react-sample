import { useEffect, useRef } from "react";

function Map() {
    const mapRef = useRef(null);

    const addr = "서울특별시 서초구 남부 순환로 337가길 11-10";

    useEffect(() => {
        const { naver } = window;

        if ( mapRef.current && naver ) {
            const mapOptions = {
                center: new naver.maps.LatLng(37.3595704, 127.105399),
                zoom: 17
            };

            const map = new naver.maps.Map(mapRef.current, mapOptions);
            
            naver.maps.Service.geocode({
                query: addr
            }, function (status, response) {
                if (status === naver.maps.Service.Status.ERROR) {
                    return alert('Something wrong!');
                }

                const item = response.v2.addresses[0];
                const point = new naver.maps.Point(item.x, item.y);

                map.setCenter(point);

                new naver.maps.Marker({
                    position: new naver.maps.LatLng(item.y, item.x),
                    map: map
                });
            });
        }
    }, []);

    return (
        <>
            <div ref={mapRef} style={{width: '1024px', height: '500px'}}></div>
        </>
    )
}

export default Map;