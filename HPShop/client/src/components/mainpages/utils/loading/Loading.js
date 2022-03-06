import React from 'react'
import './loading.css'
import RingLoader from "react-spinners/RingLoader";


function Loading() {
    return (
        <div className="load-page">
            <div className="loader">
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div className="clim"> <RingLoader color={"#F5A623"} size={200} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Loading
