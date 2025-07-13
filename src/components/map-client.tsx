"use client";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import { useState } from "react";

type MapClientProps = {
    mapTitle: string;
    lat: number;
    lng: number;
};

export default function MapClient({
    mapTitle,
    lat,
    lng,
}: MapClientProps) {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyDve2Q3YMrvW7Iv0LbfZMS-JoCTtPkIfMY",
    });
    const [showInfo, setShowInfo] = useState(true);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <div>
            <GoogleMap
                zoom={14}
                center={{
                    lat,
                    lng,
                }}
                mapContainerClassName="w-full h-96"
            >
                <Marker
                    position={{
                        lat,
                        lng,
                    }}
                    onClick={() => setShowInfo(true)}
                />
                {showInfo && (
                    <InfoWindow
                        position={{
                            lat: lat + 0.0025,
                            lng,
                        }}
                        onCloseClick={() => setShowInfo(false)}
                    >
                        <div className="flex flex-col gap-2">
                            <h2 className="font-bold">
                                {mapTitle}
                            </h2>
                            <p>
                                런투유출장마사지에서 편안한 힐링을 경험하세요.
                            </p>
                            <a
                                href="https://maps.google.com/?q=36.81377410888672,127.14159393310547"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                구글맵에서 보기
                            </a>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
}
