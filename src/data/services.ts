export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  intro: string;
  process: string[];
  priceRange: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    title: 'Emergency Plumbing',
    shortDescription: 'Fast response for burst pipes, major leaks, and urgent plumbing failures.',
    intro: 'When water is pouring or a pipe has failed, you need help quickly. Our emergency plumbing service is built for those moments—assessing the situation, stopping the damage, and restoring basic function so you can get back to normal as soon as possible.',
    process: [
      'You contact us and describe the issue so we can prioritize and prepare.',
      'We arrive ready to locate the problem and stop active water flow when needed.',
      'We explain what we find and the repair options before doing major work.',
      'We complete the repair or temporary fix and check that systems are stable.',
    ],
    priceRange: 'Emergency visits typically start in a mid-range service call fee plus parts and labor. Final cost depends on the problem and materials needed. We provide a clear estimate before major work begins.',
    faqs: [
      { question: 'What counts as a plumbing emergency?', answer: 'Burst pipes, severe leaks, no water, sewage backups, and gas line concerns (if applicable to your setup) are common emergencies. If water is actively damaging your home, treat it as urgent.' },
      { question: 'How quickly can someone come out?', answer: 'Response times vary by demand and location. Contact us as soon as possible so we can give you the best available window for your area.' },
      { question: 'Will I get an estimate before work starts?', answer: 'Yes. After assessing the issue, we explain the recommended repair and associated costs before proceeding with significant work.' },
    ],
  },
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    shortDescription: 'Clear slow or clogged drains in kitchens, baths, and main lines.',
    intro: 'Slow drains and full clogs are more than an inconvenience—they can signal buildup that will only get worse. Drain cleaning restores flow and helps prevent recurring backups when done thoroughly.',
    process: [
      'We identify which drains are affected and check for related issues.',
      'We use appropriate methods (snaking, hydro-jetting where suitable) to clear the blockage.',
      'We test flow and look for signs of deeper line problems.',
      'We share prevention tips tailored to your fixtures and usage.',
    ],
    priceRange: 'Simple clog clearing is often a straightforward service fee. Main line or complex jobs may cost more depending on access and equipment needed. Ask for a quote based on your situation.',
    faqs: [
      { question: 'Is a clogged toilet the same as a drain cleaning job?', answer: 'Toilet clogs are common and often resolved with dedicated equipment. If the clog is deeper in the line, a broader drain cleaning approach may be needed.' },
      { question: 'How often should drains be cleaned?', answer: 'It depends on usage, water hardness, and what goes down the drains. Many homes benefit from attention when flow slows rather than on a fixed calendar.' },
      { question: 'Can you clear outdoor or main sewer lines?', answer: 'Yes, we handle main line issues within our service scope. Access and severity affect the approach and pricing.' },
    ],
  },
  {
    slug: 'water-heater-repair',
    title: 'Water Heater Repair',
    shortDescription: 'Repair and troubleshooting for tank and tankless water heaters.',
    intro: 'No hot water or inconsistent temperatures disrupt daily routines. Water heater repair focuses on diagnosing the cause—thermostat, element, pilot, valves, or sediment—and restoring reliable hot water.',
    process: [
      'We confirm symptoms and check the unit’s age, type, and visible condition.',
      'We diagnose common failure points safely and methodically.',
      'We outline repair options versus replacement when the unit is near end of life.',
      'We complete approved repairs and verify hot water delivery.',
    ],
    priceRange: 'Repairs vary widely by part and unit type. Simple fixes cost less; component replacements or complex tankless work cost more. We quote before ordering uncommon parts.',
    faqs: [
      { question: 'Should I repair or replace my water heater?', answer: 'Age, condition, efficiency, and repair cost all matter. Units past typical lifespan with recurring issues often favor replacement. We help you weigh the options.' },
      { question: 'Do you work on tankless units?', answer: 'Yes. Tankless systems have different components and maintenance needs; we service common residential models.' },
      { question: 'Why is my water only lukewarm?', answer: 'Possible causes include thermostat settings, failing elements, sediment buildup, or mixing valve issues. Diagnosis identifies the right fix.' },
    ],
  },
  {
    slug: 'leak-detection',
    title: 'Leak Detection',
    shortDescription: 'Find hidden leaks in walls, floors, and supply lines before major damage.',
    intro: 'Not every leak is obvious. Hidden leaks can waste water, raise bills, and damage structure. Leak detection aims to locate the source with minimal unnecessary demolition.',
    process: [
      'We gather clues from water bills, moisture, and visible signs.',
      'We use appropriate tools and inspection methods for the suspected area.',
      'We pinpoint the leak location and explain the findings.',
      'We recommend repair steps and can often perform the repair.',
    ],
    priceRange: 'Detection work is typically priced as a diagnostic service. Repair costs depend on location and materials. Combined detection and repair packages may be available.',
    faqs: [
      { question: 'How do I know I have a hidden leak?', answer: 'Unexplained high water bills, damp spots, moldy smells, or the sound of running water when fixtures are off are common indicators.' },
      { question: 'Will you need to open walls?', answer: 'We try non-invasive methods first. Some leaks still require access; we limit openings when possible and explain before cutting.' },
      { question: 'Can slab leaks be found?', answer: 'Slab and under-floor leaks are more involved. We assess feasibility and may recommend specialized approaches depending on construction.' },
    ],
  },
  {
    slug: 'toilet-repair',
    title: 'Toilet Repair',
    shortDescription: 'Fix running toilets, weak flushes, leaks, and common fixture problems.',
    intro: 'Toilet issues range from minor annoyances to active leaks. Repair restores reliable flushing and sealing without always needing a full replacement.',
    process: [
      'We identify the symptom: running, leaking, clogging, or unstable fixture.',
      'We inspect fill valve, flapper, seal, supply line, and related parts.',
      'We replace worn components or adjust for proper function.',
      'We test multiple flushes and check for residual leaks.',
    ],
    priceRange: 'Many toilet repairs are modest in cost—parts plus labor. Full replacement is a separate option when the fixture is cracked or outdated.',
    faqs: [
      { question: 'Why does my toilet keep running?', answer: 'Often a worn flapper, misadjusted fill valve, or chain issue. These are usually straightforward to correct.' },
      { question: 'When should I replace instead of repair?', answer: 'Cracks in the bowl or tank, repeated failures, or very old inefficient models often make replacement the better long-term choice.' },
      { question: 'Can you install a new toilet?', answer: 'Yes. Installation includes removal of the old unit, proper sealing, and connection checks.' },
    ],
  },
  {
    slug: 'faucet-repair',
    title: 'Faucet Repair & Installation',
    shortDescription: 'Stop drips, improve flow, and install new kitchen or bath faucets.',
    intro: 'Dripping faucets waste water and create noise. Worn cartridges, seats, and O-rings are common culprits. We repair when practical and install replacements when you want an upgrade.',
    process: [
      'We determine brand and type to source correct parts when repairing.',
      'We shut off supply, disassemble, and replace failed components.',
      'For new installs, we confirm fit, connect supply, and check for leaks.',
      'We test hot and cold operation and clean up the work area.',
    ],
    priceRange: 'Repair of a standard faucet is often a lower-cost job. New faucet installation cost depends on the fixture and any plumbing modifications needed.',
    faqs: [
      { question: 'Can any faucet be repaired?', answer: 'Most can if parts are available. Very old or discontinued models sometimes make replacement more practical.' },
      { question: 'Do I need to buy the faucet myself?', answer: 'You can supply one, or we can help with options. Compatibility with your sink and supply setup matters.' },
      { question: 'Why is water pressure low at one faucet?', answer: 'Aerator clogging, supply valve issues, or internal cartridge problems are common causes we check first.' },
    ],
  },
  {
    slug: 'pipe-repair',
    title: 'Pipe Repair & Replacement',
    shortDescription: 'Repair damaged pipes and replace sections of supply or drain lines.',
    intro: 'Corroded, frozen, or damaged pipes need reliable repair. We address the failed section and evaluate whether broader replacement is warranted for aging systems.',
    process: [
      'We locate the damaged section and assess surrounding pipe condition.',
      'We shut off water and prepare the work area to limit disruption.',
      'We repair or replace the section with appropriate materials.',
      'We restore service, pressure-test when applicable, and inspect for leaks.',
    ],
    priceRange: 'Cost depends on pipe location, material, and length of run. Accessible repairs cost less than work behind walls or under slabs.',
    faqs: [
      { question: 'What pipe materials do you work with?', answer: 'Common residential materials include copper, PEX, CPVC, and various drain pipes. We match or upgrade appropriately.' },
      { question: 'Can you re-pipe a whole house?', answer: 'Whole-home re-pipes are larger projects. We can discuss scope, materials, and phasing based on your goals and budget.' },
      { question: 'Is PEX a good option?', answer: 'PEX is widely used for supply lines due to flexibility and freeze resistance. Suitability depends on local code and your layout.' },
    ],
  },
  {
    slug: 'sewer-line',
    title: 'Sewer Line Service',
    shortDescription: 'Clear and inspect main sewer lines to restore drainage from the home.',
    intro: 'Main sewer issues show up as multiple fixture backups or outdoor cleanout problems. Sewer line service focuses on clearing blockages and understanding line condition.',
    process: [
      'We confirm symptoms and locate cleanouts for access.',
      'We clear the line with suitable equipment for the type of blockage.',
      'When needed, we recommend camera inspection to assess pipe condition.',
      'We discuss findings and options for repair or ongoing maintenance.',
    ],
    priceRange: 'Clearing a main line has a typical service range; camera inspection and excavation repairs add cost. Quotes reflect access and findings.',
    faqs: [
      { question: 'What causes sewer line clogs?', answer: 'Grease, foreign objects, roots, and collapsed or offset pipes are common. History and inspection help identify the cause.' },
      { question: 'Do you offer camera inspections?', answer: 'Camera inspection is useful when clogs recur or we need to evaluate pipe condition before recommending major work.' },
      { question: 'When is excavation needed?', answer: 'Severe breaks, collapses, or sections that cannot be restored by cleaning may require dig or trenchless repair options.' },
    ],
  },
  {
    slug: 'sump-pump',
    title: 'Sump Pump Service',
    shortDescription: 'Install, repair, and maintain sump pumps to protect basements from water.',
    intro: 'A working sump pump is critical for homes with basements or crawl spaces prone to groundwater. Service covers failed pumps, float switches, and proper discharge setup.',
    process: [
      'We inspect the basin, pump, switch, and discharge path.',
      'We diagnose failure modes: power, switch, impeller, or clogged discharge.',
      'We repair or replace components and test under simulated conditions.',
      'We review backup options if continuous protection is a priority.',
    ],
    priceRange: 'Switch or minor repairs are lower cost. Full pump replacement and installation fall into a moderate range depending on model and discharge work.',
    faqs: [
      { question: 'How long do sump pumps last?', answer: 'Lifespan varies with quality and runtime. Many residential pumps last several years; heavy use shortens life.' },
      { question: 'Do I need a battery backup?', answer: 'Backup systems help during power outages when storms often bring water. Whether you need one depends on risk tolerance and flooding history.' },
      { question: 'Why does my pump run constantly?', answer: 'High groundwater, a failed check valve, or a short-cycling switch can cause continuous running. Diagnosis identifies the cause.' },
    ],
  },
  {
    slug: 'garbage-disposal',
    title: 'Garbage Disposal Repair',
    shortDescription: 'Unjam, repair, or replace kitchen garbage disposals safely.',
    intro: 'A jammed or dead disposal interrupts kitchen use. We free jams when possible, replace worn parts, or install a new unit when repair is not economical.',
    process: [
      'We verify power and reset status before any disassembly.',
      'We attempt to free jams with proper tools—never hands in the chamber.',
      'We test motor and switch function; replace if the unit has failed.',
      'We check for leaks at connections after service or install.',
    ],
    priceRange: 'Jam clearing is often a modest service. Replacement cost includes the unit and labor; higher-end models cost more.',
    faqs: [
      { question: 'Is it safe to put my hand in the disposal?', answer: 'No. Always disconnect power and use the correct tools. We handle jammed units safely.' },
      { question: 'Why does my disposal hum but not spin?', answer: 'Usually a jam. A humming motor that does not turn needs attention before it overheats.' },
      { question: 'Can any disposal fit my sink?', answer: 'Most standard sinks accept common sizes. We confirm fit and electrical requirements before install.' },
    ],
  },
  {
    slug: 'water-filtration',
    title: 'Water Filtration Systems',
    shortDescription: 'Install and service filtration and softener systems for better water quality.',
    intro: 'Hard water and sediment affect fixtures, appliances, and taste. Filtration and softening systems address specific water quality concerns when properly sized and maintained.',
    process: [
      'We discuss water concerns and may review test results if available.',
      'We recommend system type and size appropriate to your home and goals.',
      'We install with attention to bypass, drainage, and code requirements.',
      'We explain maintenance and filter or media replacement schedules.',
    ],
    priceRange: 'Point-of-use filters are lower cost. Whole-home systems and softeners vary significantly by capacity and features. Quotes are based on your needs.',
    faqs: [
      { question: 'Do I need a softener or a filter?', answer: 'Softeners target hardness minerals. Filters address sediment, chlorine, taste, or specific contaminants. Needs differ by water source and goals.' },
      { question: 'How often do filters need changing?', answer: 'It depends on the system and water quality. We provide guidelines based on the equipment installed.' },
      { question: 'Will a softener make water feel slippery?', answer: 'Softened water can feel different on skin and dishes. Many people adapt quickly; some prefer a mixed approach at certain taps.' },
    ],
  },
  {
    slug: 'fixture-installation',
    title: 'Fixture Installation',
    shortDescription: 'Install sinks, toilets, showers, and other plumbing fixtures correctly.',
    intro: 'New fixtures improve function and appearance when installed with proper support, sealing, and connections. We handle residential fixture installs with attention to detail.',
    process: [
      'We confirm fixture compatibility with existing rough-in and supply.',
      'We remove old fixtures carefully when replacing.',
      'We install new units with correct seals, supports, and connections.',
      'We test operation and check for leaks under normal use.',
    ],
    priceRange: 'Installation labor varies by fixture type and complexity. Supplying your own fixture is common; we can advise on suitability.',
    faqs: [
      { question: 'Can you install fixtures I purchased?', answer: 'Yes, provided they are appropriate for the location and we can obtain any needed parts or adapters.' },
      { question: 'Do you move plumbing for new layouts?', answer: 'Relocating supply or drain lines is a larger scope. We can evaluate and quote that work separately.' },
      { question: 'How long does a typical install take?', answer: 'A straightforward toilet or faucet swap is often completed in a single visit. Multi-fixture or remodel work takes longer.' },
    ],
  },
  {
    slug: 'shower-tub-repair',
    title: 'Shower & Tub Repair',
    shortDescription: 'Fix leaks, valves, and drainage issues in showers and bathtubs.',
    intro: 'Shower and tub problems include valve failures, diverter issues, slow drains, and leaks at the base or walls. Repair restores comfortable, leak-free use.',
    process: [
      'We identify whether the issue is supply, drain, or enclosure-related.',
      'We access valves or drains as needed with care for surrounding finishes.',
      'We replace cartridges, seals, or drain components as required.',
      'We test thoroughly and advise on any finish or waterproofing concerns.',
    ],
    priceRange: 'Cartridge and valve repairs are common mid-range jobs. Tub or shower replacement and waterproofing are larger projects priced separately.',
    faqs: [
      { question: 'Why does my shower lose temperature when someone runs water?', answer: 'Pressure-balancing or thermostatic valves manage this. A failing valve cartridge is a frequent cause.' },
      { question: 'Can you fix a leaking shower pan?', answer: 'Pan and waterproofing leaks often require more invasive work. We assess and explain realistic options.' },
      { question: 'Do you install new shower valves?', answer: 'Yes. Valve replacement may involve wall access; we discuss the process before starting.' },
    ],
  },
  {
    slug: 'water-softener',
    title: 'Water Softener Service',
    shortDescription: 'Install, repair, and maintain water softeners for hard water relief.',
    intro: 'Hard water leaves scale on fixtures and reduces appliance efficiency. A properly sized and maintained softener addresses hardness at the whole-home level.',
    process: [
      'We review hardness levels and household demand when possible.',
      'We service existing units: brine system, resin, valves, and settings.',
      'For new installs, we place and connect the unit with proper drainage.',
      'We set regeneration schedules and explain salt and maintenance needs.',
    ],
    priceRange: 'Service calls for existing units are moderate. New softener installation cost depends on capacity and brand. Ask for options that fit your home.',
    faqs: [
      { question: 'How do I know if my softener is working?', answer: 'Soap lathers more easily and scale buildup slows when the system is effective. Periodic checks keep settings accurate.' },
      { question: 'What kind of salt should I use?', answer: 'Most systems work with standard softener salt pellets or crystals. Follow manufacturer guidance for your model.' },
      { question: 'Can softeners be bypassed for outdoor water?', answer: 'Yes. Outdoor spigots are often left on hard water to save salt and protect plants. We can configure bypass as needed.' },
    ],
  },
  {
    slug: 'backflow-prevention',
    title: 'Backflow Prevention',
    shortDescription: 'Install and test backflow preventers to protect potable water.',
    intro: 'Backflow preventers keep contaminated water from entering the clean supply. Many properties require them for irrigation, boilers, or commercial connections. We install and support testing where required.',
    process: [
      'We determine the required device type for your application and local rules.',
      'We install in an accessible location with proper clear and support.',
      'We verify operation and document as needed for compliance.',
      'We advise on testing schedules common in many jurisdictions.',
    ],
    priceRange: 'Device and installation cost vary by size and type (e.g., RPZ vs. double-check). Testing is often a separate periodic fee.',
    faqs: [
      { question: 'Do residential homes need backflow preventers?', answer: 'Often for irrigation systems, wells with certain connections, or specific appliances. Local code determines requirements.' },
      { question: 'How often is testing required?', answer: 'Many areas require annual testing by a certified tester. We can guide you on local expectations.' },
      { question: 'What happens if a device fails a test?', answer: 'Failed devices need repair or replacement to restore protection and compliance. We can help with next steps.' },
    ],
  },
  {
    slug: 'gas-line',
    title: 'Gas Line Services',
    shortDescription: 'Safe installation and repair of residential gas lines for appliances.',
    intro: 'Gas line work requires careful adherence to safety and code. We handle residential gas piping for ranges, water heaters, dryers, and similar appliances within our licensed scope.',
    process: [
      'We plan routing, materials, and shutoff placement for the appliance.',
      'We install or repair using approved materials and methods.',
      'We pressure-test the system as required before putting it in service.',
      'We connect and verify appliance operation with leak checks.',
    ],
    priceRange: 'Short appliance connections are moderate; longer runs or complex routing cost more. Safety testing is included in proper installs.',
    faqs: [
      { question: 'Is gas work dangerous?', answer: 'It requires proper training, materials, and testing. DIY gas work is not recommended. We follow established safety practices.' },
      { question: 'Can you move a gas line for a remodel?', answer: 'Yes, within code and practical limits. Relocations are planned carefully for access and protection.' },
      { question: 'Do you work on propane systems?', answer: 'We handle common residential natural gas and propane appliance connections. Confirm your setup when scheduling.' },
    ],
  },
  {
    slug: 'hydro-jetting',
    title: 'Hydro Jetting',
    shortDescription: 'High-pressure water jetting to clear tough drain and sewer buildup.',
    intro: 'When mechanical snaking is not enough, hydro jetting uses high-pressure water to scour pipe walls and clear grease, scale, and debris more thoroughly.',
    process: [
      'We evaluate whether jetting is appropriate for your pipe material and condition.',
      'We access the line and protect the work area.',
      'We jet the line systematically to restore capacity.',
      'We may recommend camera inspection afterward to confirm results.',
    ],
    priceRange: 'Hydro jetting is typically priced higher than basic snaking due to equipment and thoroughness. Quotes reflect line size and access.',
    faqs: [
      { question: 'Is hydro jetting safe for old pipes?', answer: 'Condition matters. Severely deteriorated pipes may not be candidates. We assess before proceeding.' },
      { question: 'When is jetting better than snaking?', answer: 'Grease buildup, scale, and recurring clogs often respond better to jetting’s cleaning action.' },
      { question: 'Will jetting prevent future clogs?', answer: 'It cleans more thoroughly, which can extend time between issues, but usage habits still matter.' },
    ],
  },
  {
    slug: 'camera-inspection',
    title: 'Camera Pipe Inspection',
    shortDescription: 'See inside drain and sewer lines to diagnose problems accurately.',
    intro: 'Camera inspection shows the inside of pipes so repairs are based on evidence rather than guesswork. Useful for recurring clogs, pre-purchase checks, and planning repairs.',
    process: [
      'We access the line through a cleanout or fixture.',
      'We run a camera through the pipe and record findings.',
      'We review footage with you and explain observed conditions.',
      'We recommend next steps only when action is warranted.',
    ],
    priceRange: 'Inspection is a diagnostic service with a defined fee range. Combining with cleaning may adjust the overall cost.',
    faqs: [
      { question: 'When should I get a camera inspection?', answer: 'Recurring backups, slow main drains, unexplained issues, or before buying a home are common reasons.' },
      { question: 'Can the camera go through any pipe?', answer: 'Access and pipe diameter limit reach. Most residential lines can be inspected from appropriate entry points.' },
      { question: 'Do I get a copy of the video?', answer: 'We can provide findings and, when available, recorded media for your records.' },
    ],
  },
  {
    slug: 'water-pressure',
    title: 'Water Pressure Problems',
    shortDescription: 'Diagnose and correct low or high water pressure throughout the home.',
    intro: 'Pressure that is too low frustrates daily use; pressure that is too high stresses pipes and fixtures. We diagnose the cause and correct it at the right point in the system.',
    process: [
      'We measure pressure and compare hot versus cold and fixture to fixture.',
      'We check the pressure regulator, supply, and for partial blockages.',
      'We adjust or replace regulators and address fixture-level restrictions.',
      'We verify improved performance and advise on ongoing monitoring.',
    ],
    priceRange: 'Regulator adjustment or simple fixes are lower cost. Regulator replacement and more involved supply work fall into a moderate range.',
    faqs: [
      { question: 'What is a normal water pressure range?', answer: 'Many homes are comfortable around 40–60 psi. Local supply and code influence acceptable ranges.' },
      { question: 'Why is only the hot water weak?', answer: 'Water heater issues, mixing valves, or dedicated hot lines can cause hot-only symptoms. We isolate the cause.' },
      { question: 'Can high pressure damage my home?', answer: 'Yes. Excess pressure increases wear on valves, seals, and appliances. A functioning regulator helps protect the system.' },
    ],
  },
  {
    slug: 'remodel-plumbing',
    title: 'Remodel & Repipe Plumbing',
    shortDescription: 'Plumbing for kitchen and bath remodels, and selective or whole-home repipes.',
    intro: 'Remodels often need relocated fixtures, new supply and drain runs, and updated materials. We coordinate plumbing scope so your renovation stays on track.',
    process: [
      'We review plans or walk the space to define the plumbing scope.',
      'We rough-in supply and drains to the new locations and code standards.',
      'We return for finish work: fixtures, trim, and final connections.',
      'We test the system and support any inspection requirements.',
    ],
    priceRange: 'Remodel plumbing is quoted per project based on fixture count, relocation complexity, and materials. We provide itemized estimates.',
    faqs: [
      { question: 'Do you work with general contractors?', answer: 'Yes. Clear communication on rough-in timing and finish schedules helps the whole project.' },
      { question: 'Can you update old galvanized or polybutylene lines?', answer: 'Repiping from outdated materials is a common request. We discuss options and phasing for occupied homes.' },
      { question: 'How long does remodel plumbing take?', answer: 'Rough-in for a bath or kitchen is often days, not weeks. Full-home work takes longer and is scheduled in phases.' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
