import { useEffect, useMemo, useState } from 'react'
import './Stations.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import victoriaFallsImage from '../assets/victoria-falls-waterfall.png'

const inventory = [
  { unit: 'Belt loaders', no: '1', type: 'TLD NBL', manufacturer: 'TLD', fleet: 'BL02', year: '2007', status: 'Serviceable', capacity: '7m / 250kgs', aircraft: 'A320 family, B737, E190' },
  { unit: 'Belt loaders', no: '2', type: 'TLD', manufacturer: 'TLD', fleet: 'BL05', year: '2008', status: 'Serviceable', capacity: '7m / 250kgs', aircraft: 'A320 family, B737, E190' },
  { unit: 'Belt loaders', no: '3', type: 'TLD', manufacturer: 'TLD', fleet: 'BL06', year: '2007', status: 'Serviceable', capacity: '7m / 250kgs', aircraft: 'A320 family, B737, E190' },
  { unit: 'Tractors', no: '1', type: 'MF 375 2WD', manufacturer: 'Massey Ferguson', fleet: 'TR12', year: '2012', status: 'Serviceable' },
  { unit: 'Baggage tow tugs', no: '1', type: 'TLD', manufacturer: 'Toyota', fleet: 'BTR05', year: '2010', status: 'Serviceable' },
  { unit: 'Baggage tow tugs', no: '2', type: 'TLD JET 16', manufacturer: 'TLD', fleet: 'BTR02', year: '2012', status: 'Serviceable' },
  { unit: 'Ground power', no: '1', type: 'TLD', manufacturer: 'TLD', fleet: 'GPU 02', year: '2008', status: 'Serviceable' },
  { unit: 'Airstart', no: '1', type: 'TLD', manufacturer: 'TLD', fleet: 'ASU 02', year: '2007', status: 'Unserviceable' },
  { unit: 'Higloader', no: '1', type: 'Trappel', manufacturer: 'Trappel', fleet: 'L06', year: '2013', status: 'Serviceable' },
  { unit: 'Potable water truck', no: '1', type: 'Truck', manufacturer: 'Truck', fleet: 'PW 02', status: 'Serviceable' },
  { unit: 'Lavatory truck', no: '1', type: 'KIA truck', manufacturer: 'KIA', fleet: 'LT 01', status: 'Serviceable' },
  { unit: 'Passenger step', no: '1', type: 'KIA', manufacturer: 'KIA', fleet: 'MCS02', status: 'Serviceable' },
  { unit: 'Passenger step', no: '2', type: 'ABX5X0', manufacturer: 'TLD', fleet: 'MCS 06', status: 'Serviceable' },
  { unit: 'Passenger step', no: '3', type: 'DENGE', manufacturer: 'DENGE', fleet: 'MCS 09', status: 'Serviceable' },
  { unit: 'Passenger step', no: '4', type: 'KIA', manufacturer: 'KIA', fleet: 'MCS 11', status: 'Serviceable' },
  { unit: 'Push back tug', no: '1', type: 'TMX15015', manufacturer: 'TLD', fleet: 'TT05', year: '2008', status: 'Unserviceable' },
  { unit: 'Push back tug', no: '2', type: 'TLD', manufacturer: 'TLD', fleet: 'TT04', year: '2008', status: 'Serviceable' },
  { unit: 'Passenger aid unit', no: '1', type: 'Volvo', manufacturer: 'Volvo', fleet: 'PAU02', status: 'Serviceable' },
  { unit: 'Towbar', no: '1', type: 'Antroma', manufacturer: 'Antroma', aircraft: 'ERJ145', status: 'Serviceable' },
  { unit: 'Towbar', no: '2', type: 'Antroma', manufacturer: 'Antroma', aircraft: 'E190/170', status: 'Serviceable' },
  { unit: 'Towbar', no: '3', type: 'Antroma', manufacturer: 'Antroma', aircraft: 'A220', status: 'Unserviceable' },
  { unit: 'Towbar', no: '4', aircraft: 'A320', status: 'Unreliable' },
  { unit: 'Towbar', no: '5', aircraft: 'B737', status: 'Unserviceable' },
  ...['BW04', 'BW05', 'BW06', 'BW11', 'BW12', 'BW13', 'BW15', 'BW20', 'VBW01', 'VBW02', 'VBW03', 'VBW04', 'VBW05', 'VBW07', 'VBW08', 'VBW09'].map((fleet, i) => ({ unit: 'Baggage wagons', no: String(i + 1), fleet, status: 'Serviceable' })),
  ...['CD13', 'CD14', 'CD17', 'CD21'].map((fleet) => ({ unit: 'Container dollies', fleet, status: 'Unserviceable' })),
  ...['WCH-04', 'WCH-06', 'WCH-13', 'WCH-15', 'WCH-20', 'WCH-22', 'WCH-25', 'WCH-29', 'WCH-40'].map((fleet, i) => ({ unit: 'Wheelchairs', no: String(i + 1), fleet, status: 'Serviceable' })),
  { unit: 'Wheelchairs', no: '10', fleet: 'WCH-16', status: 'Unserviceable' },
  { unit: 'Washington chair', no: '1', fleet: 'SLEPPER CHAIR02-', status: 'Serviceable' },
  { unit: 'Washington chair', no: '2', fleet: 'SLEPPER CHAIR 01', status: 'Serviceable' },
]

