import React from "react"
import { useParams, Link } from "react-router-dom";
import db from "./db/urls.json"
import "./css/master.css"

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
        <div style={{textAlign: "center"}}>
            <h1>Site wants to take you to <a href={ getDb(slug) }>{ getDb(slug) }</a></h1>
            <h1>It will auto redirect in 10 seconds</h1>
            <div style={{textAlign: "center"}}>
                <button className="button"><Link to="/" onClick={refresh} className="btn-link">Go Back</Link></button>
            </div>
        </div>
    )
}

export default Get