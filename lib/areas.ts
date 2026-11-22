import { extraServiceAreas } from '@/lib/areas-extra'
import { areaContextById } from '@/lib/area-context'
import { CRAWL_SEED_SLUGS } from '@/lib/coverage'

export type ServiceArea = {
  id: string
  areaName: string
  zones: string
  zoneList: string[]
  description: string
  coordinates: { lat: number; lng: number }
  responseTime: string
  populationLabel?: string
  featured?: boolean
  /** Unique local context — reduces thin/duplicate page risk */
  corridor?: string
  housingProfile?: string
  landmark?: string
  commonIssues?: string[]
  localTip?: string
}

/** Linked service list for branch pages (crawlable internal links) */
export const DEFAULT_AREA_SERVICE_LINKS: Array<{ label: string; href: string }> = [
  { label: 'Elica Chimney Cleaning', href: '/services/chimney-general-cleaning' },
  { label: 'Elica Chimney Deep Cleaning', href: '/services/chimney-deep-cleaning' },
  { label: 'Elica Chimney Dismantle Cleaning', href: '/services/chimney-dismantle-cleaning' },
  { label: 'Chimney cleaning cost guide', href: '/guides/elica-chimney-cleaning-cost-bangalore' },
  { label: 'Elica Gas Hob Service', href: '/services/gas-hob-service' },
  { label: 'Elica Built-in Microwave Service', href: '/services/built-in-microwave-service' },
  { label: 'Elica Hob Cleaning', href: '/services/hob-cleaning' },
  { label: 'Elica Cooking Range Service', href: '/services/cooking-range-service' },
  { label: 'All Elica Services', href: '/services' },
]

