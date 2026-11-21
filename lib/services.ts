export type CatalogService = {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  icon: string
  price: string
  warranty: string
  keywords: string[]
  features: string[]
  process: string[]
  faqs: Array<{ question: string; answer: string }>
  category: 'chimney' | 'hob' | 'microwave' | 'range'
}

export const catalogServices: CatalogService[] = [
  {
    id: 'chimney-general-cleaning',
    name: 'Elica Chimney General Cleaning',
    shortDescription: 'Routine Elica chimney cleaning for better suction and kitchen hygiene in Bangalore.',
    fullDescription:
      'Book chimney general cleaning in Bangalore for regular grease removal, filter wash, and suction check. Ideal preventive service for Elica kitchen chimneys used daily.',
    icon: '🔥',
    price: 'From ₹999',
    warranty: 'Service warranty',
    keywords: [
      'chimney general cleaning Bangalore',
      'Elica chimney cleaning',
      'kitchen chimney service near me',
    ],
    features: [
      'Filter cleaning and reassembly',
      'Exterior and mesh degreasing',
      'Basic suction performance check',
      'Oil collector cleaning',
      'Safe kitchen-area protection during service',
    ],
    process: [
      'Inspect chimney model and usage condition',
      'Remove and clean washable filters',
      'Clean mesh and accessible grease points',
      'Check fan operation and suction',
      'Reassemble and demonstrate results',
    ],
    faqs: [
      {
        question: 'How often should I book chimney general cleaning?',
        answer:
          'For regular Indian cooking, book chimney general cleaning every 3–6 months to maintain suction and reduce oil buildup.',
      },
      {
        question: 'Is chimney general cleaning enough for heavy oil deposits?',
        answer:
          'For light to moderate grease, general cleaning is enough. Heavy buildup may need chimney deep cleaning or dismantle cleaning.',
      },
    ],
    category: 'chimney',
  },
  {
    id: 'chimney-deep-cleaning',
    name: 'Elica Chimney Deep Cleaning',
    shortDescription: 'Deep grease removal service for Elica chimneys with poor suction and sticky oil.',
    fullDescription:
      'Chimney deep cleaning in Bangalore targets stubborn grease inside ducts, filters, and fan housing. Restores suction and reduces odor for heavily used Elica chimneys.',
    icon: '🧽',
    price: 'From ₹1,499',
    warranty: 'Service warranty',
    keywords: [
      'chimney deep cleaning Bangalore',
      'kitchen chimney deep clean',
      'Elica chimney degreasing',
    ],
    features: [
      'Intensive grease and carbon removal',
      'Filter and baffle deep wash',
      'Fan housing cleaning',
      'Suction restoration check',
      'Odor reduction treatment',
    ],
    process: [
      'Diagnose clogged filters and duct grease',
      'Deep-clean filters and internal surfaces',
      'Clean fan and oil path carefully',
      'Test airflow and noise levels',
      'Share maintenance tips after service',
    ],
    faqs: [
      {
        question: 'How much does this service cost in Bangalore?',
        answer:
          'Starting rates are listed on our chimney cost guide (/guides/elica-chimney-cleaning-cost-bangalore). Final pricing depends on condition and parts — request a free quote before work begins.',
      },
      {
        question: 'When do I need chimney deep cleaning?',
        answer:
          'Choose deep cleaning if suction is weak, filters are sticky, or general cleaning was done long ago.',
      },
      {
        question: 'How long does chimney deep cleaning take?',
        answer: 'Most deep cleaning jobs in Bangalore take about 60–90 minutes depending on grease level.',
      },
    ],
    category: 'chimney',
  },
  {
    id: 'chimney-dismantle-cleaning',
    name: 'Elica Chimney Dismantle Cleaning',
    shortDescription: 'Complete dismantle cleaning for Elica chimneys with severe oil blockage.',
    fullDescription:
      'Chimney dismantle cleaning in Bangalore includes safe dismantling of key parts for thorough degreasing. Best for severe oil drip, blocked suction, and long-pending maintenance.',
    icon: '🛠️',
    price: 'From ₹1,999',
    warranty: 'Service warranty',
    keywords: [
      'chimney dismantle cleaning Bangalore',
      'chimney full service dismantle',
      'Elica chimney overhaul cleaning',
    ],
    features: [
      'Safe dismantling of cleanable modules',
      'Complete grease path cleaning',
      'Motor area inspection',
      'Reassembly with alignment check',
      'Final suction and leak check',
    ],
    process: [
      'Protect kitchen surfaces and disconnect power',
      'Dismantle filters, panels, and serviceable parts',
      'Deep clean each component',
      'Inspect motor and wiring safety',
      'Reassemble, test, and hand over',
    ],
    faqs: [
      {
        question: 'Is dismantle cleaning safe for Elica chimneys?',
        answer:
          'Yes. Our technicians follow model-safe dismantling steps and reassemble with suction and safety checks.',
      },
      {
        question: 'Will dismantle cleaning stop oil dripping?',
        answer:
          'It removes heavy grease that causes dripping in many cases. If parts are worn, we recommend genuine replacements.',
      },
    ],
    category: 'chimney',
  },
  {
    id: 'chimney-not-working',
    name: 'Elica Chimney Not Working',
    shortDescription: 'Diagnosis and repair when your Elica chimney does not switch on or run.',
    fullDescription:
      'Get fast help for chimney not working issues in Bangalore — no power, dead switches, tripped circuits, or motor failure. We diagnose and repair Elica chimneys on-site.',
    icon: '⚡',
    price: 'From ₹799',
    warranty: 'Parts & service warranty',
    keywords: [
      'chimney not working Bangalore',
      'Elica chimney repair',
      'kitchen chimney not starting',
    ],
    features: [
      'Power and switch diagnosis',
      'Motor and capacitor check',
      'Control board inspection',
      'On-site repair where possible',
      'Genuine spare guidance if needed',
    ],
    process: [
      'Verify power supply and switch panel',
      'Test motor, capacitor, and controls',
      'Identify failed part or wiring issue',
      'Repair or replace approved parts',
      'Confirm chimney starts and runs stably',
    ],
    faqs: [
      {
        question: 'Why is my chimney not working suddenly?',
        answer:
          'Common causes include power issues, faulty switch, failed capacitor, motor fault, or internal wiring problems.',
      },
      {
        question: 'Can you repair chimney not working the same day?',
        answer:
          'Yes, many chimney not working cases in Bangalore are fixed same day after diagnosis and parts availability.',
      },
    ],
    category: 'chimney',
  },
  {
    id: 'chimney-fan-not-working',
    name: 'Elica Chimney Fan Not Working',
    shortDescription: 'Fix Elica chimney fan problems including no rotation, low speed, or dead motor.',
    fullDescription:
      'Chimney fan is not working? We repair fan motor, capacitor, and blade issues for Elica chimneys across Bangalore with suction testing after service.',
    icon: '🌀',
    price: 'From ₹899',
    warranty: 'Parts & service warranty',
    keywords: [
      'chimney fan not working',
      'chimney motor repair Bangalore',
      'Elica chimney fan service',
    ],
    features: [
      'Fan motor health check',
      'Capacitor and speed control testing',
      'Blade and housing inspection',
      'Noise and vibration check',
      'Post-repair airflow validation',
    ],
    process: [
      'Inspect fan assembly and electrical feed',
      'Test motor and capacitor values',
      'Clean obstructed fan path if required',
      'Repair or replace faulty components',
      'Run multi-speed fan verification',
    ],
    faqs: [
      {
        question: 'Why does chimney fan stop rotating?',
        answer:
          'Usually due to motor wear, failed capacitor, grease lock, or electrical fault in the fan circuit.',
      },
      {
        question: 'Do you replace chimney fan motors?',
        answer:
          'Yes. When repair is not viable, we fit compatible genuine/approved fan motor parts.',
      },
    ],
    category: 'chimney',
  },
  {
    id: 'chimney-dripping-oil',
    name: 'Elica Chimney Dripping Oil',
    shortDescription: 'Stop chimney oil drip with cleaning, seal checks, and filter service in Bangalore.',
    fullDescription:
      'Chimney dripping oil is a common Bangalore kitchen issue. We clean oil paths, check filters, and fix drip points so your Elica chimney runs cleaner.',
    icon: '🛢️',
    price: 'From ₹1,199',
    warranty: 'Service warranty',
    keywords: [
      'chimney dripping oil',
      'chimney oil leak Bangalore',
      'Elica chimney oil drip fix',
    ],
    features: [
      'Oil collector and filter service',
      'Grease path cleaning',
      'Drip-point inspection',
      'Seal and alignment check',
      'Prevention tips for daily cooking',
    ],
    process: [
      'Locate drip source and oil accumulation',
      'Clean filters and collector cups',
      'Degrease critical internal paths',
      'Check installation tilt and seals',
      'Validate no active drip after service',
    ],
    faqs: [
      {
        question: 'How much does this service cost in Bangalore?',
        answer:
          'Starting rates are listed on our chimney cost guide (/guides/elica-chimney-cleaning-cost-bangalore). Final pricing depends on condition and parts — request a free quote before work begins.',
      },
      {
        question: 'Why is my chimney dripping oil?',
        answer:
          'Oil drip usually happens from overfilled collectors, clogged filters, heavy grease, or installation angle issues.',
      },
      {
        question: 'Will cleaning stop chimney oil dripping permanently?',
        answer:
          'Cleaning solves most cases. Regular maintenance every few months helps prevent repeat dripping.',
      },
    ],
    category: 'chimney',
  },
  {
    id: 'chimney-suction-problem',
    name: 'Elica Chimney Suction Problem',
    shortDescription: 'Restore weak chimney suction with cleaning, duct checks, and fan service.',
    fullDescription:
      'Facing chimney suction problem in Bangalore? We fix weak airflow caused by grease, blocked ducts, filter clogging, or fan inefficiency on Elica chimneys.',
    icon: '💨',
    price: 'From ₹1,099',
    warranty: 'Service warranty',
    keywords: [
      'chimney suction problem',
      'chimney low suction Bangalore',
      'Elica chimney airflow repair',
    ],
    features: [
      'Airflow and pressure check',
      'Filter clog diagnosis',
      'Duct path inspection',
      'Fan efficiency assessment',
      'Suction improvement service',
    ],
    process: [
      'Measure current suction performance',
      'Clean or replace clogged filters',
      'Clear grease restrictions',
      'Inspect duct bends and outlet',
      'Retest suction after corrective work',
    ],
    faqs: [
      {
        question: 'How much does this service cost in Bangalore?',
        answer:
          'Starting rates are listed on our chimney cost guide (/guides/elica-chimney-cleaning-cost-bangalore). Final pricing depends on condition and parts — request a free quote before work begins.',
      },
      {
        question: 'What causes chimney suction problem?',
        answer:
          'Common causes are dirty filters, grease blockage, weak fan motor, poor ducting, or delayed maintenance.',
      },
      {
        question: 'Can suction be restored without spare parts?',
        answer:
          'Often yes, with deep cleaning and duct correction. Worn motors or damaged parts may need replacement.',
      },
    ],
    category: 'chimney',
  },
  {
    id: 'chimney-making-noise',
    name: 'Elica Chimney Making Noise',
    shortDescription: 'Reduce chimney vibration and unusual noise with balancing and motor service.',
    fullDescription:
      'Chimney making noise or vibrating? We diagnose loose parts, unbalanced fans, and motor issues for quieter Elica chimney operation in Bangalore homes.',
    icon: '🔊',
    price: 'From ₹899',
    warranty: 'Parts & service warranty',
    keywords: [
      'chimney making noise',
      'noisy kitchen chimney repair',
      'Elica chimney vibration fix',
    ],
    features: [
      'Noise source diagnosis',
      'Fan balancing and tightening',
      'Motor bearing inspection',
      'Mounting alignment check',
      'Quiet-run verification',
    ],
    process: [
      'Identify noise type and source',
      'Inspect fan blades and housing',
      'Tighten mounts and clean debris',
      'Service motor if required',
      'Confirm reduced noise at all speeds',
    ],
    faqs: [
      {
        question: 'Is chimney noise dangerous?',
        answer:
          'Unusual grinding or rattling can indicate loose parts or motor wear and should be serviced promptly.',
      },
      {
        question: 'Can you fix chimney making noise same day?',
        answer:
          'Many noise issues are fixed same day. Motor replacement depends on part availability.',
      },
    ],
    category: 'chimney',
  },
  {
    id: 'cooktop-stove-service',
    name: 'Elica Cooktop Stove Service',
    shortDescription: 'Complete cooktop stove service for ignition, burners, and cleaning in Bangalore.',
    fullDescription:
      'Professional cooktop stove service in Bangalore covering gas/electric cooktops — ignition repair, burner cleaning, and safety checks for reliable daily cooking.',
    icon: '🍳',
    price: 'From ₹799',
    warranty: 'Parts & service warranty',
    keywords: [
      'cooktop stove service Bangalore',
      'cooktop repair near me',
      'kitchen stove service',
    ],
    features: [
      'Ignition system service',
      'Burner and pan support cleaning',
      'Gas leak safety check',
      'Knob and control inspection',
      'Performance test after service',
    ],
    process: [
      'Inspect cooktop condition and flame pattern',
      'Clean burners and ports',
      'Service ignition components',
      'Check gas line safety',
      'Test all burners and controls',
    ],
    faqs: [
      {
        question: 'What is included in cooktop stove service?',
        answer:
          'Cleaning, ignition check, burner service, safety inspection, and performance testing are included.',
      },
      {
        question: 'Do you service both gas and electric cooktops?',
        answer: 'Yes. We service popular gas and electric cooktop models used in Bangalore kitchens.',
      },
    ],
    category: 'hob',
  },
  {
    id: 'gas-hob-service',
    name: 'Elica Gas Hob Service',
    shortDescription: 'Expert gas hob service for Elica and kitchen hobs with flame and safety checks.',
    fullDescription:
      'Book gas hob service in Bangalore for weak flame, ignition delay, uneven heating, and general maintenance. Certified technicians with transparent pricing.',
    icon: '🔥',
    price: 'From ₹849',
    warranty: 'Parts & service warranty',
    keywords: [
      'gas hob service Bangalore',
      'Elica gas hob repair',
      'hob service near me',
    ],
    features: [
      'Full hob diagnostic',
      'Burner and nozzle service',
      'Auto-ignition repair',
      'Flame failure safety check',
      'Post-service cooking test',
    ],
    process: [
      'Diagnose flame and ignition complaints',
      'Clean and service burners',
      'Repair ignition module if needed',
      'Verify gas safety and seals',
      'Demonstrate stable flame output',
    ],
    faqs: [
      {
        question: 'How often should gas hob service be done?',
        answer:
          'Schedule gas hob service every 6–12 months, or sooner if ignition/flame issues appear.',
      },
      {
        question: 'Do you use genuine hob spare parts?',
        answer: 'Yes. We recommend and fit genuine/approved spare parts based on model compatibility.',
      },
    ],
    category: 'hob',
  },
  {
    id: 'gas-hob-burner-spare-parts',
    name: 'Elica Gas Hob Burner Spare Parts',
    shortDescription: 'Genuine gas hob burner spare parts supply and fitting for Bangalore kitchens.',
    fullDescription:
      'Need gas hob burner spare parts? We supply and install compatible burner caps, rings, nozzles, and related hob parts with fitting and flame testing.',
    icon: '🔧',
    price: 'From ₹499',
    warranty: 'Parts warranty',
    keywords: [
      'gas hob burner spare parts',
      'hob burner replacement Bangalore',
      'Elica hob spare parts',
    ],
    features: [
      'Model-compatible spare identification',
      'Burner cap and ring replacement',
      'Nozzle and jet service',
      'Fitment and alignment',
      'Flame quality validation',
    ],
    process: [
      'Identify hob model and failed burner parts',
      'Source compatible spare parts',
      'Replace worn burner components',
      'Calibrate flame output',
      'Final safety and cooking check',
    ],
    faqs: [
      {
        question: 'Which gas hob burner spare parts do you replace?',
        answer:
          'Common parts include burner caps, burner rings, nozzles, electrode tips, and related fittings.',
      },
      {
        question: 'Can spare parts be fitted on the same visit?',
        answer:
          'If parts are available for your model, same-visit fitting is possible. Else we schedule a quick follow-up.',
      },
    ],
    category: 'hob',
  },
  {
    id: 'built-in-microwave-service',
    name: 'Elica Built-in Microwave Service',
    shortDescription: 'Built-in microwave repair and service for heating, turntable, and panel issues.',
    fullDescription:
      'Built in microwave service in Bangalore for no-heat, turntable faults, door issues, and control errors. Safe on-site diagnosis and repair by trained technicians.',
    icon: '📦',
    price: 'From ₹999',
    warranty: 'Parts & service warranty',
    keywords: [
      'built in microwave service Bangalore',
      'built-in microwave repair',
      'kitchen microwave service',
    ],
    features: [
      'Heating and magnetron diagnosis',
      'Door switch and latch service',
      'Turntable motor check',
      'Control panel troubleshooting',
      'Safe installation-area service',
    ],
    process: [
      'Inspect built-in unit access and ventilation',
      'Run fault diagnosis safely',
      'Repair or replace defective parts',
      'Test heating cycles',
      'Confirm safe fitment in cabinet',
    ],
    faqs: [
      {
        question: 'Do you service built-in microwaves without removing the full cabinet?',
        answer:
          'In most cases yes. We service on-site with safe access. Complex cases may need partial removal.',
      },
      {
        question: 'Why is my built-in microwave not heating?',
        answer:
          'Common reasons are magnetron failure, diode issues, door switch faults, or control board errors.',
      },
    ],
    category: 'microwave',
  },
  {
    id: 'gas-hob-flame-problems',
    name: 'Elica Gas Hob Flame Problems',
    shortDescription: 'Fix yellow flame, low flame, lift-off flame, and uneven burner output.',
    fullDescription:
      'Gas hob flame problems like yellow flame, popping, or uneven burners are fixed with nozzle cleaning, air adjustment, and gas path service across Bangalore.',
    icon: '🔵',
    price: 'From ₹749',
    warranty: 'Service warranty',
    keywords: [
      'gas hob flame problems',
      'yellow flame hob repair',
      'uneven burner flame Bangalore',
    ],
    features: [
      'Flame color and stability diagnosis',
      'Nozzle and burner port cleaning',
      'Gas-air mixture correction',
      'Regulator and hose inspection',
      'Safe cooking flame demonstration',
    ],
    process: [
      'Observe flame on all burners',
      'Clean blocked ports and nozzles',
      'Adjust and test flame profile',
      'Check supply pressure and leaks',
      'Confirm blue stable flame',
    ],
    faqs: [
      {
        question: 'Why is my gas hob flame yellow?',
        answer:
          'Yellow flame often means incomplete combustion due to blocked burners, dirty nozzles, or air-mix issues.',
      },
      {
        question: 'Is yellow flame unsafe?',
        answer:
          'Yes, it can indicate poor combustion. Get gas hob flame problems serviced promptly for safety.',
      },
    ],
    category: 'hob',
  },
  {
    id: 'cooking-range-service',
    name: 'Elica Cooking Range Service',
    shortDescription: 'Full cooking range service for hob + oven combos used in Bangalore kitchens.',
    fullDescription:
      'Cooking range service in Bangalore covers hob burners, oven heating, knobs, and safety checks for freestanding and built-in cooking ranges.',
    icon: '🏠',
    price: 'From ₹1,299',
    warranty: 'Parts & service warranty',
    keywords: [
      'cooking range service Bangalore',
      'cooking range repair',
      'hob oven range service',
    ],
    features: [
      'Hob and oven combined diagnosis',
      'Burner and ignition service',
      'Oven heating element/thermostat check',
      'Door seal inspection',
      'Full-range function testing',
    ],
    process: [
      'Inspect range hob and oven sections',
      'Service burners and controls',
      'Diagnose oven heat issues',
      'Repair required components',
      'Run complete cooking-range test cycle',
    ],
    faqs: [
      {
        question: 'What brands of cooking range do you service?',
        answer:
          'We service popular cooking range models used in Bangalore homes, including Elica-compatible kitchen setups.',
      },
      {
        question: 'Can hob and oven be serviced in one visit?',
        answer: 'Yes. Cooking range service usually covers both hob and oven sections in one appointment.',
      },
    ],
    category: 'range',
  },
  {
    id: 'hob-cleaning',
    name: 'Elica Hob Cleaning',
    shortDescription: 'Professional hob cleaning for burners, spill trays, and surface finish.',
    fullDescription:
      'Hob cleaning service in Bangalore removes burnt spills, unclogs burner ports, and restores cooktop appearance for safer, cleaner everyday cooking.',
    icon: '✨',
    price: 'From ₹599',
    warranty: 'Service warranty',
    keywords: [
      'hob cleaning Bangalore',
      'gas hob cleaning service',
      'cooktop cleaning near me',
    ],
    features: [
      'Burner and spill-tray cleaning',
      'Surface stain treatment',
      'Port unblocking for better flame',
      'Knob and panel wipe-down',
      'Quick maintenance checklist',
    ],
    process: [
      'Assess spill and grease level',
      'Clean burners and trays thoroughly',
      'Polish hob surface safely',
      'Check flame after cleaning',
      'Share easy upkeep tips',
    ],
    faqs: [
      {
        question: 'How often should hob cleaning be done?',
        answer:
          'For daily cooking, professional hob cleaning every 3–6 months keeps burners efficient and surfaces hygienic.',
      },
      {
        question: 'Is hob cleaning different from gas hob service?',
        answer:
          'Yes. Hob cleaning focuses on hygiene and clog removal, while gas hob service includes deeper mechanical and safety repairs.',
      },
    ],
    category: 'hob',
  },
]

export function getAllServices(): CatalogService[] {
  return catalogServices
}

export function getServiceById(id: string): CatalogService | undefined {
  return catalogServices.find((service) => service.id === id)
}

const featuredServiceIds = [
  'chimney-deep-cleaning',
  'chimney-dripping-oil',
  'gas-hob-service',
  'built-in-microwave-service',
] as const

export function getFeaturedServices(limit = 4): CatalogService[] {
  const featured = featuredServiceIds
    .map((id) => catalogServices.find((service) => service.id === id))
    .filter((service): service is CatalogService => Boolean(service))

  if (featured.length >= limit) {
    return featured.slice(0, limit)
  }

  return catalogServices.slice(0, limit)
}

export function getServiceOptions(): Array<{ id: string; name: string }> {
  return catalogServices.map((service) => ({ id: service.id, name: service.name }))
}
