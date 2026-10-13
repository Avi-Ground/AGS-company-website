import { useEffect, useState } from 'react'
import './Stations.css'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import { useTranslation } from '../i18n'
import victoriaFallsImage from '../assets/victoria-falls-waterfall.png'
import harareAirportImage from '../assets/harare-airport.jpg'

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

const value = (entry) => entry || '—'

const ALL = 'all'

function StationInventory({ code, items, services = [] }) {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState(ALL)
  const key = code.toLowerCase()
  const city = t(`stations.cities.${key}`)
  const airport = t(`stations.airports.${key}`)
  const units = t('stations.units')
  const unitLabel = (unit) => units[unit] || unit
  const categories = [...new Set(items.map((item) => item.unit))]
  const filtered = items.filter((item) => {
    const matchesCategory = category === ALL || item.unit === category
    const searchable = [item.unit, units[item.unit], item.no, item.type, item.fleet, item.capacity, item.aircraft]
    const matchesQuery = searchable.join(' ').toLowerCase().includes(query.trim().toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <section className="station-inventory" aria-labelledby={`inventory-title-${code}`}>
      <div className={`station-airport-heading${code === 'VFA' ? ' station-airport-heading-victoria-falls' : ''}`}>
        {code === 'VFA' && <img className="station-heading-image" src={victoriaFallsImage} alt="" aria-hidden="true" />}
        <span className="station-location-mark" aria-hidden="true">{code}</span>
        <div>
          <span className="stations-country">{t('stations.stationLabel', { city: city.toUpperCase() })}</span>
          <h2 id={`inventory-title-${code}`}>{airport}</h2>
          <p>{t('stations.inventoryTitle')}</p>
          <div className="station-services">
            <span className="station-services-label">{t('stations.servicesOffered')}</span>
            <ul>{services.map((service) => <li key={service}>{t(service)}</li>)}</ul>
          </div>
        </div>
        <span className="inventory-total">{t('stations.assets', { count: items.length })}</span>
      </div>
      <div className="inventory-overview">
        <div className="inventory-summary">
          <div><strong>{items.length}</strong><span>{t('stations.totalAssets')}</span></div>
        </div>
        <button className="inventory-toggle" type="button" aria-expanded={isOpen} aria-controls={`inventory-list-${code}`} onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? t('stations.hideEquipment') : t('stations.showEquipment')} <span aria-hidden="true">{isOpen ? '↑' : '↓'}</span>
        </button>
      </div>
      {isOpen && <div id={`inventory-list-${code}`}>
        <div className="inventory-toolbar">
          <label className="inventory-search"><span className="sr-only">{t('stations.searchLabel', { city })}</span><span aria-hidden="true">⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t('stations.searchPlaceholder')} /></label>
          <label className="inventory-select"><span className="sr-only">{t('stations.filterLabel', { city })}</span><select value={category} onChange={(event) => setCategory(event.target.value)}><option value={ALL}>{t('stations.allEquipment')}</option>{categories.map((item) => <option key={item} value={item}>{unitLabel(item)}</option>)}</select></label>
        </div>
        <div className="inventory-table-wrap">
          <table className="inventory-table">
            <thead><tr><th>{t('stations.columns.unit')}</th><th>{t('stations.columns.no')}</th><th>{t('stations.columns.type')}</th><th>{t('stations.columns.fleet')}</th><th>{t('stations.columns.capacity')}</th><th>{t('stations.columns.aircraft')}</th></tr></thead>
            <tbody>{filtered.map((item, index) => <tr key={`${item.unit}-${item.no}-${item.fleet}-${index}`}>
              <td data-label={t('stations.columns.unit')}>{unitLabel(item.unit)}</td><td data-label={t('stations.columns.no')}>{value(item.no)}</td><td data-label={t('stations.columns.type')}>{value(item.type)}</td><td data-label={t('stations.columns.fleet')}>{value(item.fleet)}</td><td data-label={t('stations.columns.capacity')}>{value(item.capacity)}</td><td data-label={t('stations.columns.aircraft')}>{value(item.aircraft)}</td>
            </tr>)}
            {filtered.length === 0 && <tr><td className="inventory-empty" colSpan="6">{t('stations.empty')}</td></tr>}</tbody>
          </table>
        </div>
        <p className="inventory-footnote">{t('stations.footnote', { city })}</p>
      </div>}
    </section>
  )
}

export default function Stations() {
  const { t } = useTranslation()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="stations-page">
      <SiteHeader />
      <main className="stations-main">
        <section className="station-location station-location--photo">
          <img className="station-heading-image" src={harareAirportImage} alt="" aria-hidden="true" />
          <div className="station-location-mark" aria-hidden="true">HRE</div>
          <div><span className="stations-country">{t('stations.harareTag')}</span><h2>{t('stations.harareAirport')}</h2><p>{t('stations.harareBody')}</p></div>
          <a href="/contact-us">{t('stations.contactUs')} <span className="dir-arrow" aria-hidden="true">↗</span></a>
        </section>
        <StationInventory code="VFA" items={inventory} services={['stations.servicePassenger', 'stations.serviceAppearance']} />
        <StationInventory code="BUQ" items={bulawayoInventory} services={['stations.servicePassenger', 'stations.serviceAppearance']} />
      </main>
      <SiteFooter />
    </div>
  )
}