export const serviceAreas: ServiceArea[] = [
  // Existing core 8 (featured)
  {
    id: '1',
    areaName: 'Whitefield',
    zones: 'Whitefield, ITPL, Hope Farm, Brookefield, Kundalahalli',
    zoneList: ['Whitefield', 'ITPL', 'Hope Farm', 'Brookefield', 'Kundalahalli'],
    description: "Elica Repair & Service in Whitefield covers ITPL, Hope Farm and Brookefield kitchens with 2–3 hour response.",
    coordinates: { lat: 12.9698, lng: 77.7499 },
    responseTime: '2-3 hours',
    populationLabel: '500K+',
    featured: true,
    corridor: 'East',
    housingProfile: 'IT corridor apartments and gated high-rises',
    landmark: 'ITPL',
    commonIssues: ['weak chimney suction in high-rises', 'oil drip after heavy cooking', 'gas hob flame service'],
    localTip: 'Share tower and flat number; many Whitefield societies need visitor OTP.',
  },
  {
    id: '2',
    areaName: 'Indiranagar',
    zones: 'Indiranagar, 100 Feet Road, Ulsoor, Domlur',
    zoneList: ['Indiranagar', '100 Feet Road', 'Ulsoor', 'Domlur'],
    description: "Elica Repair & Service in Indiranagar covers 100 Feet Road, Ulsoor and Domlur with 1.5–2.5 hour response.",
    coordinates: { lat: 12.9784, lng: 77.6408 },
    responseTime: '1.5-2.5 hours',
    populationLabel: '400K+',
    featured: true,
    corridor: 'Central-East',
    housingProfile: 'walk-up apartments and independent homes',
    landmark: '100 Feet Road',
    commonIssues: ['chimney filter clog from cafe-style cooking', 'uneven hob flame', 'built-in microwave faults'],
    localTip: 'Parking is tight on 100 Feet Road — mention a nearby cross for technician access.',
  },
  {
    id: '3',
    areaName: 'Electronic City',
    zones: 'Electronic City Phase 1 & 2, Hebbagodi, Bommasandra',
    zoneList: ['Electronic City Phase 1', 'Electronic City Phase 2', 'Hebbagodi', 'Bommasandra'],
    description: "Elica Repair & Service in Electronic City covers Phase 1, Phase 2 and Hebbagodi with 2–4 hour response.",
    coordinates: { lat: 12.8399, lng: 77.677 },
    responseTime: '2-4 hours',
    populationLabel: '300K+',
    featured: true,
    corridor: 'South',
    housingProfile: 'tech-park apartments and Phase 1–2 societies',
    landmark: 'Electronic City Phase 1',
    commonIssues: ['ducted chimney suction loss', 'oil collector overflow', 'hob igniter issues'],
    localTip: 'Phase 1 and Phase 2 gates differ — share the phase and society name.',
  },
  {
    id: '4',
    areaName: 'Malleshwaram',
    zones: 'Malleshwaram, Margosa Road, Sampige Road, Sankey Tank',
    zoneList: ['Malleshwaram', 'Margosa Road', 'Sampige Road', 'Sankey Tank'],
    description: "Elica Repair & Service in Malleshwaram covers Margosa Road, Sampige Road and Sankey Tank with 2–3 hour response.",
    coordinates: { lat: 13.0035, lng: 77.564 },
    responseTime: '2-3 hours',
    populationLabel: '350K+',
    featured: true,
    corridor: 'North',
    housingProfile: 'older independent homes and compact apartments',
    landmark: 'Margosa Road',
    commonIssues: ['noisy chimney fan in older kitchens', 'hob burner blockage', 'range hood grease build-up'],
    localTip: 'Narrow inner roads — share a Sampige or Margosa landmark for easier access.',
  },
  {
    id: '5',
    areaName: 'JP Nagar',
    zones: 'JP Nagar, Jayanagar border, Banashankari link roads',
    zoneList: ['JP Nagar', 'Puttenahalli', 'Sarakki', 'Hillside'],
    description: 'Elica Repair & Service in JP Nagar covers Puttenahalli, Sarakki and Hillside with 2–3 hour response.',
    coordinates: { lat: 12.9063, lng: 77.5857 },
    responseTime: '2-3 hours',
    populationLabel: '380K+',
    featured: true,
    corridor: 'South',
    housingProfile: 'family apartments and independent houses',
    landmark: 'Puttenahalli',
    commonIssues: ['chimney deep cleaning', 'low hob flame', 'microwave turntable faults'],
    localTip: 'Weekend mornings fill quickly around Jayanagar border — book a weekday slot if you can.',
  },
  {
    id: '6',
    areaName: 'Bellandur',
    zones: 'Bellandur, Kadubeesanahalli, Devarabisanahalli, EcoSpace',
    zoneList: ['Bellandur', 'Kadubeesanahalli', 'Devarabisanahalli', 'EcoSpace'],
    description: 'Elica Repair & Service in Bellandur covers Kadubeesanahalli, Devarabisanahalli and EcoSpace with 2–3 hour response.',
    coordinates: { lat: 12.9304, lng: 77.6784 },
    responseTime: '2-3 hours',
    populationLabel: '420K+',
    featured: true,
    corridor: 'East',
    housingProfile: 'ORR tech-park apartments and high-rises',
    landmark: 'EcoSpace',
    commonIssues: ['weak suction after monsoon humidity', 'oil drip in stacked kitchens', 'gas hob service'],
    localTip: 'ORR traffic peaks 6–8pm — morning slots reach EcoSpace and Kadubeesanahalli faster.',
  },
  {
    id: '7',
    areaName: 'Yeshwanthpur',
    zones: 'Yeshwanthpur, Mathikere, Goraguntepalya, Tumkur Road',
    zoneList: ['Yeshwanthpur', 'Mathikere', 'Goraguntepalya', 'Tumkur Road'],
    description: 'Elica Repair & Service in Yeshwanthpur covers Mathikere, Goraguntepalya and Tumkur Road with 2–4 hour response.',
    coordinates: { lat: 13.028, lng: 77.54 },
    responseTime: '2-4 hours',
    populationLabel: '360K+',
    featured: true,
    corridor: 'North-West',
    housingProfile: 'mixed industrial-adjacent homes and apartments',
    landmark: 'Tumkur Road',
    commonIssues: ['chimney motor dust load', 'hob igniter faults', 'cooking range thermostat issues'],
    localTip: 'Mention the nearest Metro or Tumkur Road junction so the technician can avoid inner-lane delays.',
  },
  {
    id: '8',
    areaName: 'Bannerghatta Road',
    zones: 'Bannerghatta Road, Arekere, Hulimavu, Bilekahalli',
    zoneList: ['Bannerghatta Road', 'Arekere', 'Hulimavu', 'Bilekahalli'],
    description: 'Elica Repair & Service on Bannerghatta Road covers Arekere, Hulimavu and Bilekahalli with 2–3 hour response.',
    coordinates: { lat: 12.889, lng: 77.597 },
    responseTime: '2-3 hours',
    populationLabel: '330K+',
    featured: true,
    corridor: 'South',
    housingProfile: 'apartment belts along Bannerghatta Road',
    landmark: 'Arekere',
    commonIssues: ['chimney oil drip', 'uneven hob burn', 'built-in microwave repair'],
    localTip: 'Hospital and mall traffic is heavy — share a cross like Hulimavu or Bilekahalli.',
  },

  // +50 popular Bangalore areas
  {
    id: '9',
    areaName: 'Koramangala',
    zones: 'Koramangala 1st–8th Block, Sony World Junction, Forum Mall side',
    zoneList: ['Koramangala 4th Block', 'Koramangala 5th Block', 'Koramangala 6th Block', 'Sony Signal'],
    description: 'High-demand Elica repair zone with rapid same-day options for apartments and homes.',
    coordinates: { lat: 12.9352, lng: 77.6245 },
    responseTime: '1.5-2.5 hours',
  },
  {
    id: '10',
    areaName: 'HSR Layout',
    zones: 'HSR Layout Sectors 1–7, 27th Main, Agara',
    zoneList: ['HSR Sector 2', 'HSR Sector 4', 'HSR Sector 6', 'Agara'],
    description: 'Popular residential locality with strong same-day chimney and hob service demand.',
    coordinates: { lat: 12.9116, lng: 77.6473 },
    responseTime: '2-3 hours',
  },
  {
    id: '11',
    areaName: 'Marathahalli',
    zones: 'Marathahalli Bridge, Kundalahalli Gate, Outer Ring Road',
    zoneList: ['Marathahalli', 'Kundalahalli Gate', 'ORR Marathahalli'],
    description: 'East Bangalore coverage connecting Whitefield and Bellandur service routes.',
    coordinates: { lat: 12.9591, lng: 77.6974 },
    responseTime: '2-3 hours',
  },
  {
    id: '12',
    areaName: 'Hebbal',
    zones: 'Hebbal Flyover, Esteem Mall side, Kempapura',
    zoneList: ['Hebbal', 'Kempapura', 'Sahakar Nagar edge'],
    description: 'North Bangalore express coverage near Manyata and Hebbal junction.',
    coordinates: { lat: 13.0358, lng: 77.597 },
    responseTime: '2-3 hours',
  },
  {
    id: '13',
    areaName: 'Jayanagar',
    zones: 'Jayanagar 4th Block, 9th Block, South End Circle',
    zoneList: ['Jayanagar 4th Block', 'Jayanagar 9th Block', 'South End Circle'],
    description: 'Established south Bangalore locality with dependable appliance repair turnaround.',
    coordinates: { lat: 12.9308, lng: 77.5838 },
    responseTime: '2-3 hours',
  },
  {
    id: '14',
    areaName: 'Banashankari',
    zones: 'Banashankari 1st–3rd Stage, Kathriguppe, Girinagar edge',
    zoneList: ['Banashankari', 'Kathriguppe', 'Girinagar'],
    description: 'South-west Bangalore coverage for family homes and apartment kitchens.',
    coordinates: { lat: 12.925, lng: 77.546 },
    responseTime: '2-4 hours',
  },
  {
    id: '15',
    areaName: 'Sarjapur Road',
    zones: 'Sarjapur Road, Carmelaram, Doddakannelli, Wipro Corporate area',
    zoneList: ['Sarjapur Road', 'Carmelaram', 'Doddakannelli'],
    description: 'Fast-growing corridor with strong demand for chimney and hob installations.',
    coordinates: { lat: 12.910, lng: 77.685 },
    responseTime: '2-4 hours',
  },
  {
    id: '16',
    areaName: 'BTM Layout',
    zones: 'BTM 1st & 2nd Stage, Madiwala, Silk Board approach',
    zoneList: ['BTM 1st Stage', 'BTM 2nd Stage', 'Madiwala'],
    description: 'Central-south Bangalore service with quick access from Koramangala and HSR.',
    coordinates: { lat: 12.9166, lng: 77.6101 },
    responseTime: '2-3 hours',
  },
  {
    id: '17',
    areaName: 'Domlur',
    zones: 'Domlur Layout, Old Airport Road, Embassy Golf Links side',
    zoneList: ['Domlur', 'Old Airport Road', 'EGL side'],
    description: 'Compact central coverage ideal for quick same-day appliance repairs.',
    coordinates: { lat: 12.960, lng: 77.641 },
    responseTime: '1.5-2.5 hours',
  },
  {
    id: '18',
    areaName: 'Frazer Town',
    zones: 'Frazer Town, Pulakeshinagar, Coles Park side',
    zoneList: ['Frazer Town', 'Pulakeshinagar', 'Coles Park'],
    description: 'Central-east Bangalore homes covered with certified Elica technicians.',
    coordinates: { lat: 12.998, lng: 77.614 },
    responseTime: '2-3 hours',
  },
  {
    id: '19',
    areaName: 'Ulsoor',
    zones: 'Ulsoor Lake, Kensington Road, Halasuru',
    zoneList: ['Ulsoor', 'Halasuru', 'Kensington Road'],
    description: 'Central Bangalore lake-side locality with prompt booking confirmation.',
    coordinates: { lat: 12.981, lng: 77.618 },
    responseTime: '2-3 hours',
  },
  {
    id: '20',
    areaName: 'Rajajinagar',
    zones: 'Rajajinagar, Mahalakshmi Layout edge, ESI Hospital side',
    zoneList: ['Rajajinagar', 'Mahalakshmi Layout', 'Bashyam Circle'],
    description: 'West Bangalore residential coverage with warranty-backed kitchen repairs.',
    coordinates: { lat: 12.991, lng: 77.552 },
    responseTime: '2-3 hours',
  },
  {
    id: '21',
    areaName: 'Basavanagudi',
    zones: 'Basavanagudi, Gandhi Bazaar, National College side',
    zoneList: ['Basavanagudi', 'Gandhi Bazaar', 'National College'],
    description: 'Traditional south Bangalore locality with trusted home appliance servicing.',
    coordinates: { lat: 12.942, lng: 77.566 },
    responseTime: '2-3 hours',
  },
  {
    id: '22',
    areaName: 'Yelahanka',
    zones: 'Yelahanka New Town, Yelahanka Old Town, Doddaballapur Road',
    zoneList: ['Yelahanka New Town', 'Yelahanka Old Town', 'Doddaballapur Road'],
    description: 'North Bangalore expansion zone with growing apartment service demand.',
    coordinates: { lat: 13.1007, lng: 77.5963 },
    responseTime: '2-4 hours',
  },
  {
    id: '23',
    areaName: 'RT Nagar',
    zones: 'RT Nagar, Ganganagar, CBI Road',
    zoneList: ['RT Nagar', 'Ganganagar', 'CBI Road'],
    description: 'North-central Bangalore coverage close to Hebbal and Manyata routes.',
    coordinates: { lat: 13.021, lng: 77.595 },
    responseTime: '2-3 hours',
  },
  {
    id: '24',
    areaName: 'Sahakarnagar',
    zones: 'Sahakarnagar, Kodigehalli, Byatarayanapura edge',
    zoneList: ['Sahakarnagar', 'Kodigehalli', 'Byatarayanapura'],
    description: 'North Bangalore residential cluster with reliable same-day booking options.',
    coordinates: { lat: 13.063, lng: 77.588 },
    responseTime: '2-3 hours',
  },
  {
    id: '25',
    areaName: 'Peenya',
    zones: 'Peenya Industrial Area, Peenya 2nd Stage, Jalahalli edge',
    zoneList: ['Peenya', 'Peenya 2nd Stage', 'Jalahalli'],
    description: 'North-west Bangalore coverage for homes around the Peenya industrial belt.',
    coordinates: { lat: 13.028, lng: 77.514 },
    responseTime: '2-4 hours',
  },
  {
    id: '26',
    areaName: 'Vijayanagar',
    zones: 'Vijayanagar, Chord Road, Marenahalli',
    zoneList: ['Vijayanagar', 'Chord Road', 'Marenahalli'],
    description: 'West Bangalore locality with strong demand for hob and chimney maintenance.',
    coordinates: { lat: 12.971, lng: 77.532 },
    responseTime: '2-3 hours',
  },
  {
    id: '27',
    areaName: 'Kengeri',
    zones: 'Kengeri Satellite Town, Mysore Road, Kengeri Upanagara',
    zoneList: ['Kengeri', 'Kengeri Satellite Town', 'Mysore Road'],
    description: 'South-west Bangalore coverage along Mysore Road residential corridors.',
    coordinates: { lat: 12.899, lng: 77.482 },
    responseTime: '3-4 hours',
  },
  {
    id: '28',
    areaName: 'RR Nagar',
    zones: 'Rajarajeshwari Nagar, Ideal Homes, BHEL Layout',
    zoneList: ['RR Nagar', 'Ideal Homes', 'BHEL Layout'],
    description: 'Popular west Bangalore township with apartment-focused appliance service.',
    coordinates: { lat: 12.924, lng: 77.519 },
    responseTime: '2-4 hours',
  },
  {
    id: '29',
    areaName: 'Nagarbhavi',
    zones: 'Nagarbhavi Circle, 12th Block, Sir M Visvesvaraya Layout',
    zoneList: ['Nagarbhavi', '12th Block', 'Sir MV Layout'],
    description: 'West Bangalore residential coverage with dependable booking confirmation.',
    coordinates: { lat: 12.961, lng: 77.509 },
    responseTime: '2-4 hours',
  },
  {
    id: '30',
    areaName: 'Mysore Road',
    zones: 'Mysore Road, Nayandahalli, Chandra Layout edge',
    zoneList: ['Mysore Road', 'Nayandahalli', 'Chandra Layout'],
    description: 'Corridor service covering homes and societies along Mysore Road.',
    coordinates: { lat: 12.945, lng: 77.526 },
    responseTime: '2-4 hours',
  },
  {
    id: '31',
    areaName: 'Kanakapura Road',
    zones: 'Kanakapura Road, Konanakunte, ISRO Layout edge',
    zoneList: ['Kanakapura Road', 'Konanakunte', 'ISRO Layout'],
    description: 'South Bangalore arterial coverage for chimneys, hobs, and microwaves.',
    coordinates: { lat: 12.885, lng: 77.566 },
    responseTime: '2-4 hours',
  },
  {
    id: '32',
    areaName: 'Arekere',
    zones: 'Arekere Gate, Bannerghatta Main Road, AECS Layout edge',
    zoneList: ['Arekere', 'Arekere Gate', 'AECS Layout'],
    description: 'South Bangalore pocket with quick access from Bannerghatta Road routes.',
    coordinates: { lat: 12.887, lng: 77.597 },
    responseTime: '2-3 hours',
  },
  {
    id: '33',
    areaName: 'Hulimavu',
    zones: 'Hulimavu Gate, Meenakshi Temple side, Nobo Nagar',
    zoneList: ['Hulimavu', 'Meenakshi Temple side', 'Nobo Nagar'],
    description: 'South Bangalore residential coverage with warranty-backed appliance repairs.',
    coordinates: { lat: 12.874, lng: 77.601 },
    responseTime: '2-3 hours',
  },
  {
    id: '34',
    areaName: 'Begur',
    zones: 'Begur Road, Begur Lake side, Akshayanagar edge',
    zoneList: ['Begur', 'Begur Road', 'Akshayanagar'],
    description: 'South Bangalore growth corridor with rising apartment service requests.',
    coordinates: { lat: 12.877, lng: 77.632 },
    responseTime: '2-4 hours',
  },
  {
    id: '35',
    areaName: 'Bommanahalli',
    zones: 'Bommanahalli, Hongasandra, Roopena Agrahara',
    zoneList: ['Bommanahalli', 'Hongasandra', 'Roopena Agrahara'],
    description: 'South-east Bangalore coverage near Hosur Road and Electronic City approaches.',
    coordinates: { lat: 12.899, lng: 77.623 },
    responseTime: '2-3 hours',
  },
  {
    id: '36',
    areaName: 'Kudlu Gate',
    zones: 'Kudlu Gate, Kudlu, Singasandra edge',
    zoneList: ['Kudlu Gate', 'Kudlu', 'Singasandra'],
    description: 'Hosur Road corridor service for apartments and independent homes.',
    coordinates: { lat: 12.889, lng: 77.648 },
    responseTime: '2-4 hours',
  },
  {
    id: '37',
    areaName: 'Singasandra',
    zones: 'Singasandra, AECS Layout Singasandra, Hosur Road',
    zoneList: ['Singasandra', 'AECS Layout', 'Hosur Road'],
    description: 'South Bangalore tech-residential mix with reliable same-day slots.',
    coordinates: { lat: 12.875, lng: 77.652 },
    responseTime: '2-4 hours',
  },
  {
    id: '38',
    areaName: 'Hoodi',
    zones: 'Hoodi Junction, ITPL Main Road, Graphite India side',
    zoneList: ['Hoodi', 'ITPL Main Road', 'Graphite India'],
    description: 'East Bangalore coverage linking Whitefield and KR Puram service belts.',
    coordinates: { lat: 12.992, lng: 77.715 },
    responseTime: '2-3 hours',
  },
  {
    id: '39',
    areaName: 'KR Puram',
    zones: 'KR Puram, Old Madras Road, Tin Factory',
    zoneList: ['KR Puram', 'Old Madras Road', 'Tin Factory'],
    description: 'East Bangalore junction coverage with strong hob and chimney repair demand.',
    coordinates: { lat: 13.007, lng: 77.696 },
    responseTime: '2-3 hours',
  },
  {
    id: '40',
    areaName: 'Ramamurthy Nagar',
    zones: 'Ramamurthy Nagar, T C Palya, Horamavu edge',
    zoneList: ['Ramamurthy Nagar', 'TC Palya', 'Horamavu'],
    description: 'North-east Bangalore residential service with prompt technician dispatch.',
    coordinates: { lat: 13.022, lng: 77.678 },
    responseTime: '2-4 hours',
  },
  {
    id: '41',
    areaName: 'CV Raman Nagar',
    zones: 'CV Raman Nagar, Kaggadasapura, Malleshpalya',
    zoneList: ['CV Raman Nagar', 'Kaggadasapura', 'Malleshpalya'],
    description: 'East-central Bangalore coverage near DRDO and residential layouts.',
    coordinates: { lat: 12.985, lng: 77.664 },
    responseTime: '2-3 hours',
  },
  {
    id: '42',
    areaName: 'Old Airport Road',
    zones: 'Old Airport Road, Murugeshpalya, Wind Tunnel Road',
    zoneList: ['Old Airport Road', 'Murugeshpalya', 'Wind Tunnel Road'],
    description: 'Central-east corridor with quick access from Domlur and Indiranagar.',
    coordinates: { lat: 12.958, lng: 77.649 },
    responseTime: '2-3 hours',
  },
  {
    id: '43',
    areaName: 'Brookefield',
    zones: 'Brookefield, Kundalahalli, AECS Layout Brookefield',
    zoneList: ['Brookefield', 'Kundalahalli', 'AECS Layout'],
    description: 'Whitefield-adjacent locality with high apartment kitchen service volume.',
    coordinates: { lat: 12.967, lng: 77.717 },
    responseTime: '2-3 hours',
  },
  {
    id: '44',
    areaName: 'Varthur',
    zones: 'Varthur, Varthur Kodi, Gunjur edge',
    zoneList: ['Varthur', 'Varthur Kodi', 'Gunjur'],
    description: 'East Bangalore lake-side growth area with rising repair bookings.',
    coordinates: { lat: 12.939, lng: 77.741 },
    responseTime: '2-4 hours',
  },
  {
    id: '45',
    areaName: 'Kadubeesanahalli',
    zones: 'Kadubeesanahalli, New Horizon College side, ORR',
    zoneList: ['Kadubeesanahalli', 'ORR', 'New Horizon side'],
    description: 'ORR tech-park neighborhood with strong same-day service preference.',
    coordinates: { lat: 12.939, lng: 77.695 },
    responseTime: '2-3 hours',
  },
  {
    id: '46',
    areaName: 'Manyata Tech Park',
    zones: 'Manyata Embassy Business Park, Nagawara, Thanisandra edge',
    zoneList: ['Manyata Tech Park', 'Nagawara', 'Thanisandra'],
    description: 'North Bangalore tech hub coverage for nearby apartments and gated communities.',
    coordinates: { lat: 13.047, lng: 77.622 },
    responseTime: '2-3 hours',
  },
  {
    id: '47',
    areaName: 'Thanisandra',
    zones: 'Thanisandra Main Road, Ashwath Nagar, Bharathnagar',
    zoneList: ['Thanisandra', 'Ashwath Nagar', 'Bharathnagar'],
    description: 'North Bangalore residential stretch with growing chimney service demand.',
    coordinates: { lat: 13.062, lng: 77.632 },
    responseTime: '2-4 hours',
  },
  {
    id: '48',
    areaName: 'Jakkur',
    zones: 'Jakkur, Yelahanka New Town edge, Allalasandra',
    zoneList: ['Jakkur', 'Allalasandra', 'Yelahanka edge'],
    description: 'North Bangalore locality near Jakkur aerodrome with reliable dispatch.',
    coordinates: { lat: 13.078, lng: 77.606 },
    responseTime: '2-4 hours',
  },
  {
    id: '49',
    areaName: 'Kammanahalli',
    zones: 'Kammanahalli, Kalyan Nagar edge, HRBR Layout side',
    zoneList: ['Kammanahalli', 'Kalyan Nagar', 'HRBR Layout'],
    description: 'North-east Bangalore popular zone for quick hob and microwave repairs.',
    coordinates: { lat: 13.022, lng: 77.638 },
    responseTime: '2-3 hours',
  },
  {
    id: '50',
    areaName: 'Kalyan Nagar',
    zones: 'Kalyan Nagar, HRBR Layout, 3rd Block',
    zoneList: ['Kalyan Nagar', 'HRBR Layout', '3rd Block'],
    description: 'North-east Bangalore apartment belt with strong same-day booking interest.',
    coordinates: { lat: 13.024, lng: 77.643 },
    responseTime: '2-3 hours',
  },
  {
    id: '51',
    areaName: 'Banaswadi',
    zones: 'Banaswadi, HRBR 2nd Block, Dodda Banaswadi',
    zoneList: ['Banaswadi', 'HRBR 2nd Block', 'Dodda Banaswadi'],
    description: 'East-north Bangalore coverage connected to KR Puram and Kalyan Nagar.',
    coordinates: { lat: 13.014, lng: 77.652 },
    responseTime: '2-3 hours',
  },
  {
    id: '52',
    areaName: 'Horamavu',
    zones: 'Horamavu, Horamavu Agara, Kalkere edge',
    zoneList: ['Horamavu', 'Horamavu Agara', 'Kalkere'],
    description: 'North-east Bangalore expanding residential area with prompt technician visits.',
    coordinates: { lat: 13.032, lng: 77.660 },
    responseTime: '2-4 hours',
  },
  {
    id: '53',
    areaName: 'Mahadevapura',
    zones: 'Mahadevapura, Garudacharpalya, Phoenix Marketcity side',
    zoneList: ['Mahadevapura', 'Garudacharpalya', 'Phoenix side'],
    description: 'East Bangalore ORR locality with high appliance installation and repair volume.',
    coordinates: { lat: 12.991, lng: 77.688 },
    responseTime: '2-3 hours',
  },
  {
    id: '54',
    areaName: 'Uttarahalli',
    zones: 'Uttarahalli, Chikkallasandra, Subramanyapura',
    zoneList: ['Uttarahalli', 'Chikkallasandra', 'Subramanyapura'],
    description: 'South-west Bangalore coverage near Kanakapura and Banashankari routes.',
    coordinates: { lat: 12.907, lng: 77.546 },
    responseTime: '2-4 hours',
  },
  {
    id: '55',
    areaName: 'Kumaraswamy Layout',
    zones: 'Kumaraswamy Layout, ISRO Layout edge, Dayananda Sagar side',
    zoneList: ['Kumaraswamy Layout', 'ISRO Layout', 'DSCE side'],
    description: 'South Bangalore residential layout with dependable kitchen appliance service.',
    coordinates: { lat: 12.908, lng: 77.561 },
    responseTime: '2-3 hours',
  },
  {
    id: '56',
    areaName: 'Padmanabhanagar',
    zones: 'Padmanabhanagar, Gowdanapalya, Chikkakallasandra edge',
    zoneList: ['Padmanabhanagar', 'Gowdanapalya', 'Chikkakallasandra'],
    description: 'South Bangalore family locality with warranty-backed Elica repairs.',
    coordinates: { lat: 12.918, lng: 77.559 },
    responseTime: '2-3 hours',
  },
  {
    id: '57',
    areaName: 'Chandra Layout',
    zones: 'Chandra Layout, Vijayanagar edge, Magadi Road link',
    zoneList: ['Chandra Layout', 'Vijayanagar edge', 'Magadi Road'],
    description: 'West Bangalore coverage close to Vijayanagar and Mysore Road corridors.',
    coordinates: { lat: 12.960, lng: 77.528 },
    responseTime: '2-3 hours',
  },
  {
    id: '58',
    areaName: 'Jalahalli',
    zones: 'Jalahalli East & West, Gangamma Circle, MEI Layout',
    zoneList: ['Jalahalli East', 'Jalahalli West', 'Gangamma Circle'],
    description: 'North-west Bangalore service near Peenya and Yeshwanthpur routes.',
    coordinates: { lat: 13.049, lng: 77.543 },
    responseTime: '2-4 hours',
  },
  ...extraServiceAreas,
]