const bulawayoInventory = [
  { unit: 'Belt loaders', no: '1', type: 'Tigger', manufacturer: 'Tigger', fleet: 'BL01', year: '2002', status: 'Serviceable', capacity: '7m / 250kgs', aircraft: 'A320 family, B737, E190' },
  { unit: 'Belt loaders', no: '2', type: 'TLD', manufacturer: 'TLD', fleet: 'BL08', year: '2008', status: 'Unserviceable', capacity: '7m / 250kgs', aircraft: 'A320 family, B737, E190' },
  { unit: 'Belt loaders', no: '3', type: 'EINSA', manufacturer: 'ENSA', fleet: 'BL03', year: '2007', status: 'Serviceable', capacity: '7m / 250kgs', aircraft: 'A320 family, B737, E190' },
  { unit: 'Tractors', no: '1', type: 'MF 375 ZWD', manufacturer: 'Massey Ferguson', fleet: 'TR07', year: '2009', status: 'Serviceable' },
  { unit: 'Baggage tow tugs', no: '1', type: 'TLD', manufacturer: 'TLD', fleet: 'BTR01', year: '2009', status: 'Serviceable' },
  { unit: 'Ground power', no: '1', type: 'TLD', manufacturer: 'TLD', fleet: 'GPU 01', year: '2008', status: 'Serviceable' },
  { unit: 'Airstart', no: '1', type: 'TLD', manufacturer: 'TLD', fleet: 'ASU 01', year: '1998', status: 'Serviceable' },
  { unit: 'Lavatory cart', no: '1', fleet: 'LSU01', year: '2024', status: 'Unserviceable' },
  { unit: 'Towbar', no: '1', type: 'TBR', fleet: 'TB17', year: '2024', capacity: 'ERJ145', aircraft: 'ERJ145' },
  ...[
    ['1', 'BW01'], ['2', 'BW02'], ['3', 'BW03'], ['4', 'BW07'],
    ['5', 'BW16'], ['7', 'BW17'], ['6', 'BW18'],
  ].map(([no, fleet]) => ({ unit: 'Baggage wagons', no, type: '-', manufacturer: '-', fleet, year: '-', status: 'Serviceable' })),
  ...[
    ['1', 'WCH-01', 'Serviceable'], ['2', 'WCH-02', 'Unserviceable'],
    ['3', 'WCH-03', 'Unserviceable'], ['4', 'WCH-10', 'Serviceable'],
    ['5', 'WCH-11', 'Serviceable'], ['6', 'WCH-18', 'Unserviceable'],
    ['7', 'WCH-28', 'Serviceable'], ['8', 'WCH-30', 'Serviceable'],
    ['9', 'WCH-35', 'Serviceable'], ['10', 'WCH-36', 'Serviceable'],
  ].map(([no, fleet, status]) => ({ unit: 'Wheelchairs', no, type: '-', manufacturer: '-', fleet, year: '-', status })),
  { unit: 'Washington chair', no: '1', type: '-', manufacturer: '-', fleet: 'SLEPPER CHAIR02', year: '2023', status: 'Serviceable' },
  { unit: 'Washington chair', no: '2', type: '-', manufacturer: '-', fleet: 'SLEPPER CHAIR 01', year: '2023', status: 'Serviceable' },
]

const value = (entry) => entry || 'â€”'

