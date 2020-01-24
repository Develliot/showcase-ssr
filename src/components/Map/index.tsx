import React, { useContext } from 'react';
import GoogleMapReact, { Coords } from 'google-map-react';

import { UserContext } from 'src/contexts/UserContext';

import { MapWrapper, MarkerImage, MarkerWrapper } from './styles';

type MarkerProps = {
    lng: number;
    lat: number;
    imageSrc: string;
};
const Marker = (props: MarkerProps) => {
    return (
        <MarkerWrapper>
            <MarkerImage src={props.imageSrc} alt='user image' />
        </MarkerWrapper>
    );
};

export const Map = () => {
    const [state] = useContext(UserContext);
    if (!state || !state.users) {
        return null;
    }
    const selectedUser = state.users[state.selectedPosition];

    if (!selectedUser) {
        return null;
    }
    const newCenter: Coords = {
        lat: selectedUser.location.coordinates.latitude,
        lng: selectedUser.location.coordinates.longitude,
    };

    return (
        <MapWrapper id='map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: 'AIzaSyDVo8UxjEajjGjTZdNFP2jxTjpalE0s_Uk',
                }}
                center={newCenter}
                defaultZoom={7}
            >
                {state.users.length &&
                    state.users.map(user => (
                        <Marker
                            key={user.login.uuid}
                            lat={user.location.coordinates.latitude}
                            lng={user.location.coordinates.longitude}
                            imageSrc={user.picture.large}
                        />
                    ))}
            </GoogleMapReact>
        </MapWrapper>
    );
};

export default Map;