export const DEFAULT_AREA_SERVICES = DEFAULT_AREA_SERVICE_LINKS.map((s) => s.label)

/** Location-page heading. Business name stays siteConfig.name. */
export function getBranchName(areaName: string): string {
  return `Elica chimney service in ${areaName}`
}

export function getAreaLandmark(area: ServiceArea): string {
  return area.landmark || area.zoneList[0] || area.areaName
}

export function getAreaHousing(area: ServiceArea): string {
  return area.housingProfile || `${getAreaCorridor(area).toLowerCase()} Bangalore homes and apartments`
}

export function getAllAreas(): ServiceArea[] {
  return serviceAreas.map((area) => {
    const local = areaContextById[area.id]
    return local ? { ...area, ...local } : area
  })
}

export function getCrawlSeedAreas(): ServiceArea[] {
  const bySlug = new Map(getAllAreas().map((area) => [getAreaSlug(area.areaName), area]))
  return CRAWL_SEED_SLUGS.map((slug) => bySlug.get(slug)).filter(
    (area): area is ServiceArea => Boolean(area)
  )
}

export function getAreaIntro(area: ServiceArea): string {
  const landmark = getAreaLandmark(area)
  const housing = getAreaHousing(area)
  const corridor = getAreaCorridor(area)
  const zones = area.zoneList.slice(0, 4).join(', ')
  const nearby = getNearbyAreaLinks(area, 3)
    .map((item) => item.areaName)
    .join(', ')
  const issues = (area.commonIssues || []).slice(0, 2).join(' and ')
  const issueLine = issues
    ? ` Frequent local jobs include ${issues}.`
    : ''
  return `Elica Repair & Service covers ${area.areaName} in ${corridor} Bangalore, including ${zones}. Work is centred around ${landmark} and mainly serves ${housing}. Typical response is ${area.responseTime}${nearby ? `, with neighbouring coverage toward ${nearby}` : ''}.${issueLine}`
}

