/** Unique public geography for core areas that lacked local fields (ids 9–58). */
export type AreaLocalContext = {
  corridor: string
  housingProfile: string
  landmark: string
  commonIssues: string[]
  localTip: string
  description: string
}

export const areaContextById: Record<string, AreaLocalContext> = {
  '9': {
    corridor: 'Central-South',
    housingProfile: 'block apartments and converted homes around the 4th–6th blocks',
    landmark: 'Sony Signal',
    commonIssues: ['chimney suction drop in compact kitchens', 'oil drip on 100ft-adjacent homes', 'hob igniter faults'],
    localTip: 'Mention the block number (4th–8th) so the technician can avoid Forum Mall traffic.',
    description:
      'Elica Repair & Service in Koramangala covers 4th, 5th and 6th Block plus Sony Signal. Typical response is 1.5–2.5 hours for chimney, hob and microwave work in this central-south belt.',
  },
  '10': {
    corridor: 'South-East',
    housingProfile: 'sector apartments and row houses toward Agara',
    landmark: 'HSR Sector 2',
    commonIssues: ['filter clog from daily tadka cooking', 'uneven hob flame', 'built-in microwave door faults'],
    localTip: 'Share the sector and 27th Main side — HSR inner roads are one-way in several pockets.',
    description:
      'Elica Repair & Service in HSR Layout covers Sectors 2, 4 and 6 plus Agara. Typical response is 2–3 hours for chimney cleaning and hob service in this south-east residential grid.',
  },
  '11': {
    corridor: 'East',
    housingProfile: 'ORR apartments and older independent houses near the bridge',
    landmark: 'Marathahalli Bridge',
    commonIssues: ['weak suction after ORR dust load', 'oil collector overflow', 'gas hob burner blockage'],
    localTip: 'ORR crawl is worst 6–9pm — morning slots reach Kundalahalli Gate faster.',
    description:
      'Elica Repair & Service in Marathahalli covers the bridge, Kundalahalli Gate and ORR Marathahalli. Typical response is 2–3 hours between Whitefield and Bellandur routes.',
  },
  '12': {
    corridor: 'North',
    housingProfile: 'apartments near the flyover and Kempapura side homes',
    landmark: 'Hebbal Flyover',
    commonIssues: ['ducted chimney noise', 'hob flame yellowing', 'microwave turntable faults'],
    localTip: 'Hebbal flyover queues build early — share Kempapura or Esteem Mall side for a cleaner approach.',
    description:
      'Elica Repair & Service in Hebbal covers the flyover, Kempapura and the Sahakar Nagar edge. Typical response is 2–3 hours toward Manyata and Hebbal junction.',
  },
  '13': {
    corridor: 'South',
    housingProfile: 'established independent homes and 4th/9th Block apartments',
    landmark: 'South End Circle',
    commonIssues: ['older chimney fan noise', 'hob burner ports clogged', 'range hood grease'],
    localTip: 'South End Circle is easier to locate than inner 9th Block lanes — mention the nearest bus stop.',
    description:
      'Elica Repair & Service in Jayanagar covers 4th Block, 9th Block and South End Circle. Typical response is 2–3 hours in this established south Bangalore locality.',
  },
  '14': {
    corridor: 'South-West',
    housingProfile: 'family homes and apartments toward Kathriguppe',
    landmark: 'Kathriguppe',
    commonIssues: ['chimney deep cleaning', 'low hob flame', 'cooktop spark issues'],
    localTip: 'Kathriguppe market streets are tight — share a stage (1st–3rd) and a cross.',
    description:
      'Elica Repair & Service in Banashankari covers 1st–3rd Stage, Kathriguppe and Girinagar. Typical response is 2–4 hours for south-west family kitchens.',
  },
  '15': {
    corridor: 'South-East',
    housingProfile: 'apartment communities along the Sarjapur IT stretch',
    landmark: 'Carmelaram',
    commonIssues: ['high-rise duct suction loss', 'oil drip', 'gas hob service'],
    localTip: 'Society gates often need a visitor code — share tower and Carmelaram vs Doddakannelli side.',
    description:
      'Elica Repair & Service on Sarjapur Road covers Carmelaram and Doddakannelli. Typical response is 2–4 hours along this south-east apartment corridor.',
  },
  '16': {
    corridor: 'South',
    housingProfile: '1st and 2nd Stage apartments plus Madiwala mixed streets',
    landmark: 'BTM 2nd Stage',
    commonIssues: ['chimney oil drip', 'hob igniter', 'microwave repair'],
    localTip: 'Silk Board approach is slow evenings — 2nd Stage inner roads are faster after 10am.',
    description:
      'Elica Repair & Service in BTM Layout covers 1st Stage, 2nd Stage and Madiwala. Typical response is 2–3 hours between Koramangala and HSR.',
  },
  '17': {
    corridor: 'Central-East',
    housingProfile: 'compact layouts near Old Airport Road and EGL',
    landmark: 'Old Airport Road',
    commonIssues: ['quick chimney filter service', 'hob flame issues', 'built-in microwave faults'],
    localTip: 'Embassy Golf Links traffic stacks at peak — share the Domlur inner-layout entry.',
    description:
      'Elica Repair & Service in Domlur covers Domlur Layout, Old Airport Road and the EGL side. Typical response is 1.5–2.5 hours for same-day kitchen repairs.',
  },
  '18': {
    corridor: 'Central-East',
    housingProfile: 'older apartments and independent homes around Coles Park',
    landmark: 'Coles Park',
    commonIssues: ['noisy chimney motors in older kitchens', 'hob burner blockage', 'range service'],
    localTip: 'Narrow Frazer Town streets — share Coles Park or Pulakeshinagar as the meeting point.',
    description:
      'Elica Repair & Service in Frazer Town covers Pulakeshinagar and Coles Park. Typical response is 2–3 hours in this central-east residential pocket.',
  },
  '19': {
    corridor: 'Central-East',
    housingProfile: 'lake-side apartments and Halasuru independent homes',
    landmark: 'Ulsoor Lake',
    commonIssues: ['chimney suction in compact flats', 'hob cleaning', 'microwave repair'],
    localTip: 'Kensington Road is the easier drop-off than inner Halasuru lanes at lunch hour.',
    description:
      'Elica Repair & Service in Ulsoor covers Ulsoor Lake, Halasuru and Kensington Road. Typical response is 2–3 hours in this central Bangalore locality.',
  },
  '20': {
    corridor: 'West',
    housingProfile: 'planned layout homes near Bashyam Circle',
    landmark: 'Bashyam Circle',
    commonIssues: ['chimney deep cleaning', 'gas hob service', 'cooking range thermostat'],
    localTip: 'Share ESI Hospital side vs Mahalakshmi Layout edge — the two approaches split at Bashyam Circle.',
    description:
      'Elica Repair & Service in Rajajinagar covers Bashyam Circle and the Mahalakshmi Layout edge. Typical response is 2–3 hours for west Bangalore kitchens.',
  },
  '21': {
    corridor: 'South',
    housingProfile: 'traditional independent homes around Gandhi Bazaar',
    landmark: 'Gandhi Bazaar',
    commonIssues: ['older chimney fan service', 'hob burner ports', 'oil drip'],
    localTip: 'Gandhi Bazaar is congested mornings — National College side is a clearer landmark.',
    description:
      'Elica Repair & Service in Basavanagudi covers Gandhi Bazaar and National College. Typical response is 2–3 hours in this traditional south Bangalore locality.',
  },
  '22': {
    corridor: 'North',
    housingProfile: 'New Town apartments and Old Town independent homes',
    landmark: 'Yelahanka New Town',
    commonIssues: ['high-rise chimney suction', 'hob igniter', 'microwave faults'],
    localTip: 'Specify New Town vs Old Town — Doddaballapur Road access differs for each.',
    description:
      'Elica Repair & Service in Yelahanka covers New Town, Old Town and Doddaballapur Road. Typical response is 2–4 hours in this north Bangalore expansion zone.',
  },
  '23': {
    corridor: 'North',
    housingProfile: 'compact apartments and CBI Road homes',
    landmark: 'CBI Road',
    commonIssues: ['chimney filter clog', 'uneven hob flame', 'built-in microwave repair'],
    localTip: 'CBI Road is the cleaner landmark than inner RT Nagar lanes during school hours.',
    description:
      'Elica Repair & Service in RT Nagar covers Ganganagar and CBI Road. Typical response is 2–3 hours toward Hebbal and Manyata.',
  },
  '24': {
    corridor: 'North',
    housingProfile: 'layout homes toward Kodigehalli and Byatarayanapura',
    landmark: 'Sahakarnagar',
    commonIssues: ['chimney oil drip', 'hob service', 'range repair'],
    localTip: 'Share Kodigehalli vs Byatarayanapura edge so the technician skips the Hebbal loop.',
    description:
      'Elica Repair & Service in Sahakarnagar covers Kodigehalli and Byatarayanapura. Typical response is 2–3 hours in this north Bangalore cluster.',
  },
  '25': {
    corridor: 'North-West',
    housingProfile: 'homes around the industrial belt and Jalahalli edge',
    landmark: 'Peenya 2nd Stage',
    commonIssues: ['dust-loaded chimney motors', 'hob igniter faults', 'cooking range service'],
    localTip: 'Industrial-road turns are easy to miss — share 2nd Stage vs Jalahalli edge.',
    description:
      'Elica Repair & Service in Peenya covers Peenya 2nd Stage and Jalahalli. Typical response is 2–4 hours around the north-west industrial belt.',
  },
  '26': {
    corridor: 'West',
    housingProfile: 'Chord Road apartments and Marenahalli homes',
    landmark: 'Chord Road',
    commonIssues: ['chimney deep cleaning', 'gas hob flame issues', 'microwave repair'],
    localTip: 'Chord Road is faster than inner Vijayanagar markets at evening peak.',
    description:
      'Elica Repair & Service in Vijayanagar covers Chord Road and Marenahalli. Typical response is 2–3 hours for west Bangalore hob and chimney work.',
  },
  '27': {
    corridor: 'South-West',
    housingProfile: 'satellite-town apartments along Mysore Road',
    landmark: 'Kengeri Satellite Town',
    commonIssues: ['chimney suction in larger family kitchens', 'hob service', 'range repair'],
    localTip: 'Specify Satellite Town vs Upanagara — Mysore Road access is different for each.',
    description:
      'Elica Repair & Service in Kengeri covers Satellite Town and Mysore Road. Typical response is 3–4 hours in this south-west corridor.',
  },
  '28': {
    corridor: 'West',
    housingProfile: 'township apartments in Ideal Homes and BHEL Layout',
    landmark: 'Ideal Homes',
    commonIssues: ['high-rise chimney cleaning', 'hob igniter', 'built-in microwave faults'],
    localTip: 'Gated layouts need a gate pass — share Ideal Homes vs BHEL Layout with tower name.',
    description:
      'Elica Repair & Service in RR Nagar covers Ideal Homes and BHEL Layout. Typical response is 2–4 hours in this west Bangalore township.',
  },
  '29': {
    corridor: 'West',
    housingProfile: 'layout homes around the 12th Block and Sir MV Layout',
    landmark: 'Nagarbhavi Circle',
    commonIssues: ['chimney oil drip', 'hob burner blockage', 'microwave repair'],
    localTip: 'Nagarbhavi Circle is the meeting point if inner 12th Block pins are unclear.',
    description:
      'Elica Repair & Service in Nagarbhavi covers 12th Block and Sir MV Layout. Typical response is 2–4 hours for west Bangalore residential kitchens.',
  },
  '30': {
    corridor: 'West',
    housingProfile: 'homes and societies along the Mysore Road arterial',
    landmark: 'Nayandahalli',
    commonIssues: ['chimney fan dust', 'gas hob service', 'cooking range issues'],
    localTip: 'Nayandahalli junction is clearer than Chandra Layout edge during flyover work.',
    description:
      'Elica Repair & Service on Mysore Road covers Nayandahalli and Chandra Layout. Typical response is 2–4 hours along this west arterial.',
  },
  '31': {
    corridor: 'South',
    housingProfile: 'apartments and ISRO Layout-edge homes',
    landmark: 'Konanakunte',
    commonIssues: ['chimney deep cleaning', 'hob flame problems', 'microwave service'],
    localTip: 'Share Konanakunte Cross vs ISRO Layout — Kanakapura Road has long one-way stretches.',
    description:
      'Elica Repair & Service on Kanakapura Road covers Konanakunte and ISRO Layout. Typical response is 2–4 hours for south Bangalore kitchens.',
  },
  '32': {
    corridor: 'South',
    housingProfile: 'apartments along Bannerghatta Main Road',
    landmark: 'Arekere Gate',
    commonIssues: ['chimney oil drip', 'hob igniter', 'built-in microwave repair'],
    localTip: 'Arekere Gate is easier than inner AECS-edge lanes during hospital-hour traffic.',
    description:
      'Elica Repair & Service in Arekere covers Arekere Gate and the AECS Layout edge. Typical response is 2–3 hours off Bannerghatta Road.',
  },
  '33': {
    corridor: 'South',
    housingProfile: 'residential streets toward Nobo Nagar',
    landmark: 'Meenakshi Temple',
    commonIssues: ['chimney suction', 'hob cleaning', 'range service'],
    localTip: 'Weekend temple traffic is heavy — weekday mornings reach Hulimavu Gate faster.',
    description:
      'Elica Repair & Service in Hulimavu covers Hulimavu Gate, Meenakshi Temple side and Nobo Nagar. Typical response is 2–3 hours.',
  },
  '34': {
    corridor: 'South',
    housingProfile: 'newer apartments toward Akshayanagar',
    landmark: 'Begur Lake',
    commonIssues: ['new-apartment chimney installation checks', 'oil drip', 'hob service'],
    localTip: 'Share Begur Road vs Akshayanagar — lake-side layouts have separate gates.',
    description:
      'Elica Repair & Service in Begur covers Begur Road, Begur Lake and Akshayanagar. Typical response is 2–4 hours in this south growth corridor.',
  },
  '35': {
    corridor: 'South-East',
    housingProfile: 'mixed apartments near Hosur Road',
    landmark: 'Hongasandra',
    commonIssues: ['chimney deep cleaning', 'hob flame issues', 'microwave repair'],
    localTip: 'Hosur Road peak is slow — Hongasandra or Roopena Agrahara is a better pin than the junction.',
    description:
      'Elica Repair & Service in Bommanahalli covers Hongasandra and Roopena Agrahara. Typical response is 2–3 hours near Hosur Road.',
  },
  '36': {
    corridor: 'South-East',
    housingProfile: 'apartments and homes along the Hosur Road corridor',
    landmark: 'Kudlu Gate',
    commonIssues: ['chimney suction loss', 'hob igniter', 'cooking range service'],
    localTip: 'Kudlu vs Singasandra inner roads split after the gate — mention which side of Hosur Road.',
    description:
      'Elica Repair & Service at Kudlu Gate covers Kudlu and Singasandra. Typical response is 2–4 hours on the Hosur Road corridor.',
  },
  '37': {
    corridor: 'South',
    housingProfile: 'tech-adjacent apartments on Hosur Road',
    landmark: 'AECS Layout Singasandra',
    commonIssues: ['ducted chimney cleaning', 'oil drip', 'gas hob service'],
    localTip: 'AECS Layout Singasandra is a clearer society landmark than the Hosur Road bus stop.',
    description:
      'Elica Repair & Service in Singasandra covers AECS Layout and Hosur Road. Typical response is 2–4 hours for this south tech-residential mix.',
  },
  '38': {
    corridor: 'East',
    housingProfile: 'ITPL-adjacent apartments and Graphite India side homes',
    landmark: 'Hoodi Junction',
    commonIssues: ['high-rise suction problems', 'hob service', 'microwave faults'],
    localTip: 'Hoodi Junction vs ITPL Main Road — share which arm so the technician skips the KR Puram loop.',
    description:
      'Elica Repair & Service in Hoodi covers ITPL Main Road and Graphite India. Typical response is 2–3 hours between Whitefield and KR Puram.',
  },
  '39': {
    corridor: 'East',
    housingProfile: 'homes around Old Madras Road and Tin Factory',
    landmark: 'Tin Factory',
    commonIssues: ['chimney oil drip', 'hob burner blockage', 'range repair'],
    localTip: 'Tin Factory flyover queues are long evenings — Old Madras Road inner entries are faster after 10am.',
    description:
      'Elica Repair & Service in KR Puram covers Old Madras Road and Tin Factory. Typical response is 2–3 hours at this east junction.',
  },
  '40': {
    corridor: 'North-East',
    housingProfile: 'independent homes toward TC Palya and Horamavu',
    landmark: 'TC Palya',
    commonIssues: ['chimney deep cleaning', 'hob flame issues', 'microwave repair'],
    localTip: 'Share TC Palya vs Horamavu edge — the two belts sit on different approach roads.',
    description:
      'Elica Repair & Service in Ramamurthy Nagar covers TC Palya and Horamavu. Typical response is 2–4 hours in this north-east residential belt.',
  },
  '41': {
    corridor: 'East',
    housingProfile: 'DRDO-adjacent layouts and Malleshpalya apartments',
    landmark: 'Kaggadasapura',
    commonIssues: ['chimney suction', 'hob igniter', 'built-in microwave service'],
    localTip: 'Kaggadasapura is easier to locate than inner CV Raman Nagar lanes during office egress.',
    description:
      'Elica Repair & Service in CV Raman Nagar covers Kaggadasapura and Malleshpalya. Typical response is 2–3 hours near DRDO layouts.',
  },
  '42': {
    corridor: 'Central-East',
    housingProfile: 'apartments along Wind Tunnel Road and Murugeshpalya',
    landmark: 'Wind Tunnel Road',
    commonIssues: ['chimney filter service', 'gas hob problems', 'microwave repair'],
    localTip: 'Wind Tunnel Road is clearer than Old Airport Road signals at peak.',
    description:
      'Elica Repair & Service on Old Airport Road covers Murugeshpalya and Wind Tunnel Road. Typical response is 2–3 hours from Domlur and Indiranagar.',
  },
  '43': {
    corridor: 'East',
    housingProfile: 'AECS and Kundalahalli apartment clusters',
    landmark: 'Kundalahalli',
    commonIssues: ['high-rise chimney cleaning', 'oil drip', 'hob service'],
    localTip: 'AECS Layout Brookefield vs Kundalahalli — share the layout name for the right gate.',
    description:
      'Elica Repair & Service in Brookefield covers Kundalahalli and AECS Layout. Typical response is 2–3 hours next to Whitefield.',
  },
  '44': {
    corridor: 'East',
    housingProfile: 'lake-side layouts toward Gunjur and Varthur Kodi',
    landmark: 'Varthur Kodi',
    commonIssues: ['chimney suction in new apartments', 'hob igniter', 'range service'],
    localTip: 'Varthur Kodi is the usual pin — Gunjur-edge societies need the layout name for access.',
    description:
      'Elica Repair & Service in Varthur covers Varthur Kodi and Gunjur. Typical response is 2–4 hours in this east lake-side growth area.',
  },
  '45': {
    corridor: 'East',
    housingProfile: 'ORR tech-park apartments',
    landmark: 'Outer Ring Road',
    commonIssues: ['ducted chimney suction', 'oil drip in stacked kitchens', 'gas hob service'],
    localTip: 'ORR slots before 5pm reach New Horizon side faster than evening office egress.',
    description:
      'Elica Repair & Service in Kadubeesanahalli covers ORR and the New Horizon side. Typical response is 2–3 hours in this tech-park neighbourhood.',
  },
  '46': {
    corridor: 'North',
    housingProfile: 'apartments and gated communities around Nagawara',
    landmark: 'Manyata Embassy Business Park',
    commonIssues: ['high-rise chimney cleaning', 'hob flame issues', 'microwave faults'],
    localTip: 'Share Nagawara vs Thanisandra gate — Manyata-adjacent societies use different visitor entries.',
    description:
      'Elica Repair & Service at Manyata Tech Park covers Nagawara and Thanisandra. Typical response is 2–3 hours for nearby apartments.',
  },
  '47': {
    corridor: 'North',
    housingProfile: 'main-road apartments toward Ashwath Nagar',
    landmark: 'Thanisandra Main Road',
    commonIssues: ['chimney oil drip', 'hob service', 'cooking range repair'],
    localTip: 'Thanisandra Main Road pins are clearer than inner Bharathnagar lanes.',
    description:
      'Elica Repair & Service in Thanisandra covers Ashwath Nagar and Bharathnagar. Typical response is 2–4 hours on this north residential stretch.',
  },
  '48': {
    corridor: 'North',
    housingProfile: 'homes near Allalasandra and the Yelahanka edge',
    landmark: 'Jakkur',
    commonIssues: ['chimney suction', 'hob igniter', 'microwave repair'],
    localTip: 'Allalasandra vs Yelahanka edge — aerodrome-side roads are easier than inner Jakkur lanes at dusk.',
    description:
      'Elica Repair & Service in Jakkur covers Allalasandra and the Yelahanka edge. Typical response is 2–4 hours in this north locality.',
  },
  '49': {
    corridor: 'North-East',
    housingProfile: 'apartments toward HRBR and Kalyan Nagar',
    landmark: 'Kammanahalli',
    commonIssues: ['chimney filter clog', 'hob flame problems', 'built-in microwave service'],
    localTip: 'Kammanahalli junction is busy evenings — HRBR Layout side is a cleaner meeting point.',
    description:
      'Elica Repair & Service in Kammanahalli covers Kalyan Nagar and HRBR Layout. Typical response is 2–3 hours for north-east hob and microwave work.',
  },
  '50': {
    corridor: 'North-East',
    housingProfile: 'HRBR apartment belt and 3rd Block homes',
    landmark: 'HRBR Layout',
    commonIssues: ['chimney deep cleaning', 'oil drip', 'gas hob service'],
    localTip: 'Share 3rd Block vs HRBR — Kalyan Nagar inner roads are one-way in several stretches.',
    description:
      'Elica Repair & Service in Kalyan Nagar covers HRBR Layout and 3rd Block. Typical response is 2–3 hours in this north-east apartment belt.',
  },
  '51': {
    corridor: 'North-East',
    housingProfile: 'HRBR 2nd Block apartments and Dodda Banaswadi homes',
    landmark: 'HRBR 2nd Block',
    commonIssues: ['chimney suction', 'hob igniter', 'microwave repair'],
    localTip: 'Dodda Banaswadi vs HRBR 2nd Block — share which so the technician skips the KR Puram loop.',
    description:
      'Elica Repair & Service in Banaswadi covers HRBR 2nd Block and Dodda Banaswadi. Typical response is 2–3 hours toward KR Puram and Kalyan Nagar.',
  },
  '52': {
    corridor: 'North-East',
    housingProfile: 'expanding layouts toward Horamavu Agara and Kalkere',
    landmark: 'Horamavu Agara',
    commonIssues: ['new-home chimney cleaning', 'hob service', 'range repair'],
    localTip: 'Horamavu Agara is the usual pin — Kalkere-edge layouts need the society name.',
    description:
      'Elica Repair & Service in Horamavu covers Horamavu Agara and Kalkere. Typical response is 2–4 hours in this north-east residential expansion.',
  },
  '53': {
    corridor: 'East',
    housingProfile: 'ORR apartments toward Garudacharpalya',
    landmark: 'Phoenix Marketcity',
    commonIssues: ['high-rise chimney suction', 'oil drip', 'hob flame issues'],
    localTip: 'Phoenix side vs Garudacharpalya — mall traffic is heavy weekends, weekday mornings are clearer.',
    description:
      'Elica Repair & Service in Mahadevapura covers Garudacharpalya and the Phoenix side. Typical response is 2–3 hours on the east ORR.',
  },
  '54': {
    corridor: 'South-West',
    housingProfile: 'family homes toward Chikkallasandra and Subramanyapura',
    landmark: 'Uttarahalli',
    commonIssues: ['chimney deep cleaning', 'hob burner blockage', 'microwave service'],
    localTip: 'Share Chikkallasandra vs Subramanyapura — Kanakapura and Banashankari approaches differ.',
    description:
      'Elica Repair & Service in Uttarahalli covers Chikkallasandra and Subramanyapura. Typical response is 2–4 hours near Kanakapura and Banashankari routes.',
  },
  '55': {
    corridor: 'South',
    housingProfile: 'layout homes toward ISRO Layout and the college side',
    landmark: 'ISRO Layout',
    commonIssues: ['chimney oil drip', 'hob igniter', 'cooking range service'],
    localTip: 'ISRO Layout is a clearer pin than Dayananda Sagar side during college hours.',
    description:
      'Elica Repair & Service in Kumaraswamy Layout covers ISRO Layout and the DSCE side. Typical response is 2–3 hours in this south residential layout.',
  },
  '56': {
    corridor: 'South',
    housingProfile: 'family homes toward Gowdanapalya',
    landmark: 'Padmanabhanagar',
    commonIssues: ['chimney suction', 'gas hob service', 'microwave repair'],
    localTip: 'Gowdanapalya vs Chikkakallasandra edge — share the side so the technician avoids Banashankari loop.',
    description:
      'Elica Repair & Service in Padmanabhanagar covers Gowdanapalya and Chikkakallasandra. Typical response is 2–3 hours for south Bangalore family kitchens.',
  },
  '57': {
    corridor: 'West',
    housingProfile: 'homes linking Vijayanagar and Magadi Road',
    landmark: 'Magadi Road',
    commonIssues: ['chimney filter service', 'hob flame problems', 'range repair'],
    localTip: 'Magadi Road is easier than the Vijayanagar-edge market streets in the evening.',
    description:
      'Elica Repair & Service in Chandra Layout covers the Vijayanagar edge and Magadi Road. Typical response is 2–3 hours in this west Bangalore pocket.',
  },
  '58': {
    corridor: 'North-West',
    housingProfile: 'East and West Jalahalli homes around Gangamma Circle',
    landmark: 'Gangamma Circle',
    commonIssues: ['dust-loaded chimney motors', 'hob igniter', 'cooking range service'],
    localTip: 'Specify Jalahalli East vs West — Gangamma Circle is the shared landmark for both.',
    description:
      'Elica Repair & Service in Jalahalli covers Jalahalli East, West and Gangamma Circle. Typical response is 2–4 hours near Peenya and Yeshwanthpur.',
  },
}
