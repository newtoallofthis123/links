import React from "react"
import { useParams, Link } from "react-router-dom";
import db from "./db/urls.json"
import "./css/master.css"
import "./css/get.css"

const Get = () => {
    const { slug } = useParams()
    const getDb = (slug) => {
        return db[slug]
    }
    setTimeout(() => {
        window.location = getDb(slug)
    }, 10000)
    const refresh = () => {
        window.location.href = "/"
    }
    return (
        <div className="get-div">
            <h1>Site wants to take you to</h1>
            <a href={ getDb(slug) }>{ getDb(slug) }</a>
            <h1>It will redirect in 10 secs</h1>
            <div style={{textAlign: "center"}}>
                <button className="button"><Link to="/" onClick={refresh} className="btn-link">Go Back</Link></button>
            </div>
        </div>
    )
}

export default Get