export function getFeaturedAreas(limit = 8): ServiceArea[] {
  const all = getAllAreas()
  const featured = all.filter((area) => area.featured)
  return (featured.length ? featured : all).slice(0, limit)
}

/** SEO-friendly URL slug from area name, e.g. "JP Nagar" → "jp-nagar" */
export function getAreaSlug(areaName: string): string {
  return areaName
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-')
}

export function getAreaPath(area: Pick<ServiceArea, 'areaName'>): string {
  return `/areas/${getAreaSlug(area.areaName)}`
}

export function getAreaById(id: string): ServiceArea | undefined {
  return getAllAreas().find((area) => area.id === id)
}

export function getAreaBySlug(slug: string): ServiceArea | undefined {
  const normalized = slug.trim().toLowerCase()
  return getAllAreas().find((area) => getAreaSlug(area.areaName) === normalized)
}

/** Resolve by slug first, then legacy numeric id (for redirects) */
export function getAreaBySlugOrId(slugOrId: string): ServiceArea | undefined {
  return getAreaBySlug(slugOrId) || getAreaById(slugOrId)
}

export function getAreaOptions(): Array<{ id: string; name: string }> {
  return serviceAreas.map((area) => ({
    id: area.id,
    name: getBranchName(area.areaName),
  }))
}

