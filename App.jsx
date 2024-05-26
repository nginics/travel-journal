import Nav from "./components/Navbar.jsx"
import Location from "./components/Location.jsx"
import journalData from "./data.js"

export default function App() {
    
    const jornals = journalData.map(journal => {
        return <Location key={journal.id} title={journal.title} location={journal.location} googleMapsUrl={journal.googleMapsUrl} startDate={journal.startDate} endDate={journal.endDate} description={journal.description} imageUrl={journal.imageUrl}/>
    })
    
    return (
        <div className="blog-list">
            <Nav />
            <div className="blog--container">
                {jornals}
            </div>
        </div>
    )
}