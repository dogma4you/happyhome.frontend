import useFindHome from "@/store/useFindHome";
import { GoogleMap, Circle, Marker } from "@react-google-maps/api";
import {
  FIND_HOME_FILTER_TYPE,
  FIND_HOME_MEASUREMENT,
} from "@/utils/constants";
import { useCallback, useMemo, useRef, useState } from "react";
import useWindowSize from "@/hooks/useWindowSize";
import MapsContainer from "@/components/find-home/MapsContainer";
import { useRouter, useSearchParams } from "next/navigation";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const mobileContainerStyle = {
  width: "100%",
  height: "100%",
};

const GoogleMapComponent = ({ contracts }) => {
  const searchParams = useSearchParams();
  const newParams = new URLSearchParams(searchParams.toString());
  const {
    filters: { type, radiusSize, radiusMeasurement, mapsData },
    setFilter,
  } = useFindHome();

  const router = useRouter();

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
  }, []);

  const { width } = useWindowSize();

  const radiusMeasurementValue =
    radiusMeasurement === FIND_HOME_MEASUREMENT.KM ? 1 : 1.609;
  const radiusInMeters = radiusSize * 1000 * radiusMeasurementValue;

  const handleMapClick = (event) => {
    const clickedLat = event.latLng.lat();
    const clickedLng = event.latLng.lng();
    const currentZoom = map.getZoom();
    const center = map.getCenter();

    setFilter({
      mapsData: {
        lat: center.lat(),
        lng: center.lng(),
        mapZoom: currentZoom,
        circleLat: clickedLat,
        circleLng: clickedLng,
      },
    });
  };

  const mapContainerStyle =
    width > 1280 ? containerStyle : mobileContainerStyle;

  const prevCornersRef = useRef(null);

  const getMapCorners = useCallback(() => {
    if (!map || type === FIND_HOME_FILTER_TYPE.ALL_LISTINGS) return;

    const bounds = map.getBounds();
    if (!bounds) return;

    const northEast = bounds.getNorthEast();
    const southWest = bounds.getSouthWest();
    const currentZoom = map.getZoom();
    const center = map.getCenter();

    const topLeft = {
      lat: northEast.lat(),
      lng: southWest.lng(),
    };
    const topRight = {
      lat: northEast.lat(),
      lng: northEast.lng(),
    };
    const bottomLeft = {
      lat: southWest.lat(),
      lng: southWest.lng(),
    };
    const bottomRight = {
      lat: southWest.lat(),
      lng: northEast.lng(),
    };

    const newCorners = { topLeft, topRight, bottomLeft, bottomRight };
    if (JSON.stringify(prevCornersRef.current) !== JSON.stringify(newCorners)) {
      prevCornersRef.current = newCorners;
      newParams.delete("radius");
      newParams.delete("radiusVal");
      newParams.delete("zipCode");
      newParams.delete("radiusLat");
      newParams.delete("radiusLng");

      newParams.set("northLat", topLeft.lat);
      newParams.set("westLng", topLeft.lng);
      newParams.set("eastLng", topRight.lng);
      newParams.set("southLat", bottomRight.lat);
      newParams.set("northLng", topLeft.lng);
      newParams.set("southLng", bottomLeft.lng);
      newParams.set("eastLat", topRight.lat);
      newParams.set("westLat", bottomRight.lat);
      newParams.set("withinMapArea", true);
      newParams.set("mapZoom", currentZoom);
      newParams.set("centerLat", center.lat());
      newParams.set("centerLng", center.lng());

      router.push(`?${newParams.toString()}`);
    }
  }, [map, type]);

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  const mapsCenterData = useMemo(() => {
    return {
      lat: mapsData.lat,
      lng: mapsData.lng,
    };
  }, [mapsData.lat, mapsData.lng]);

  return (
    <MapsContainer isModal={width <= 1280}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={mapsCenterData}
        zoom={mapsData?.mapZoom || 4}
        onClick={handleMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onIdle={getMapCorners}
      >
        {type === FIND_HOME_FILTER_TYPE.ALL_LISTINGS &&
          mapsData.circleLat &&
          mapsData.circleLng && (
            <Circle
              center={{ lat: mapsData.circleLat, lng: mapsData.circleLng }}
              radius={radiusInMeters}
              options={{
                strokeColor: "#265EF7",
                strokeOpacity: 1,
                strokeWeight: 2,
                fillColor: "#265EF7",
                fillOpacity: 0.1,
              }}
            />
          )}

        {contracts.map((contract, index) => {
          const { address } = contract;
          return (
            <Marker
              key={index}
              position={{ lat: address.lat, lng: address.lng }}
            />
          );
        })}
      </GoogleMap>
    </MapsContainer>
  );
};

export default GoogleMapComponent;
