import React from 'react'

import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'


export default function FooterMap(){
        return(
            <>
               <div className="w-full mt-7 lg:mt-0">
                 <h1 className='capitalize mb-5 font-ibm text-white font-extrabold text-2xl'>address</h1>

                 <div className="h-[200px] w-full rounded-md overflow-hidden">
                    <MapContainer style={{width: "100%", minHeight: "100%"}} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>
                 </div>
                </div> 
            </>
        )
}