export function getAreaLabelsMap(): Record<string, string> {
  return Object.fromEntries(
    serviceAreas.map((area) => [area.id, getBranchName(area.areaName)])
  )
}

export function getAreaFaqs(area: ServiceArea) {
  const nearby = area.zoneList.slice(0, 3).join(', ')
  const landmark = getAreaLandmark(area)
  const housing = getAreaHousing(area)
  const issueA = area.commonIssues?.[0] || 'chimney suction problems'
  const issueB = area.commonIssues?.[1] || 'gas hob flame issues'
  const corridor = getAreaCorridor(area)

  return [
    {
      question: `I searched Elica service near me. Do you cover ${area.areaName}?`,
      answer: `Yes. If you searched Elica chimney service near me from ${area.areaName}, this page is the published doorstep coverage around ${landmark}. There is no invented ${area.areaName} manufacturer shopfront on this site.`,
    },
    {
      question: `Do you provide Elica repair in ${area.areaName}?`,
      answer: `Yes. Elica Repair & Service covers chimney, hob, microwave, and cooking-range repair across ${area.areaName} and nearby zones including ${nearby}. Work focuses on ${housing} around ${landmark}.`,
    },
    {
      question: `What is the response time in ${area.areaName}?`,
      answer: `Typical response time around ${area.areaName} (${corridor} Bangalore) is ${area.responseTime}, with same-day service depending on booking slot availability and traffic near ${landmark}.`,
    },
    {
      question: `Which kitchen problems are common in ${area.areaName}?`,
      answer: `Homes near ${nearby} often report ${issueA} and ${issueB}. We also service Elica chimneys (cleaning, suction, oil drip, fan noise), gas hobs, cooktops, built-in microwaves, and cooking ranges.`,
    },
    {
      question: `How do I book a technician in ${area.areaName}?`,
      answer: `Use the Get Free Quote form, select your service, and share your phone and pincode. Mention ${area.areaName}${area.localTip ? `. Tip: ${area.localTip}` : ' if needed'}. We confirm within about 2 hours.`,
    },
    {
      question: `Is ${area.areaName} covered for same-day Elica chimney cleaning?`,
      answer: `Same-day chimney cleaning is often available in ${area.areaName} when slots remain open. Response is usually ${area.responseTime}. Book early for weekend mornings around ${landmark}.`,
    },
  ]
}

