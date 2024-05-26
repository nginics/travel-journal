import React from 'react'

export default function Location(props) {
    return (
        <div className="blog--card">
            <section className="card--left">
                <img src={props.imageUrl}/>
            </section>
            <section className="card--right">
                <div className="location">
                    <img src="../images/pointer.svg" className="location--pointer"/>
                    <div className="location--country">{props.location}</div>
                    <a href={props.googleMapsUrl} className="location--map">View on Google Maps</a>
                </div>
                <h1 className="location--title">{props.title}</h1>
                <h4 className="location--date">{props.startDate} - {props.endDate}</h4>
                <p className="location--desc">{props.description}</p>
            </section>
        </div>
    )
}