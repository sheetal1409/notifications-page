import React from "react"

export function Notifications(props) {
    function getStyle(data) {
        return {
            backgroundColor: data.flag === true ? "white" : "#F5F5F5"
        }
    }

    let displayData = props.notifications.map((notification, idx) => <div className="w-full cursor-pointer" key={idx}><div className="rounded-md border-none flex mt-2 p-2 mb-2 justify-start items-center"
        style={getStyle(notification)} key={idx} onClick={(e) => props.handleClick(notification)}>
        <img className="w-1/12 h-12 max-[500px]:w-2/12" src={notification.image} alt="userimage" />
        <div className="flex flex-col ml-4 text-xs">

            <p><span className="font-bold inline mr-1">{notification.name}</span>
                {notification.description}</p>

            <h2 className="text-gray-500">{notification.time}</h2>

        </div>
    </div>

        {notification.message && <p className="text-xs ml-12 border-2 border-gray-100 p-4 rounded-md">{notification.message}</p>}
    </div>)

    return (
        <div>{displayData}</div>

    )
}