export function getAreaLocalNotes(area: ServiceArea): string[] {
  const landmark = getAreaLandmark(area)
  const housing = getAreaHousing(area)
  const corridor = getAreaCorridor(area)
  const issues =
    area.commonIssues && area.commonIssues.length > 0
      ? area.commonIssues
      : ['chimney deep cleaning', 'weak suction', 'gas hob flame service']

  return [
    `Coverage includes ${area.zones}, with local access oriented around ${landmark}.`,
    `${corridor} Bangalore service here mainly reaches ${housing} in and around ${area.areaName}.`,
    `Typical technician response in ${area.areaName}: ${area.responseTime}.`,
    `Frequent local requests include ${issues.join(', ')}.`,
    area.localTip
      ? `Local booking tip for ${area.areaName}: ${area.localTip}`
      : `Share your pincode when you request a quote so we can assign the nearest available technician for ${area.areaName}.`,
    area.description,
  ]
}

export function getNearbyAreaLinks(area: ServiceArea, limit = 6): ServiceArea[] {
  const others = getAllAreas().filter((a) => a.id !== area.id)
  const corridor = getAreaCorridor(area)
  const sameCorridor = others.filter((a) => getAreaCorridor(a) === corridor)
  const pool = sameCorridor.length >= limit ? sameCorridor : others
  return [...pool]
    .sort((a, b) => {
      const da =
        Math.abs(a.coordinates.lat - area.coordinates.lat) +
        Math.abs(a.coordinates.lng - area.coordinates.lng)
      const db =
        Math.abs(b.coordinates.lat - area.coordinates.lat) +
        Math.abs(b.coordinates.lng - area.coordinates.lng)
      return da - db
    })
    .slice(0, limit)
}

