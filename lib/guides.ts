export type GuidePost = {
  slug: string
  title: string
  excerpt: string
  category: 'Chimney' | 'Hob' | 'Microwave' | 'Maintenance'
  publishedAt: string
  updatedAt?: string
  readTime: string
  keywords: string[]
  introduction: string
  image: string
  inlineImage?: { src: string; alt: string }
  sections: Array<{ heading: string; body: string[] }>
  takeaways: string[]
  relatedServiceIds: string[]
  relatedSlugs?: string[]
}

const UPDATED = '2026-11-18'
const HERO = '/images/hero-service.jpg'
const FIELD = '/images/service-excellence.jpg'

export const guidePosts: GuidePost[] = [
  {
    slug: 'how-often-to-clean-kitchen-chimney',
    title: 'How Often to Clean a Kitchen Chimney in Bangalore',
    excerpt:
      'A cleaning schedule for Elica chimneys that matches daily Indian cooking, oil use, and Bangalore apartment ducts — not a brochure interval.',
    category: 'Chimney',
    publishedAt: '2026-06-10',
    updatedAt: UPDATED,
    readTime: '11 min',
    keywords: [
      'how often to clean kitchen chimney',
      'chimney cleaning schedule Bangalore',
      'Elica chimney maintenance',
    ],
    introduction:
      'Most Bangalore kitchens cook with oil every day. Grease builds faster than a “once a year” sticker suggests, which is why suction drops and oil starts dripping onto the hob. This note is a practical schedule for Elica wall-mount and auto-clean chimneys, written from doorstep jobs — not from an OEM manual.',
    image: HERO,
    inlineImage: {
      src: FIELD,
      alt: 'Kitchen chimney service visit in Bangalore',
    },
    sections: [
      {
        heading: 'Why a calendar interval is the wrong starting point',
        body: [
          'A chimney does not fail on a date. It fails when the mesh or baffles cannot pass air, when the oil cup is full, or when the fan housing is packed. Two households on the same floor in [[/areas/koramangala|Koramangala]] can need different intervals because one fries every evening and the other uses the hob for tea and a light dinner.',
          'If you only wipe the outer glass, the kitchen looks clean while smoke still hangs. That is a service call for [[/services/chimney-general-cleaning|Elica chimney general cleaning]], not a new motor. Book from the published [[/services|services]] menu. We are an independent repair desk, not an authorised Elica company centre.',
        ],
      },
      {
        heading: 'Recommended cleaning frequency for Bangalore cooking',
        body: [
          'For everyday tadka and one or two pans of frying, book general cleaning every three to six months. That interval holds for many 2BHK kitchens in [[/areas/indiranagar|Indiranagar]] and [[/areas/jayanagar|Jayanagar]] where the duct run is short.',
          'If you deep-fry often, cook for a large family, or run the chimney on high for long stretches, schedule [[/services/chimney-deep-cleaning|deep cleaning]] every two to three months. High-rise ducts in [[/areas/whitefield|Whitefield]] and [[/areas/hsr-layout|HSR Layout]] often need the heavier job sooner because grease sits in the riser, not only on the filter.',
          'Dismantle cleaning is not a yearly ritual. It is for chimneys that still drip or still lose suction after a proper deep clean. That route is listed as [[/services/chimney-dismantle-cleaning|chimney dismantle cleaning]].',
        ],
      },
      {
        heading: 'Signs the schedule is already late',
        body: [
          'Smoke hangs over the hob on high speed. Oil beads on the canopy or drips onto a burner. The kitchen smell stays after cooking. The fan is louder than it was six months ago. Any one of those is enough to stop waiting for a “due date”.',
          'If oil is already dripping, skip a DIY soak and read [[/guides/chimney-dripping-oil-causes-and-fixes|chimney dripping oil]] before you pour chemicals into the housing. If the fan is spinning but smoke stays, [[/guides/fix-chimney-suction-problem|weak suction]] is the closer note.',
        ],
      },
      {
        heading: 'What a technician actually cleans on a scheduled visit',
        body: [
          'Filters or baffles, the oil collector, mesh, accessible fan housing, and a suction check after reassembly. We do not quote a motor swap from a phone photo of a dirty filter. If the motor is slow or noisy after grease is out, that becomes [[/services/chimney-fan-not-working|fan not working]] or [[/services/chimney-making-noise|chimney making noise]] — separate jobs on the same menu.',
          'Coverage is the published [[/areas|areas]] list. Share pincode and tower access on [[/contact|contact]]. Phone is the number already printed on the site: +91 99025 52888.',
        ],
      },
      {
        heading: 'Questions we get on the cleaning interval',
        body: [
          'Does auto-clean replace a booked service? No. Heat cycles help the oil tray; they do not wash a packed squirrel-cage fan. Can you wait until festival cooking? You can, and then you often pay for deep or dismantle instead of general. Starting rates for those job types are in [[/guides/elica-chimney-cleaning-cost-bangalore|Elica chimney cleaning cost in Bangalore]].',
        ],
      },
    ],
    takeaways: [
      'Interval follows oil load and duct length, not a sticker.',
      'General every 3–6 months; deep sooner if you fry daily.',
      'Dismantle is for chimneys that stay dirty after a proper deep clean.',
    ],
    relatedServiceIds: ['chimney-general-cleaning', 'chimney-deep-cleaning'],
    relatedSlugs: [
      'elica-chimney-cleaning-cost-bangalore',
      'when-to-book-chimney-dismantle-cleaning',
      'fix-chimney-suction-problem',
    ],
  },
  {
    slug: 'chimney-dripping-oil-causes-and-fixes',
    title: 'Chimney Dripping Oil: Causes and Safe Fixes in Bangalore',
    excerpt:
      'Why an Elica chimney drips oil onto the stove after frying, what you can wipe at home, and when Bangalore technicians need to open the housing.',
    category: 'Chimney',
    publishedAt: '2026-06-18',
    updatedAt: UPDATED,
    readTime: '12 min',
    keywords: [
      'chimney dripping oil',
      'kitchen chimney oil drip fix',
      'Elica chimney dripping oil Bangalore',
    ],
    introduction:
      'Oil dripping from a kitchen chimney is one of the most common service calls in Bangalore. It is usually grease that has nowhere left to sit — not a “broken” chimney — and it stops when the drip path is cleaned, not when you buy a new glass canopy from a listing.',
    image: HERO,
    inlineImage: {
      src: FIELD,
      alt: 'Oil drip on a kitchen chimney canopy',
    },
    sections: [
      {
        heading: 'What dripping oil actually is',
        body: [
          'Cooking oil becomes a sticky film on baffles, mesh, and the fan. Heat from the next tadka melts that film. Gravity takes it to the lowest edge of the canopy and then onto the hob. The chimney is doing physics, not failing a warranty slogan.',
          'Overflowed oil cups and blocked return paths make it worse. So does a duct that slopes the wrong way, which sends condensate back into the hood. That last issue shows up on first-fit jobs as often as on ten-year-old units.',
        ],
      },
      {
        heading: 'Checks you can do without opening the motor',
        body: [
          'If your model has a washable oil collector, empty it when it is cool. Wipe the outer canopy and the underside lip. Wash reusable filters in warm soapy water if the manual for your model allows it. Do not pour drain cleaner or acid into the housing. Do not pull the motor from the canopy on a ladder.',
          'If dripping continues after a basic wipe, stop. The residue is inside. That is [[/services/chimney-dripping-oil|chimney dripping oil]] service, usually with [[/services/chimney-deep-cleaning|deep cleaning]] on the same visit.',
        ],
      },
      {
        heading: 'What the technician clears on the visit',
        body: [
          'Grease paths, filters, collector, fan housing, and a suction test after reassembly. If the motor is already noisy or slow, we say so before quoting a spare. Independent repair — not OEM authorised. Parts, when needed, are shown before a swap.',
          'Kitchens in [[/areas/whitefield|Whitefield]] high-rises and [[/areas/marathahalli|Marathahalli]] stacked towers often drip again quickly if only the mesh is washed and the riser is left packed. That is when [[/guides/when-to-book-chimney-dismantle-cleaning|dismantle cleaning]] is the honest next step, not a second “general wipe”.',
        ],
      },
      {
        heading: 'Drip versus weak suction versus noise',
        body: [
          'Drip is oil leaving the hood. Weak suction is smoke staying in the room — see [[/guides/fix-chimney-suction-problem|fix chimney suction]]. Noise after a clean often means bearings or a bent fan, covered in [[/guides/elica-chimney-making-noise|noisy chimney]]. Do not order three jobs from a WhatsApp video; describe the symptom on [[/contact|contact]].',
        ],
      },
      {
        heading: 'Questions on oil drip',
        body: [
          'Will a new chimney stop drip if the duct is still greasy? No. The new unit will drip into the same pipe. Is dripping dangerous? It is a fire-load and a slip hazard on the hob, which is why we treat it as a service call, not a cosmetic complaint. Starting prices sit on the catalogue pages and in the [[/guides/elica-chimney-cleaning-cost-bangalore|cost guide]].',
        ],
      },
    ],
    takeaways: [
      'Drip is usually packed grease, not a cracked glass.',
      'Home wiping helps only light residue on cups and mesh.',
      'Repeated drip after a mesh wash needs deep or dismantle cleaning.',
    ],
    relatedServiceIds: ['chimney-dripping-oil', 'chimney-deep-cleaning'],
    relatedSlugs: [
      'how-often-to-clean-kitchen-chimney',
      'when-to-book-chimney-dismantle-cleaning',
      'fix-chimney-suction-problem',
    ],
  },
  {
    slug: 'fix-chimney-suction-problem',
    title: 'Fix Weak Chimney Suction Before You Replace the Motor',
    excerpt:
      'Step-by-step checks for Elica chimney suction problems in Bangalore apartments, and when a technician needs to open the fan or the duct.',
    category: 'Chimney',
    publishedAt: '2026-06-25',
    updatedAt: UPDATED,
    readTime: '12 min',
    keywords: [
      'chimney suction problem',
      'weak kitchen chimney suction',
      'chimney not sucking smoke',
    ],
    introduction:
      'A chimney that does not clear smoke makes cooking uncomfortable and leaves oil on walls. Many suction complaints start with clogged filters. Some need a motor or a duct that was never sloped correctly. Replacing the whole hood from a marketplace listing is the last step, not the first.',
    image: HERO,
    inlineImage: {
      src: FIELD,
      alt: 'Checking kitchen chimney suction on a Bangalore service visit',
    },
    sections: [
      {
        heading: 'Confirm the chimney is actually in a suction mode',
        body: [
          'Set the highest speed, not only the lamp. Auto-clean heat is not suction. Delay-off after cooking is not a substitute for running the fan while oil is in the pan. If the unit is in recirculation with a saturated carbon pad, outdoor air never leaves the kitchen — that is an install type, not a dead motor.',
          'Then look at the filters. A washable baffle that you can see is caked will steal most of the air before the fan gets it. That is a [[/services/chimney-general-cleaning|general cleaning]] or [[/services/chimney-deep-cleaning|deep cleaning]] job, listed under [[/services/chimney-suction-problem|chimney suction problem]].',
        ],
      },
      {
        heading: 'Duct problems that look like a dead fan',
        body: [
          'A crushed flexible pipe, a 90-degree kink behind the cabinet, a shared high-rise riser packed with neighbours’ grease, or a pipe that is too long for a 60cm motor will all present as “no suction”. Last-floor flats in [[/areas/hsr-layout|HSR Layout]] and [[/areas/whitefield|Whitefield]] see this often.',
          'We test airflow at the hood after filters are clean. If the fan is spinning freely and the kitchen still fills, the pipe is next — not a random spare from a listing. Independent desk; we do not claim Elica company warranty on another shop’s install.',
        ],
      },
      {
        heading: 'When the motor really is the problem',
        body: [
          'Fan not spinning, spinning slowly under load, or screaming while moving little air. That sits on [[/services/chimney-fan-not-working|chimney fan not working]] and, if the sound is the complaint, [[/guides/elica-chimney-making-noise|noisy chimney]]. We show the failed part before a swap.',
          'If the chimney will not start at all, power and switch come first — see [[/services/chimney-not-working|chimney not working]] rather than ordering a motor from a photo of a dark panel.',
        ],
      },
      {
        heading: 'What you should not do on a stool',
        body: [
          'Do not enlarge the duct hole with a kitchen knife. Do not run the motor without filters “to test suction” for an hour — that packs the fan with oil. Do not spray foam cleaner into live electrics. Book from [[/contact|contact]] with pincode; [[/areas/indiranagar|Indiranagar]], [[/areas/koramangala|Koramangala]] and the rest of the [[/areas|areas]] list are published coverage, not a claim on every pin in Karnataka.',
        ],
      },
    ],
    takeaways: [
      'Filters and kinks steal suction before motors do.',
      'High-rise risers need deep cleaning, not only a mesh wipe.',
      'A spinning fan with hanging smoke is a duct or grease problem.',
    ],
    relatedServiceIds: ['chimney-suction-problem', 'chimney-fan-not-working'],
    relatedSlugs: [
      'how-often-to-clean-kitchen-chimney',
      'elica-chimney-making-noise',
      'chimney-dripping-oil-causes-and-fixes',
    ],
  },
  {
    slug: 'gas-hob-flame-problems-explained',
    title: 'Gas Hob Flame Problems on Elica Cooktops',
    excerpt:
      'Yellow tips, weak burners, and lifting flames on Elica gas hobs in Bangalore — what they mean, what you can clean, and when to book burner service.',
    category: 'Hob',
    publishedAt: '2026-07-02',
    updatedAt: UPDATED,
    readTime: '11 min',
    keywords: [
      'gas hob flame problems',
      'yellow flame gas stove',
      'Elica hob service Bangalore',
    ],
    introduction:
      'A healthy gas hob flame should burn steadily with a mostly blue cone. Yellow tips, a weak ring on one burner, or a flame that lifts off the cap are cooking problems and, in some cases, safety problems. This note is for built-in Elica hobs on Bangalore counters, not a DIY gas-line modification guide.',
    image: FIELD,
    inlineImage: {
      src: HERO,
      alt: 'Gas hob burner service on an Elica cooktop',
    },
    sections: [
      {
        heading: 'What the flame colour is telling you',
        body: [
          'Yellow or sooty flame often means blocked ports or a poor air mix around the burner head. Food boil-over dries in the holes. Low flame on one burner with the others healthy often means a clogged nozzle or a cap that is not seated. Flame lifting or popping needs a technician — do not “tune” it with a pin from a sewing kit.',
          'If you smell gas, turn the supply off at the tap and step back. That is an urgent [[/services/gas-hob-service|gas hob service]] call, not a YouTube clean. Phone +91 99025 52888 as printed on [[/contact|contact]].',
        ],
      },
      {
        heading: 'Safe home care versus a booked visit',
        body: [
          'When the hob is cool, lift caps and heads, wash residue, and keep ports clear. Put parts back in the same orientation. Never enlarge a nozzle. Never wrap tape around a gas joint as a “fix”.',
          'Uneven cooking after a careful clean, a burner that will not hold, or a click with no flame belongs on [[/services/gas-hob-flame-problems|gas hob flame problems]] and [[/services/hob-cleaning|hob cleaning]]. Spare caps and igniters are listed under [[/services/gas-hob-burner-spare-parts|burner spare parts]] when the part has actually failed.',
        ],
      },
      {
        heading: 'One burner dead is not always a new hob',
        body: [
          'A single burner that will not light is often the igniter, the lead, or a wet electrode after mopping. Read [[/guides/elica-hob-not-igniting|hob not igniting]] before you order a full cooktop. We are independent — not an OEM shop that will only sell a new appliance.',
          'Jobs in [[/areas/jayanagar|Jayanagar]] and [[/areas/jp-nagar|JP Nagar]] often combine hob service with a chimney oil visit on the same counter. Say both symptoms on the form so the bag is packed once.',
        ],
      },
      {
        heading: 'Questions on flame',
        body: [
          'Is a small yellow tip always carbon monoxide? It is a sign the mix is wrong; it is not a diagnosis from a photo. We correct ports and seating on site. Range cookers sit on [[/services/cooking-range-service|cooking range service]] if your unit is not a built-in hob.',
        ],
      },
    ],
    takeaways: [
      'Blue steady flame is the goal on each burner.',
      'Blocked ports cause many yellow and weak flames.',
      'Gas smell or an unsafe flame is an immediate booking, not a wait.',
    ],
    relatedServiceIds: ['gas-hob-flame-problems', 'gas-hob-service'],
    relatedSlugs: ['elica-hob-not-igniting', 'how-to-book-elica-service-in-bangalore'],
  },
  {
    slug: 'built-in-microwave-care-tips',
    title: 'Built-in Microwave Care in Bangalore Kitchens',
    excerpt:
      'Ventilation, spill habits, and when to book Elica built-in microwave service — sparks, no heat, and cabinets that trap heat.',
    category: 'Microwave',
    publishedAt: '2026-07-08',
    updatedAt: UPDATED,
    readTime: '10 min',
    keywords: [
      'built in microwave care',
      'microwave service tips',
      'Elica built-in microwave Bangalore',
    ],
    introduction:
      'Built-in microwaves run hotter in enclosed cabinets than countertop models. Good ventilation, quick spill cleaning, and timely service prevent overheating and uneven heating. This is care and booking guidance, not a magnetron DIY.',
    image: FIELD,
    inlineImage: {
      src: HERO,
      alt: 'Built-in kitchen microwave service',
    },
    sections: [
      {
        heading: 'Daily habits that actually extend life',
        body: [
          'Wipe spills before they bake onto the cavity. Keep the turntable and ring clean so the plate rotates. Do not run the microwave empty. Do not use metal trim dishes. If the door mesh is damaged, stop using the unit and book [[/services/built-in-microwave-service|built-in microwave service]].',
        ],
      },
      {
        heading: 'Cabinet airflow is part of the appliance',
        body: [
          'Builder cut-outs that ignore the model’s vent gap are a common reason units trip or heat unevenly in [[/areas/whitefield|Whitefield]] and [[/areas/hsr-layout|HSR Layout]] towers. Blocking the vent with a chopping board “for extra storage” is the same fault with a different excuse.',
          'We diagnose door switches, turntable motors, and control faults on a booked visit. We do not open a live high-voltage capacitor as a home demo. Independent repair on the published [[/services|services]] list.',
        ],
      },
      {
        heading: 'When to stop using it and call',
        body: [
          'Sparks that are not a stray fork, no heat with a working lamp, a door that does not latch, or a unit that stops mid-cycle. Share the model sticker photo on [[/contact|contact]]. Chimney and hob notes such as [[/guides/how-often-to-clean-kitchen-chimney|chimney cleaning schedule]] are separate appliances — say which unit failed.',
        ],
      },
    ],
    takeaways: [
      'Keep built-in vents clear inside the cabinet.',
      'Clean spills before they carbonise.',
      'Sparks, no heat, or a bad door latch are service calls.',
    ],
    relatedServiceIds: ['built-in-microwave-service'],
    relatedSlugs: ['kitchen-appliance-monsoon-maintenance', 'how-to-book-elica-service-in-bangalore'],
  },
  {
    slug: 'kitchen-appliance-monsoon-maintenance',
    title: 'Monsoon Checklist for Chimney, Hob and Microwave',
    excerpt:
      'Humidity in Bangalore makes grease stickier and motors noisier. A short seasonal checklist before the rains get into the kitchen electrics.',
    category: 'Maintenance',
    publishedAt: '2026-07-15',
    updatedAt: UPDATED,
    readTime: '10 min',
    keywords: [
      'monsoon kitchen appliance care',
      'chimney maintenance rainy season',
      'Bangalore kitchen service tips',
    ],
    introduction:
      'Bangalore monsoons raise humidity. Grease gets stickier, motors rust faster, and hob igniters fail after wet mopping. A short seasonal pass is cheaper than a dead fan in August.',
    image: HERO,
    inlineImage: {
      src: FIELD,
      alt: 'Kitchen appliance check before Bangalore monsoon',
    },
    sections: [
      {
        heading: 'Chimney before the rains thicken the grease',
        body: [
          'If suction is already weak, book [[/services/chimney-general-cleaning|general cleaning]] or [[/services/chimney-deep-cleaning|deep cleaning]] before peak wet weeks. Moisture plus oil is a film that a dry-season wipe will not cut. Noise after the rains is often bearings — [[/guides/elica-chimney-making-noise|noisy chimney]], not a “monsoon setting” on the remote.',
        ],
      },
      {
        heading: 'Hob and cooktop in a wet kitchen',
        body: [
          'Dry burner areas after cleaning. Standing water around electrodes is a classic no-spark in [[/areas/jayanagar|Jayanagar]] ground-floor kitchens. Flame colour still follows [[/guides/gas-hob-flame-problems-explained|hob flame problems]]. Ignition that dies after mopping is [[/guides/elica-hob-not-igniting|hob not igniting]].',
        ],
      },
      {
        heading: 'Microwave and sockets',
        body: [
          'Watch for musty smell, tripping, or moisture at the cabinet back. Do not ignore intermittent power during humid weeks. [[/services/built-in-microwave-service|Microwave service]] is the published route. Coverage remains the [[/areas|areas]] list including [[/areas/indiranagar|Indiranagar]] and [[/areas/koramangala|Koramangala]].',
        ],
      },
    ],
    takeaways: [
      'Humidity speeds grease and rust problems.',
      'Pre-monsoon chimney cleaning reduces suction complaints.',
      'Wet igniters and damp sockets are booking reasons, not wait-and-see.',
    ],
    relatedServiceIds: ['chimney-general-cleaning', 'hob-cleaning', 'gas-hob-service'],
    relatedSlugs: ['how-often-to-clean-kitchen-chimney', 'elica-hob-not-igniting'],
  },
  {
    slug: 'when-to-book-chimney-dismantle-cleaning',
    title: 'When Chimney Dismantle Cleaning Is the Right Job',
    excerpt:
      'General versus deep versus dismantle cleaning for heavily used Elica chimneys — so you do not pay for a teardown when a filter wash would have done.',
    category: 'Chimney',
    publishedAt: '2026-07-22',
    updatedAt: UPDATED,
    readTime: '11 min',
    keywords: [
      'chimney dismantle cleaning',
      'deep cleaning vs dismantle cleaning',
      'Elica chimney overhaul',
    ],
    introduction:
      'Not every chimney needs full dismantling. Choosing the right service level restores suction without turning a routine kitchen into a half-day teardown.',
    image: HERO,
    inlineImage: {
      src: FIELD,
      alt: 'Dismantle cleaning of a kitchen chimney fan housing',
    },
    sections: [
      {
        heading: 'Three job types on the published menu',
        body: [
          '[[/services/chimney-general-cleaning|General cleaning]] is filters, mesh, and light grease. [[/services/chimney-deep-cleaning|Deep cleaning]] is intensive degreasing of fan housing and accessible internals. [[/services/chimney-dismantle-cleaning|Dismantle cleaning]] is partial or full teardown when ducts and internals are blocked beyond a wash in place.',
          'Starting rates for those three sit in [[/guides/elica-chimney-cleaning-cost-bangalore|the cost guide]]. Catalogue “from” prices are not a frozen invoice; access and parts change the total.',
        ],
      },
      {
        heading: 'Signs dismantle is worth it',
        body: [
          'Suction still poor after a documented deep clean. Thick carbon that a degreaser cannot lift in the housing. Oil dripping again within days of a mesh-only visit. High-rise shared ducts in [[/areas/whitefield|Whitefield]] that have not been opened in years.',
          'If the only complaint is a sticky outer glass, start with general. If smoke hangs and oil drips, read [[/guides/chimney-dripping-oil-causes-and-fixes|oil drip]] and [[/guides/fix-chimney-suction-problem|weak suction]] and expect deep or dismantle.',
        ],
      },
      {
        heading: 'What service day looks like',
        body: [
          'Kitchen protection, dismantle of required parts, clean, reassemble, suction test. Ask to see the fan before and after if you want proof the job was not a wipe. Independent technicians — not an Elica company van with a hologram.',
          'Book with locality on [[/contact|contact]]. [[/areas/hsr-layout|HSR Layout]], [[/areas/marathahalli|Marathahalli]] and [[/areas/koramangala|Koramangala]] are on the [[/areas|areas]] list.',
        ],
      },
    ],
    takeaways: [
      'Dismantle is for heavy buildup, not every annual visit.',
      'Routine kitchens often need only general or deep cleaning.',
      'Persistent drip and weak suction after a deep clean are the signals.',
    ],
    relatedServiceIds: ['chimney-dismantle-cleaning', 'chimney-deep-cleaning'],
    relatedSlugs: [
      'how-often-to-clean-kitchen-chimney',
      'elica-chimney-cleaning-cost-bangalore',
      'chimney-dripping-oil-causes-and-fixes',
    ],
  },
  {
    slug: 'how-to-book-elica-service-in-bangalore',
    title: 'How to Book Elica Appliance Service in Bangalore',
    excerpt:
      'What to send on the booking form, how confirmation works, and how to pick chimney, hob, or microwave service on elicservicecenter.com.',
    category: 'Maintenance',
    publishedAt: '2026-07-28',
    updatedAt: UPDATED,
    readTime: '9 min',
    keywords: [
      'book Elica service Bangalore',
      'chimney service booking',
      'Elica technician near me',
    ],
    introduction:
      'Booking is fastest when you share appliance type, symptom, pincode, and a time window. This desk is independent Elica repair and cleaning in Bangalore — not an OEM authorised centre.',
    image: FIELD,
    inlineImage: {
      src: HERO,
      alt: 'Booking kitchen appliance service in Bangalore',
    },
    sections: [
      {
        heading: 'Pick the menu item that matches the symptom',
        body: [
          'Cleaning: [[/services/chimney-general-cleaning|general]], [[/services/chimney-deep-cleaning|deep]], [[/services/chimney-dismantle-cleaning|dismantle]], or [[/services/hob-cleaning|hob cleaning]]. Repair: [[/services/chimney-not-working|not working]], [[/services/chimney-fan-not-working|fan]], [[/services/chimney-dripping-oil|dripping oil]], [[/services/chimney-suction-problem|suction]], [[/services/gas-hob-flame-problems|flame]], [[/services/built-in-microwave-service|microwave]].',
          'If you are unsure, describe the symptom in the form on [[/contact|contact]]. Guides such as [[/guides/how-often-to-clean-kitchen-chimney|cleaning schedule]] help you choose; they are not a substitute for saying “oil is dripping on the rear burner”.',
        ],
      },
      {
        heading: 'What happens after you submit',
        body: [
          'The team reviews the request and typically confirms within about two hours on working days — that timing is already on the site FAQs. A technician is assigned from published coverage on [[/areas|areas]], including [[/areas/whitefield|Whitefield]], [[/areas/indiranagar|Indiranagar]] and [[/areas/jp-nagar|JP Nagar]], with same-day options when a slot is open.',
          'Phone +91 99025 52888. Address line on the site is Bangalore, Karnataka — we do not invent a street pin that is not published.',
        ],
      },
      {
        heading: 'Prepare the kitchen',
        body: [
          'Clear access under and around the appliance. Note smells, sounds, or error lights. Keep someone who can approve work on site. Cost context is in [[/guides/elica-chimney-cleaning-cost-bangalore|cleaning and repair cost]].',
        ],
      },
    ],
    takeaways: [
      'Share symptom and pincode for faster assignment.',
      'Confirmation is typically within about two hours on working days.',
      'This is independent repair, booked from the published menu.',
    ],
    relatedServiceIds: ['chimney-general-cleaning', 'gas-hob-service'],
    relatedSlugs: ['elica-chimney-cleaning-cost-bangalore', 'how-often-to-clean-kitchen-chimney'],
  },
  {
    slug: 'elica-chimney-cleaning-cost-bangalore',
    title: 'Elica Chimney Cleaning and Repair Cost in Bangalore',
    excerpt:
      'What drives Elica chimney cleaning and repair pricing in Bangalore, starting rates by job type, and how to get an on-site quote before work starts.',
    category: 'Chimney',
    publishedAt: '2026-09-11',
    updatedAt: UPDATED,
    readTime: '11 min',
    keywords: [
      'elica chimney cleaning cost bangalore',
      'chimney service charges bangalore',
      'elica chimney repair price',
    ],
    introduction:
      'Elica chimney cleaning cost in Bangalore depends on grease level, whether parts need opening or replacement, and the job type. Use the starting rates below as a guide, then share the issue for a quote before work begins.',
    image: HERO,
    inlineImage: {
      src: FIELD,
      alt: 'Elica chimney cleaning visit with starting service rates',
    },
    sections: [
      {
        heading: 'Starting service rates already on the catalogue',
        body: [
          '[[/services/chimney-general-cleaning|General chimney cleaning]] starts from ₹999 — routine filter wash and suction check. [[/services/chimney-deep-cleaning|Deep cleaning]] starts from ₹1,499 — heavier grease inside filters and fan housing. [[/services/chimney-dismantle-cleaning|Dismantle cleaning]] starts from ₹1,999 — teardown for severe blockage.',
          'Symptom visits such as [[/services/chimney-dripping-oil|dripping oil]] start from ₹1,199 and [[/services/chimney-suction-problem|weak suction]] from ₹1,099 on the published service pages. These are catalogue starting prices on elicservicecenter.com, not a fixed invoice. Spare parts, duct access, and model condition can change the total.',
        ],
      },
      {
        heading: 'What changes the final bill',
        body: [
          'Oil and carbon inside filters and ducts. Whether the visit is clean-only or needs a motor, switch, lamp, or gasket. Apartment duct length and install height. Same-day slots in [[/areas/whitefield|Whitefield]] or [[/areas/koramangala|Koramangala]] affect timing more often than the base cleaning rate.',
          'A mesh wipe sold as “deep clean” is how other ads undercut a number. Ask what will be opened. Our notes on [[/guides/when-to-book-chimney-dismantle-cleaning|dismantle versus deep]] and [[/guides/how-often-to-clean-kitchen-chimney|how often to clean]] exist so you can match the job to the kitchen.',
        ],
      },
      {
        heading: 'How to get a number you can agree',
        body: [
          'Use the form on [[/contact|contact]] with pincode, symptom, and a photo if you have one. Confirmation is typically within about two hours on working days. You pay for agreed work. Independent — not OEM price list, not a pan-India franchise tariff.',
        ],
      },
    ],
    takeaways: [
      'Cost tracks job type: general → deep → dismantle.',
      'Catalogue “from” prices are starting points.',
      'Share pincode and symptom before the visit.',
    ],
    relatedServiceIds: [
      'chimney-general-cleaning',
      'chimney-deep-cleaning',
      'chimney-dismantle-cleaning',
      'chimney-dripping-oil',
      'chimney-suction-problem',
    ],
    relatedSlugs: [
      'when-to-book-chimney-dismantle-cleaning',
      'how-to-book-elica-service-in-bangalore',
      'how-often-to-clean-kitchen-chimney',
    ],
  },
  {
    slug: 'elica-chimney-making-noise',
    title: 'Noisy Elica Chimney: Rattle, Grind and Vibration',
    excerpt:
      'When a kitchen chimney gets loud after cooking or after pipe work — bearings, packed fans, loose glass, and what Bangalore technicians check first.',
    category: 'Chimney',
    publishedAt: '2026-11-18',
    updatedAt: UPDATED,
    readTime: '11 min',
    keywords: [
      'chimney making noise',
      'Elica chimney loud sound',
      'kitchen chimney vibration Bangalore',
    ],
    introduction:
      'A chimney should move air, not fill the hall with a grind. Noise after years of oil, or noise that started the week a duct was pushed, are different jobs. This note is for Elica wall-mount and auto-clean hoods we already service in Bangalore.',
    image: HERO,
    inlineImage: {
      src: FIELD,
      alt: 'Technician checking a noisy kitchen chimney motor',
    },
    sections: [
      {
        heading: 'Name the sound before you name the spare',
        body: [
          'Rattle on high speed is often a loose filter, lamp holder, or glass. Grind that worsens with time is often bearings. A howl after someone bent the outlet pipe is turbulence, not a “high-power motor”. Vibration that shakes the cabinet may be an unbalanced fan packed with grease.',
          'Book [[/services/chimney-making-noise|chimney making noise]] rather than [[/services/chimney-fan-not-working|fan not working]] if the fan still moves air. If it barely spins, use the fan page. If it does not start, [[/services/chimney-not-working|chimney not working]].',
        ],
      },
      {
        heading: 'Oil load is a noise source',
        body: [
          'A packed squirrel-cage is out of balance. Deep cleaning in [[/guides/when-to-book-chimney-dismantle-cleaning|dismantle cleaning]] or [[/services/chimney-deep-cleaning|deep cleaning]] often drops the sound without a new motor. Replacing a motor into a still-greasy housing repeats the noise in a month.',
          'Flats in [[/areas/marathahalli|Marathahalli]] and [[/areas/hsr-layout|HSR Layout]] report monsoon rust noise; that is in the [[/guides/kitchen-appliance-monsoon-maintenance|monsoon checklist]].',
        ],
      },
      {
        heading: 'After pipe or install work',
        body: [
          'If the hood got loud the day a duct was shortened or a clamp was left rattling, say so on [[/contact|contact]]. We check clamps, backdraft flap, and whether the pipe is touching a cabinet wall. Independent repair; we will not pretend a kink is a warranty motor.',
        ],
      },
      {
        heading: 'Questions on noise',
        body: [
          'Is a louder fan always dying? No. Is a sudden metallic grind worth waiting a week? No — bearings that seize become a fan job. Related reading: [[/guides/fix-chimney-suction-problem|weak suction]] when noise and poor airflow arrive together.',
        ],
      },
    ],
    takeaways: [
      'Match the sound to filter, bearing, or duct — not a generic motor SKU.',
      'Grease imbalance is a common loud fan.',
      'Noise that starts after pipe work is often mechanical, not electronic.',
    ],
    relatedServiceIds: ['chimney-making-noise', 'chimney-fan-not-working'],
    relatedSlugs: ['fix-chimney-suction-problem', 'when-to-book-chimney-dismantle-cleaning'],
  },
  {
    slug: 'elica-hob-not-igniting',
    title: 'Elica Hob Not Igniting: Click, Spark and One Dead Burner',
    excerpt:
      'What to check when an Elica gas hob clicks without lighting in Bangalore, when a wet igniter is enough, and when burner parts need a visit.',
    category: 'Hob',
    publishedAt: '2026-11-18',
    updatedAt: UPDATED,
    readTime: '11 min',
    keywords: [
      'hob not igniting',
      'Elica hob no spark',
      'gas hob burner not lighting Bangalore',
    ],
    introduction:
      'A failed spark is often the igniter or the lead, not a reason to order a new hob. A click with a spark that will not light is often a blocked cap. Neither starts on a marketplace listing.',
    image: FIELD,
    inlineImage: {
      src: HERO,
      alt: 'Gas hob ignition check on a Bangalore cooktop',
    },
    sections: [
      {
        heading: 'Click with no spark versus spark with no flame',
        body: [
          'No spark: dry the electrode area after mopping, confirm the hob has power if it is an electric-ignition model, and do not flood the trough. Spark but no flame: seating of the cap, blocked ports, or gas not reaching that burner — then [[/guides/gas-hob-flame-problems-explained|flame problems]] overlaps this note.',
          'Gas smell: stop, close the tap, call [[/contact|contact]] on +91 99025 52888. That is not a “keep clicking” situation.',
        ],
      },
      {
        heading: 'One burner versus the whole hob',
        body: [
          'One dead burner with the others fine is usually local: electrode, cap, or nozzle. Whole hob dead is supply, fuse, or ignition box. [[/services/gas-hob-service|Gas hob service]] and [[/services/gas-hob-burner-spare-parts|burner spare parts]] are the menu items. [[/services/hob-cleaning|Hob cleaning]] if residue is the only fault.',
        ],
      },
      {
        heading: 'What we will not do',
        body: [
          'We will not enlarge jets. We will not leave a leaking tap because “it still lights”. Independent, not OEM. Coverage includes [[/areas/indiranagar|Indiranagar]], [[/areas/koramangala|Koramangala]] and [[/areas/jayanagar|Jayanagar]] on the [[/areas|areas]] list.',
          'If the chimney is also oily on the same counter, add [[/guides/how-often-to-clean-kitchen-chimney|chimney cleaning]] to the same booking so the visit is one trip.',
        ],
      },
    ],
    takeaways: [
      'Separate no-spark from spark-but-no-flame.',
      'One burner rarely means a new hob.',
      'Gas smell is an immediate stop and a phone call.',
    ],
    relatedServiceIds: ['gas-hob-service', 'gas-hob-flame-problems', 'gas-hob-burner-spare-parts'],
    relatedSlugs: ['gas-hob-flame-problems-explained', 'how-to-book-elica-service-in-bangalore'],
  },
]

export function getAllGuides(): GuidePost[] {
  return [...guidePosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function getGuideBySlug(slug: string): GuidePost | undefined {
  return guidePosts.find((guide) => guide.slug === slug)
}

export function getGuidesForService(serviceId: string, limit = 3): GuidePost[] {
  return guidePosts
    .filter((guide) => guide.relatedServiceIds.includes(serviceId))
    .slice(0, limit)
}

export function relatedGuides(post: GuidePost, limit = 4): GuidePost[] {
  const seen = new Set<string>([post.slug])
  const picked: GuidePost[] = []
  for (const slug of post.relatedSlugs ?? []) {
    const item = getGuideBySlug(slug)
    if (item && !seen.has(item.slug)) {
      seen.add(item.slug)
      picked.push(item)
    }
  }
  for (const item of getAllGuides()) {
    if (picked.length >= limit) break
    if (seen.has(item.slug)) continue
    seen.add(item.slug)
    picked.push(item)
  }
  return picked.slice(0, limit)
}

export function formatGuideDate(date: string): string {
  return new Date(date).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