function StationInventory({ city, airport, code, items, services = [] }) {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All equipment')
  const categories = ['All equipment', ...new Set(items.map((item) => item.unit))]
  const filtered = useMemo(() => items.filter((item) => {
    const matchesCategory = category === 'All equipment' || item.unit === category
    const searchable = [item.unit, item.no, item.type, item.fleet, item.capacity, item.aircraft]
    const matchesQuery = searchable.join(' ').toLowerCase().includes(query.trim().toLowerCase())
    return matchesCategory && matchesQuery
  }), [query, category, items])

  return (
    <section className="station-inventory" aria-labelledby={`inventory-title-${code}`}>
      <div className={`station-airport-heading${code === 'VFA' ? ' station-airport-heading-victoria-falls' : ''}`}>
        {code === 'VFA' && <img className="station-heading-image" src={victoriaFallsImage} alt="" aria-hidden="true" />}
        <span className="station-location-mark" aria-hidden="true">{code}</span>
        <div>
          <span className="stations-country">{city.toUpperCase()} STATION</span>
          <h2 id={`inventory-title-${code}`}>{airport}</h2>
          <p>Ground support equipment inventory</p>
          <div className="station-services">
            <span className="station-services-label">Services offered</span>
            <ul>{services.map((service) => <li key={service}>{service}</li>)}</ul>
          </div>
        </div>
        <span className="inventory-total">{items.length} assets</span>
      </div>
      <div className="inventory-overview">
        <div className="inventory-summary">
          <div><strong>{items.length}</strong><span>Total assets</span></div>
        </div>
        <button className="inventory-toggle" type="button" aria-expanded={isOpen} aria-controls={`inventory-list-${code}`} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? 'Hide equipment' : 'View equipment'} <span aria-hidden="true">{isOpen ? '↑' : '↓'}</span>
        </button>
      </div>
      {isOpen && <div id={`inventory-list-${code}`}>
        <div className="inventory-toolbar">
          <label className="inventory-search"><span className="sr-only">Search {city} inventory</span><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search equipment, fleet number…" /></label>
          <label className="inventory-select"><span className="sr-only">Filter {city} inventory by category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
        </div>
        <div className="inventory-table-wrap">
          <table className="inventory-table">
            <thead><tr><th>Unit</th><th>No.</th><th>Equipment type</th><th>Fleet number</th><th>Capacity</th><th>Aircraft types</th></tr></thead>
            <tbody>{filtered.map((item, index) => <tr key={`${item.unit}-${item.no}-${item.fleet}-${index}`}>
              <td data-label="Unit">{item.unit}</td><td data-label="No.">{value(item.no)}</td><td data-label="Equipment type">{value(item.type)}</td><td data-label="Fleet number">{value(item.fleet)}</td><td data-label="Capacity">{value(item.capacity)}</td><td data-label="Aircraft types">{value(item.aircraft)}</td>
            </tr>)}
            {filtered.length === 0 && <tr><td className="inventory-empty" colSpan="6">No equipment matches these filters.</td></tr>}</tbody>
          </table>
        </div>
        <p className="inventory-footnote">{city} station inventory. A dash indicates information not supplied.</p>
      </div>}
    </section>
  )
}

export default function Stations() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="stations-page">
      <header className="stations-hero">
        <SiteHeader />
        <div className="stations-hero-content">
          <span className="stations-eyebrow">AGS LOCATIONS · ZIMBABWE</span>
          <h1>Our Stations</h1>
          <p>Ground handling teams and equipment supporting safe, reliable airport operations.</p>
        </div>
      </header>
      <main className="stations-main">
        <section className="station-location">
          <div className="station-location-mark" aria-hidden="true">HRE</div>
          <div><span className="stations-country">HARARE STATION</span><h2>Harare International Airport</h2><p>AGS supports passenger and cargo operations at Zimbabwe’s main international gateway.</p></div>
          <a href="/contact-us">Contact us <span aria-hidden="true">↗</span></a>
        </section>
        <StationInventory city="Victoria Falls" airport="Victoria Falls International Airport" code="VFA" items={inventory} services={['Passenger Handling', 'Aircraft Appearance Services']} />
        <StationInventory city="Bulawayo" airport="Joshua Mqabuko Nkomo International Airport" code="BUQ" items={bulawayoInventory} services={['Passenger Handling', 'Aircraft Appearance Services']} />
      </main>
      <SiteFooter />
    </div>
  )
}