/** Infer a corridor label for listing/grouping when not explicitly set */
export function getAreaCorridor(area: ServiceArea): string {
  if (area.corridor) return area.corridor

  const { lat, lng } = area.coordinates
  if (lat >= 13.02 && lng >= 77.62) return 'North-East'
  if (lat >= 13.02 && lng < 77.55) return 'North-West'
  if (lat >= 13.02) return 'North'
  if (lat <= 12.9 && lng >= 77.68) return 'South-East'
  if (lat <= 12.9 && lng <= 77.55) return 'South-West'
  if (lat <= 12.9) return 'South'
  if (lng >= 77.65) return 'East'
  if (lng <= 77.55) return 'West'
  return 'Central'
}

const CORRIDOR_ORDER = [
  'Central',
  'Central-North',
  'Central-South',
  'Central-East',
  'North',
  'North-East',
  'North-West',
  'East',
  'West',
  'South',
  'South-East',
  'South-West',
]

export function getAreasGroupedByCorridor(): Array<{
  corridor: string
  areas: ServiceArea[]
}> {
  const groups = new Map<string, ServiceArea[]>()
  for (const area of getAllAreas()) {
    const key = getAreaCorridor(area)
    const list = groups.get(key) || []
    list.push(area)
    groups.set(key, list)
  }

  return [...groups.entries()]
    .sort(([a], [b]) => {
      const ai = CORRIDOR_ORDER.indexOf(a)
      const bi = CORRIDOR_ORDER.indexOf(b)
      const ao = ai === -1 ? 99 : ai
      const bo = bi === -1 ? 99 : bi
      return ao - bo || a.localeCompare(b)
    })
    .map(([corridor, areas]) => ({
      corridor,
      areas: [...areas].sort((x, y) => x.areaName.localeCompare(y.areaName)),
    }))
}
