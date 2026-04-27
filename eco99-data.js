// Eco-indicator 99 Data
// Source: "The Eco-indicator 99 — Manual for Designers" (Goedkoop, Effting, Collignon, PRé Consultants, 2000)
// All values in millipoints (mPt) per unit as specified.

const ECO99 = {

  categories: [
    "Ferro Metals",
    "Non-Ferro Metals",
    "Metal Processing",
    "Plastics",
    "Plastic Processing",
    "Rubbers",
    "Packaging Materials",
    "Chemicals & Others",
    "Building Materials",
    "Heat",
    "Electricity",
    "Solar Energy",
    "Transport",
    "Recycling",
    "Waste — Incineration",
    "Waste — Landfill",
    "Waste — Municipal",
    "Waste — Household"
  ],

  materials: [

    // ── FERRO METALS (mPt/kg) ──────────────────────────────────────────────
    { id: "cast_iron",         name: "Cast iron",           category: "Ferro Metals",     value: 240,  unit: "kg", description: "Casting iron with >2% carbon compound" },
    { id: "converter_steel",   name: "Converter steel",     category: "Ferro Metals",     value: 94,   unit: "kg", description: "Block material containing only primary steel" },
    { id: "electro_steel",     name: "Electro steel",       category: "Ferro Metals",     value: 24,   unit: "kg", description: "Block material containing only secondary scrap" },
    { id: "steel",             name: "Steel",               category: "Ferro Metals",     value: 86,   unit: "kg", description: "Block material: 80% primary iron, 20% scrap" },
    { id: "steel_high_alloy",  name: "Steel (high alloy)",  category: "Ferro Metals",     value: 910,  unit: "kg", description: "Block: 71% primary iron, 16% Cr, 13% Ni" },
    { id: "steel_low_alloy",   name: "Steel (low alloy)",   category: "Ferro Metals",     value: 110,  unit: "kg", description: "Block: 93% primary iron, 5% scrap, 1% alloy metals" },

    // ── NON-FERRO METALS (mPt/kg) ──────────────────────────────────────────
    { id: "aluminium_rec",     name: "Aluminium (100% recycled)", category: "Non-Ferro Metals", value: 60,       unit: "kg", description: "Block containing only secondary material" },
    { id: "aluminium_primary", name: "Aluminium (primary)",       category: "Non-Ferro Metals", value: 780,      unit: "kg", description: "Block containing only primary material" },
    { id: "chromium",          name: "Chromium",                  category: "Non-Ferro Metals", value: 970,      unit: "kg", description: "Block, only primary material" },
    { id: "copper",            name: "Copper",                    category: "Non-Ferro Metals", value: 1400,     unit: "kg", description: "Block, only primary material" },
    { id: "lead",              name: "Lead",                      category: "Non-Ferro Metals", value: 640,      unit: "kg", description: "Block, 50% secondary lead" },
    { id: "nickel",            name: "Nickel (enriched)",         category: "Non-Ferro Metals", value: 5200,     unit: "kg", description: "Block, only primary material" },
    { id: "palladium",         name: "Palladium (enriched)",      category: "Non-Ferro Metals", value: 4600000,  unit: "kg", description: "Block, only primary material" },
    { id: "platinum",          name: "Platinum",                  category: "Non-Ferro Metals", value: 7000000,  unit: "kg", description: "Block, only primary material" },
    { id: "rhodium",           name: "Rhodium (enriched)",        category: "Non-Ferro Metals", value: 12000000, unit: "kg", description: "Block, only primary material" },
    { id: "zinc",              name: "Zinc",                      category: "Non-Ferro Metals", value: 3200,     unit: "kg", description: "Block, only primary material (plating quality)" },

    // ── METAL PROCESSING ──────────────────────────────────────────────────
    { id: "bending_al",        name: "Bending – aluminium",       category: "Metal Processing", value: 0.000047, unit: "m (1mm sheet, 90°)", description: "One sheet of 1mm over width of 1 metre; bending 90°" },
    { id: "bending_steel",     name: "Bending – steel",           category: "Metal Processing", value: 0.00008,  unit: "m (1mm sheet, 90°)", description: "One sheet of 1mm over width of 1 metre; bending 90°" },
    { id: "bending_rvs",       name: "Bending – stainless steel", category: "Metal Processing", value: 0.00011,  unit: "m (1mm sheet, 90°)", description: "One sheet of 1mm over width of 1 metre; bending 90°" },
    { id: "brazing",           name: "Brazing",                   category: "Metal Processing", value: 4000,     unit: "kg", description: "Per kg brazing, including brazing material (45% silver, 27% copper, 25% tin)" },
    { id: "cold_roll_sheet",   name: "Cold roll into sheet",      category: "Metal Processing", value: 18,       unit: "mm·m²", description: "Per thickness reduction of 1mm of 1m² plate" },
    { id: "chromium_plating",  name: "Electrolytic chromium plating", category: "Metal Processing", value: 1100, unit: "m²", description: "Per m², 1µm thick, double sided; data fairly unreliable" },
    { id: "galvanising_elec",  name: "Electrolytic galvanising",  category: "Metal Processing", value: 130,      unit: "m²", description: "Per m², 2.5µm thick, double sided; data fairly unreliable" },
    { id: "extrusion_al",      name: "Extrusion – aluminium",     category: "Metal Processing", value: 72,       unit: "kg", description: "Per kg" },
    { id: "milling_metal",     name: "Milling/turning/drilling (metal)", category: "Metal Processing", value: 800, unit: "dm³", description: "Per dm³ removed material" },
    { id: "pressing",          name: "Pressing (metal)",          category: "Metal Processing", value: 23,       unit: "kg", description: "Per kg deformed metal. Do not include non-deformed parts!" },
    { id: "spot_weld_al",      name: "Spot welding – aluminium",  category: "Metal Processing", value: 2.7,      unit: "weld", description: "Per weld of 7mm diameter, sheet thickness 2mm" },
    { id: "shear_al",          name: "Shearing/stamping – aluminium", category: "Metal Processing", value: 0.000036, unit: "mm²", description: "Per mm² cutting surface" },
    { id: "shear_steel",       name: "Shearing/stamping – steel", category: "Metal Processing", value: 0.00006,  unit: "mm²", description: "Per mm² cutting surface" },
    { id: "shear_rvs",         name: "Shearing/stamping – stainless steel", category: "Metal Processing", value: 0.000086, unit: "mm²", description: "Per mm² cutting surface" },
    { id: "sheet_production",  name: "Sheet production",          category: "Metal Processing", value: 30,       unit: "kg", description: "Per kg production of sheet out of block material" },
    { id: "band_zinc",         name: "Band zinc coating (Sendzimir)", category: "Metal Processing", value: 4300,  unit: "m²", description: "Per m², 20–45µm thick, including zinc" },
    { id: "hot_galvanising",   name: "Hot galvanising",           category: "Metal Processing", value: 3300,     unit: "m²", description: "Per m², 100µm thick, including zinc" },
    { id: "zinc_coating",      name: "Zinc coating (per extra µm)", category: "Metal Processing", value: 49,     unit: "m²", description: "Per m², 1 extra µm thickness, including zinc" },

    // ── PLASTICS (mPt/kg) ─────────────────────────────────────────────────
    { id: "abs",               name: "ABS",                       category: "Plastics",         value: 400, unit: "kg", description: "Acrylonitrile butadiene styrene granulate" },
    { id: "hdpe",              name: "HDPE",                      category: "Plastics",         value: 330, unit: "kg", description: "High-density polyethylene granulate" },
    { id: "ldpe",              name: "LDPE",                      category: "Plastics",         value: 360, unit: "kg", description: "Low-density polyethylene granulate" },
    { id: "pa66",              name: "PA 6.6 (Nylon)",            category: "Plastics",         value: 630, unit: "kg", description: "Polyamide 6.6 granulate" },
    { id: "pc",                name: "PC (Polycarbonate)",        category: "Plastics",         value: 510, unit: "kg", description: "Polycarbonate granulate" },
    { id: "pet",               name: "PET",                      category: "Plastics",         value: 380, unit: "kg", description: "Polyethylene terephthalate granulate" },
    { id: "pet_bottle",        name: "PET (bottle grade)",        category: "Plastics",         value: 390, unit: "kg", description: "Used for bottles" },
    { id: "pp",                name: "PP (Polypropylene)",        category: "Plastics",         value: 330, unit: "kg", description: "Polypropylene granulate" },
    { id: "ps_gpps",           name: "PS (GPPS)",                 category: "Plastics",         value: 370, unit: "kg", description: "General purpose polystyrene" },
    { id: "ps_hips",           name: "PS (HIPS)",                 category: "Plastics",         value: 360, unit: "kg", description: "High impact polystyrene" },
    { id: "ps_eps",            name: "PS (EPS)",                  category: "Plastics",         value: 360, unit: "kg", description: "Expandable polystyrene" },
    { id: "pur_energy",        name: "PUR (energy absorbing)",    category: "Plastics",         value: 490, unit: "kg", description: "Polyurethane energy absorbing foam" },
    { id: "pur_flex",          name: "PUR (flexible block foam)", category: "Plastics",         value: 480, unit: "kg", description: "For furniture, bedding, clothing" },
    { id: "pur_hard",          name: "PUR (hard foam)",           category: "Plastics",         value: 420, unit: "kg", description: "Used in white goods, insulation, construction" },
    { id: "pur_semi",          name: "PUR (semi-rigid foam)",     category: "Plastics",         value: 480, unit: "kg", description: "Semi-rigid polyurethane foam" },
    { id: "pvc_high_impact",   name: "PVC (high impact)",         category: "Plastics",         value: 280, unit: "kg", description: "Without metal stabilizer and without plasticizer" },
    { id: "pvc_rigid",         name: "PVC (rigid)",               category: "Plastics",         value: 270, unit: "kg", description: "Rigid PVC with 10% plasticizers (crude estimate)" },
    { id: "pvc_flexible",      name: "PVC (flexible)",            category: "Plastics",         value: 240, unit: "kg", description: "Flexible PVC with 50% plasticizers (crude estimate)" },
    { id: "pvdc",              name: "PVDC",                      category: "Plastics",         value: 440, unit: "kg", description: "For thin coatings" },

    // ── PLASTIC PROCESSING ────────────────────────────────────────────────
    { id: "blow_foil_pe",      name: "Blow foil extrusion PE",    category: "Plastic Processing", value: 2.1,  unit: "kg", description: "Per kg PE granulate, without production of PE" },
    { id: "calandering_pvc",   name: "Calandering PVC foil",      category: "Plastic Processing", value: 3.7,  unit: "kg", description: "Per kg PVC granulate, without production of PVC" },
    { id: "injection_1",       name: "Injection moulding (PE/PP/PS/ABS)", category: "Plastic Processing", value: 21, unit: "kg", description: "Per kg, without production of material" },
    { id: "injection_2",       name: "Injection moulding (PVC/PC)", category: "Plastic Processing", value: 44, unit: "kg", description: "Per kg, without production of material" },
    { id: "milling_plastic",   name: "Milling/turning/drilling (plastic)", category: "Plastic Processing", value: 6.4, unit: "dm³", description: "Per dm³ machined material" },
    { id: "pressure_forming",  name: "Pressure forming",          category: "Plastic Processing", value: 6.4,  unit: "kg", description: "Per kg" },
    { id: "rim_pur",           name: "React. Inj. Moulding – PUR", category: "Plastic Processing", value: 12,  unit: "kg", description: "Per kg, without production of PUR" },
    { id: "ultrasonic_weld",   name: "Ultrasonic welding",        category: "Plastic Processing", value: 0.098, unit: "m", description: "Per m welded length" },
    { id: "vacuum_forming",    name: "Vacuum forming",            category: "Plastic Processing", value: 9.1,  unit: "kg", description: "Per kg material, without production of material" },

    // ── RUBBERS (mPt/kg) ──────────────────────────────────────────────────
    { id: "epdm",              name: "EPDM rubber",               category: "Rubbers",          value: 360, unit: "kg", description: "Vulcanised with 44% carbon, including moulding" },

    // ── PACKAGING MATERIALS (mPt/kg) ──────────────────────────────────────
    { id: "packaging_carton",  name: "Packaging carton",          category: "Packaging Materials", value: 69, unit: "kg", description: "CO₂ absorption in growth stage disregarded" },
    { id: "paper",             name: "Paper",                     category: "Packaging Materials", value: 96, unit: "kg", description: "65% waste paper; CO₂ absorption disregarded" },
    { id: "glass_brown",       name: "Glass (brown)",             category: "Packaging Materials", value: 50, unit: "kg", description: "Packaging glass, 61% recycled" },
    { id: "glass_green",       name: "Glass (green)",             category: "Packaging Materials", value: 51, unit: "kg", description: "Packaging glass, 99% recycled" },
    { id: "glass_white",       name: "Glass (white)",             category: "Packaging Materials", value: 58, unit: "kg", description: "Packaging glass, 55% recycled" },

    // ── CHEMICALS & OTHERS (mPt/kg) ───────────────────────────────────────
    { id: "ammonia",           name: "Ammonia (NH₃)",             category: "Chemicals & Others", value: 160,    unit: "kg", description: "" },
    { id: "argon",             name: "Argon",                     category: "Chemicals & Others", value: 7.8,    unit: "kg", description: "Inert gas, used in light bulbs, welding of reactive metals" },
    { id: "bentonite",         name: "Bentonite",                 category: "Chemicals & Others", value: 13,     unit: "kg", description: "Used in cat litter, porcelain etc." },
    { id: "carbon_black",      name: "Carbon black",              category: "Chemicals & Others", value: 180,    unit: "kg", description: "Used for colouring and as filler" },
    { id: "chem_inorganic",    name: "Chemicals (inorganic, avg)", category: "Chemicals & Others", value: 53,   unit: "kg", description: "Average value for production of inorganic chemicals" },
    { id: "chem_organic",      name: "Chemicals (organic, avg)",  category: "Chemicals & Others", value: 99,    unit: "kg", description: "Average value for production of organic chemicals" },
    { id: "chlorine",          name: "Chlorine (Cl₂)",            category: "Chemicals & Others", value: 38,    unit: "kg", description: "Produced with diaphragm production process (modern technology)" },
    { id: "dimethyl_phthalate",name: "Dimethyl p-phthalate",      category: "Chemicals & Others", value: 190,   unit: "kg", description: "Used as plasticizer for softening PVC" },
    { id: "ethylene_oxide",    name: "Ethylene oxide/glycol",     category: "Chemicals & Others", value: 330,   unit: "kg", description: "Industrial solvent and cleaning agent" },
    { id: "fuel_oil",          name: "Fuel oil",                  category: "Chemicals & Others", value: 180,   unit: "kg", description: "Production of fuel only. Combustion excluded!" },
    { id: "fuel_petrol",       name: "Fuel petrol (unleaded)",    category: "Chemicals & Others", value: 210,   unit: "kg", description: "Production of fuel only. Combustion excluded!" },
    { id: "fuel_diesel",       name: "Fuel diesel",               category: "Chemicals & Others", value: 180,   unit: "kg", description: "Production of fuel only. Combustion excluded!" },
    { id: "hydrogen",          name: "Hydrogen (H₂)",             category: "Chemicals & Others", value: 830,   unit: "kg", description: "Used for reduction processes" },
    { id: "h2so4",             name: "Sulphuric acid (H₂SO₄)",    category: "Chemicals & Others", value: 22,    unit: "kg", description: "Used for cleaning and staining" },
    { id: "hcl",               name: "Hydrochloric acid (HCl)",   category: "Chemicals & Others", value: 39,    unit: "kg", description: "Used for processing of metals and cleaning" },
    { id: "hf",                name: "Fluoric acid (HF)",         category: "Chemicals & Others", value: 140,   unit: "kg", description: "" },
    { id: "nitrogen",          name: "Nitrogen (N₂)",             category: "Chemicals & Others", value: 12,    unit: "kg", description: "Inert atmosphere" },
    { id: "nacl",              name: "Sodium chloride (NaCl)",    category: "Chemicals & Others", value: 6.6,   unit: "kg", description: "" },
    { id: "naoh",              name: "Caustic soda (NaOH)",       category: "Chemicals & Others", value: 38,    unit: "kg", description: "" },
    { id: "nitric_acid",       name: "Nitric acid (HNO₃)",        category: "Chemicals & Others", value: 55,    unit: "kg", description: "Used for staining metals" },
    { id: "oxygen",            name: "Oxygen (O₂)",               category: "Chemicals & Others", value: 12,    unit: "kg", description: "" },
    { id: "phosphoric_acid",   name: "Phosphoric acid (H₃PO₄)",   category: "Chemicals & Others", value: 99,    unit: "kg", description: "Used in preparation of fertiliser" },
    { id: "propylene_glycol",  name: "Propylene glycol",          category: "Chemicals & Others", value: 200,   unit: "kg", description: "Anti-freeze and solvent" },
    { id: "r134a",             name: "R134a coolant (production)", category: "Chemicals & Others", value: 150,   unit: "kg", description: "Production only! Emission of 1kg R134a to air = 7300 mPt" },
    { id: "r22",               name: "R22 coolant (production)",  category: "Chemicals & Others", value: 240,   unit: "kg", description: "Production only! Emission of 1kg R22 to air = 8400 mPt" },
    { id: "silicate",          name: "Silicate (waterglass)",      category: "Chemicals & Others", value: 60,   unit: "kg", description: "Silica gel, detergent manufacture, metal cleaning" },
    { id: "soda",              name: "Soda (Na₂CO₃)",             category: "Chemicals & Others", value: 45,   unit: "kg", description: "Used in detergents" },
    { id: "ureum",             name: "Ureum",                     category: "Chemicals & Others", value: 130,   unit: "kg", description: "Used in fertilisers" },
    { id: "water_decarb",      name: "Water (decarbonized)",      category: "Chemicals & Others", value: 0.0026, unit: "kg", description: "Processing only" },
    { id: "water_demin",       name: "Water (demineralized)",     category: "Chemicals & Others", value: 0.026,  unit: "kg", description: "Processing only" },
    { id: "zeolite",           name: "Zeolite",                   category: "Chemicals & Others", value: 160,   unit: "kg", description: "Used for absorption processes and in detergents" },

    // ── BUILDING MATERIALS (mPt/kg unless noted) ──────────────────────────
    { id: "alkyd_varnish",     name: "Alkyd varnish",             category: "Building Materials", value: 520,  unit: "kg", description: "Production + emissions during use; 55% solvents" },
    { id: "cement",            name: "Cement (Portland)",         category: "Building Materials", value: 20,   unit: "kg", description: "" },
    { id: "ceramics",          name: "Ceramics (bricks etc.)",    category: "Building Materials", value: 28,   unit: "kg", description: "" },
    { id: "concrete",          name: "Concrete (not reinforced)", category: "Building Materials", value: 3.8,  unit: "kg", description: "Density 2200 kg/m³" },
    { id: "float_glass_coated",name: "Float glass (coated)",      category: "Building Materials", value: 51,   unit: "kg", description: "Windows, Tin/Silver/Nickel coating (77 g/m²)" },
    { id: "float_glass_plain", name: "Float glass (uncoated)",    category: "Building Materials", value: 49,   unit: "kg", description: "Used for windows" },
    { id: "gypsum",            name: "Gypsum (selenite)",         category: "Building Materials", value: 9.9,  unit: "kg", description: "Used as filler" },
    { id: "gravel",            name: "Gravel",                    category: "Building Materials", value: 0.84, unit: "kg", description: "Extraction and transport" },
    { id: "lime_burnt",        name: "Lime (burnt, CaO)",         category: "Building Materials", value: 28,   unit: "kg", description: "Production of cement and concrete" },
    { id: "lime_hydrated",     name: "Lime (hydrated, Ca(OH)₂)",  category: "Building Materials", value: 21,   unit: "kg", description: "Production of mortar" },
    { id: "mineral_wool",      name: "Mineral wool",              category: "Building Materials", value: 61,   unit: "kg", description: "Used for insulation" },
    { id: "building_massive",  name: "Massive building (concrete)", category: "Building Materials", value: 1500, unit: "m³", description: "Rough estimate per m³ volume (capital goods)" },
    { id: "building_metal",    name: "Metal construction building", category: "Building Materials", value: 4300, unit: "m³", description: "Rough estimate per m³ volume (capital goods)" },
    { id: "sand",              name: "Sand",                      category: "Building Materials", value: 0.82, unit: "kg", description: "Extraction and transport" },
    { id: "wood_board",        name: "Wood board",                category: "Building Materials", value: 39,   unit: "kg", description: "European wood (FSC); CO₂ absorption disregarded" },
    { id: "wood_massive",      name: "Wood (massive)",            category: "Building Materials", value: 6.6,  unit: "kg", description: "European wood (FSC); CO₂ absorption disregarded" },
    { id: "land_use",          name: "Land-use (urban)",          category: "Building Materials", value: 45,   unit: "m²·yr", description: "Occupation as urban land per m²·yr" },

    // ── HEAT (mPt/MJ) ─────────────────────────────────────────────────────
    { id: "heat_coal_stove",   name: "Heat – coal briquette (stove)", category: "Heat",           value: 4.6,  unit: "MJ", description: "Combustion of coal in a 5–15 kW furnace" },
    { id: "heat_coal_ind",     name: "Heat – coal (industrial furnace)", category: "Heat",        value: 4.2,  unit: "MJ", description: "Industrial furnace (1–10 MW)" },
    { id: "heat_lignite",      name: "Heat – lignite briquette",   category: "Heat",              value: 3.2,  unit: "MJ", description: "Combustion in 5–15 kW furnace" },
    { id: "heat_gas_boiler",   name: "Heat – gas (boiler)",        category: "Heat",              value: 5.4,  unit: "MJ", description: "Atmospheric boiler (<100 kW), low NOx" },
    { id: "heat_gas_ind",      name: "Heat – gas (industrial furnace)", category: "Heat",         value: 5.3,  unit: "MJ", description: "Industrial furnace (>100 kW), low NOx" },
    { id: "heat_oil_boiler",   name: "Heat – oil (boiler)",        category: "Heat",              value: 5.6,  unit: "MJ", description: "10 kW furnace" },
    { id: "heat_oil_ind",      name: "Heat – oil (industrial furnace)", category: "Heat",         value: 11,   unit: "MJ", description: "Industrial furnace" },
    { id: "heat_wood",         name: "Heat – wood",                category: "Heat",              value: 1.6,  unit: "MJ", description: "CO₂ absorption and emission disregarded" },

    // ── ELECTRICITY (mPt/kWh) ─────────────────────────────────────────────
    { id: "elec_hv_europe",    name: "Electricity HV Europe (UCPTE)", category: "Electricity",   value: 22,   unit: "kWh", description: "High voltage (>24 kVolt)" },
    { id: "elec_mv_europe",    name: "Electricity MV Europe (UCPTE)", category: "Electricity",   value: 22,   unit: "kWh", description: "Medium voltage (1–24 kVolt)" },
    { id: "elec_lv_europe",    name: "Electricity LV Europe (UCPTE)", category: "Electricity",   value: 26,   unit: "kWh", description: "Low voltage (<1000 V) — use this for typical household/industrial" },
    { id: "elec_lv_austria",   name: "Electricity LV Austria",     category: "Electricity",      value: 18,   unit: "kWh", description: "" },
    { id: "elec_lv_belgium",   name: "Electricity LV Belgium",     category: "Electricity",      value: 22,   unit: "kWh", description: "" },
    { id: "elec_lv_switzerland",name:"Electricity LV Switzerland", category: "Electricity",      value: 8.4,  unit: "kWh", description: "" },
    { id: "elec_lv_uk",        name: "Electricity LV Great Britain",category: "Electricity",     value: 33,   unit: "kWh", description: "" },
    { id: "elec_lv_france",    name: "Electricity LV France",      category: "Electricity",      value: 8.9,  unit: "kWh", description: "" },
    { id: "elec_lv_greece",    name: "Electricity LV Greece",      category: "Electricity",      value: 61,   unit: "kWh", description: "" },
    { id: "elec_lv_italy",     name: "Electricity LV Italy",       category: "Electricity",      value: 47,   unit: "kWh", description: "" },
    { id: "elec_lv_netherlands",name:"Electricity LV Netherlands", category: "Electricity",      value: 37,   unit: "kWh", description: "" },
    { id: "elec_lv_portugal",  name: "Electricity LV Portugal",    category: "Electricity",      value: 46,   unit: "kWh", description: "" },

    // ── SOLAR ENERGY (mPt/kWh) ────────────────────────────────────────────
    { id: "solar_facade_msi",  name: "Solar electricity – facade (m-Si)", category: "Solar Energy", value: 9.7, unit: "kWh", description: "Small installation (3 kWp), monocrystalline cells, facade" },
    { id: "solar_facade_psi",  name: "Solar electricity – facade (p-Si)", category: "Solar Energy", value: 14,  unit: "kWh", description: "Small installation (3 kWp), polycrystalline cells, facade" },
    { id: "solar_roof_msi",    name: "Solar electricity – roof (m-Si)",   category: "Solar Energy", value: 7.2, unit: "kWh", description: "Small installation (3 kWp), monocrystalline cells, roof" },
    { id: "solar_roof_psi",    name: "Solar electricity – roof (p-Si)",   category: "Solar Energy", value: 10,  unit: "kWh", description: "Small installation (3 kWp), polycrystalline cells, roof" },

    // ── TRANSPORT (mPt/tkm unless noted) ─────────────────────────────────
    { id: "van_3_5t",          name: "Delivery van <3.5t",         category: "Transport",         value: 140,  unit: "tkm", description: "Road transport, 30% load (European avg incl. return)" },
    { id: "truck_16t",         name: "Truck 16t",                  category: "Transport",         value: 34,   unit: "tkm", description: "Road transport, 40% load (European avg incl. return)" },
    { id: "truck_28t",         name: "Truck 28t",                  category: "Transport",         value: 22,   unit: "tkm", description: "Road transport, 40% load (European avg incl. return)" },
    { id: "truck_28t_vol",     name: "Truck 28t (volume limited)", category: "Transport",         value: 8,    unit: "m³·km", description: "Use when volume, not mass, is the limiting factor" },
    { id: "truck_40t",         name: "Truck 40t",                  category: "Transport",         value: 15,   unit: "tkm", description: "Road transport, 50% load (European avg incl. return)" },
    { id: "passenger_car",     name: "Passenger car (W-Europe)",   category: "Transport",         value: 29,   unit: "km",  description: "Road transport per km" },
    { id: "rail",              name: "Rail transport",             category: "Transport",         value: 3.9,  unit: "tkm", description: "20% diesel, 80% electric trains" },
    { id: "tanker_inland",     name: "Tanker (inland waterway)",   category: "Transport",         value: 5,    unit: "tkm", description: "65% load (European avg incl. return)" },
    { id: "tanker_oceanic",    name: "Tanker (oceanic)",           category: "Transport",         value: 0.8,  unit: "tkm", description: "54% load (European avg incl. return)" },
    { id: "freighter_inland",  name: "Freighter (inland waterway)",category: "Transport",         value: 5.1,  unit: "tkm", description: "70% load (European avg incl. return)" },
    { id: "freighter_oceanic", name: "Freighter (oceanic)",        category: "Transport",         value: 1.1,  unit: "tkm", description: "70% load (European avg incl. return)" },
    { id: "air_avg",           name: "Air transport (average)",    category: "Transport",         value: 78,   unit: "tkm", description: "78% load, average of all flights" },
    { id: "air_continental",   name: "Air transport (continental)",category: "Transport",         value: 120,  unit: "tkm", description: "Boeing 737, 62% load" },
    { id: "air_intercont_747", name: "Air transport (intercontinental, 747)", category: "Transport", value: 80, unit: "tkm", description: "Boeing 747, 78% load" },
    { id: "air_intercont_767", name: "Air transport (intercontinental, 767/MD11)", category: "Transport", value: 72, unit: "tkm", description: "Boeing 767 or MD-11, 71% load" },

    // ── RECYCLING (mPt/kg) ────────────────────────────────────────────────
    { id: "recycle_pe",        name: "Recycling PE",               category: "Recycling",        value: -240, unit: "kg", description: "Total: −240 (Process: +86, Avoided: −330); not mixed with other plastics" },
    { id: "recycle_pp",        name: "Recycling PP",               category: "Recycling",        value: -210, unit: "kg", description: "Total: −210 (Process: +86, Avoided: −300); not mixed with other plastics" },
    { id: "recycle_ps",        name: "Recycling PS",               category: "Recycling",        value: -240, unit: "kg", description: "Total: −240 (Process: +86, Avoided: −330); not mixed with other plastics" },
    { id: "recycle_pvc",       name: "Recycling PVC",              category: "Recycling",        value: -170, unit: "kg", description: "Total: −170 (Process: +86, Avoided: −250); not mixed with other plastics" },
    { id: "recycle_paper",     name: "Recycling paper",            category: "Recycling",        value: -1.2, unit: "kg", description: "Total: −1.2 (Process: +32, Avoided: −33); avoids virgin paper" },
    { id: "recycle_cardboard", name: "Recycling cardboard",        category: "Recycling",        value: -8.3, unit: "kg", description: "Total: −8.3 (Process: +41, Avoided: −50); avoids virgin cardboard" },
    { id: "recycle_glass",     name: "Recycling glass",            category: "Recycling",        value: -15,  unit: "kg", description: "Total: −15 (Process: +51, Avoided: −66); avoids virgin glass" },
    { id: "recycle_aluminium", name: "Recycling aluminium",        category: "Recycling",        value: -720, unit: "kg", description: "Total: −720 (Process: +60, Avoided: −780); avoids primary aluminium" },
    { id: "recycle_ferro",     name: "Recycling ferro metals",     category: "Recycling",        value: -70,  unit: "kg", description: "Total: −70 (Process: +24, Avoided: −94); avoids primary steel" },

    // ── WASTE — INCINERATION (mPt/kg) ─────────────────────────────────────
    { id: "inc_pe",            name: "Incineration – PE",          category: "Waste — Incineration", value: -19,  unit: "kg", description: "Can be used for both HDPE and LDPE" },
    { id: "inc_pp",            name: "Incineration – PP",          category: "Waste — Incineration", value: -13,  unit: "kg", description: "" },
    { id: "inc_pur",           name: "Incineration – PUR",         category: "Waste — Incineration", value: 2.8,  unit: "kg", description: "Can be used for all types of PUR" },
    { id: "inc_pet",           name: "Incineration – PET",         category: "Waste — Incineration", value: -6.3, unit: "kg", description: "" },
    { id: "inc_ps",            name: "Incineration – PS",          category: "Waste — Incineration", value: -5.3, unit: "kg", description: "Can also be used for ABS, HIPS, GPPS, EPS" },
    { id: "inc_nylon",         name: "Incineration – Nylon",       category: "Waste — Incineration", value: 1.1,  unit: "kg", description: "Relatively low energy yield" },
    { id: "inc_pvc",           name: "Incineration – PVC",         category: "Waste — Incineration", value: 37,   unit: "kg", description: "Relatively low energy yield" },
    { id: "inc_pvdc",          name: "Incineration – PVDC",        category: "Waste — Incineration", value: 66,   unit: "kg", description: "Relatively low energy yield" },
    { id: "inc_paper",         name: "Incineration – Paper",       category: "Waste — Incineration", value: -12,  unit: "kg", description: "High energy yield; CO₂ emission disregarded" },
    { id: "inc_cardboard",     name: "Incineration – Cardboard",   category: "Waste — Incineration", value: -12,  unit: "kg", description: "High energy yield; CO₂ emission disregarded" },
    { id: "inc_steel",         name: "Incineration – Steel",       category: "Waste — Incineration", value: -32,  unit: "kg", description: "40% magnetic separation for recycling (European avg)" },
    { id: "inc_aluminium",     name: "Incineration – Aluminium",   category: "Waste — Incineration", value: -110, unit: "kg", description: "15% magnetic separation for recycling, avoiding primary aluminium" },
    { id: "inc_glass",         name: "Incineration – Glass",       category: "Waste — Incineration", value: 5.1,  unit: "kg", description: "Almost inert material; can be used for other inert materials" },

    // ── WASTE — LANDFILL (mPt/kg unless noted) ────────────────────────────
    { id: "lf_pe",             name: "Landfill – PE",              category: "Waste — Landfill", value: 3.9,  unit: "kg", description: "" },
    { id: "lf_pp",             name: "Landfill – PP",              category: "Waste — Landfill", value: 3.5,  unit: "kg", description: "" },
    { id: "lf_pet",            name: "Landfill – PET",             category: "Waste — Landfill", value: 3.1,  unit: "kg", description: "" },
    { id: "lf_ps",             name: "Landfill – PS",              category: "Waste — Landfill", value: 4.1,  unit: "kg", description: "Can also be used for ABS" },
    { id: "lf_eps_foam",       name: "Landfill – EPS foam",        category: "Waste — Landfill", value: 7.4,  unit: "kg", description: "PS foam, 40 kg/m³, large volume" },
    { id: "lf_foam_20",        name: "Landfill – foam (20 kg/m³)", category: "Waste — Landfill", value: 9.7,  unit: "kg", description: "Foam like PUR at 20 kg/m³" },
    { id: "lf_foam_100",       name: "Landfill – foam (100 kg/m³)",category: "Waste — Landfill", value: 4.3,  unit: "kg", description: "Foam like PUR at 100 kg/m³" },
    { id: "lf_nylon",          name: "Landfill – Nylon",           category: "Waste — Landfill", value: 3.6,  unit: "kg", description: "" },
    { id: "lf_pvc",            name: "Landfill – PVC",             category: "Waste — Landfill", value: 2.8,  unit: "kg", description: "Excluding leaching of metal stabilizer" },
    { id: "lf_pvdc",           name: "Landfill – PVDC",            category: "Waste — Landfill", value: 2.2,  unit: "kg", description: "" },
    { id: "lf_paper",          name: "Landfill – Paper",           category: "Waste — Landfill", value: 4.3,  unit: "kg", description: "CO₂ and methane emission disregarded" },
    { id: "lf_cardboard",      name: "Landfill – Cardboard",       category: "Waste — Landfill", value: 4.2,  unit: "kg", description: "CO₂ and methane emission disregarded" },
    { id: "lf_glass",          name: "Landfill – Glass",           category: "Waste — Landfill", value: 1.4,  unit: "kg", description: "Almost inert; can also be used for other inert materials" },
    { id: "lf_steel",          name: "Landfill – Steel",           category: "Waste — Landfill", value: 1.4,  unit: "kg", description: "Almost inert on landfill; can be used for ferro metals" },
    { id: "lf_aluminium",      name: "Landfill – Aluminium",       category: "Waste — Landfill", value: 1.4,  unit: "kg", description: "Valid for primary and recycled aluminium" },
    { id: "lf_volume",         name: "Landfill – per m³ volume",   category: "Waste — Landfill", value: 140,  unit: "m³", description: "For voluminous waste (foam, bulky products). Assumes waste height 10m." },

    // ── WASTE — MUNICIPAL (mPt/kg) ────────────────────────────────────────
    { id: "mw_pe",             name: "Municipal waste – PE",       category: "Waste — Municipal", value: -1.1,  unit: "kg", description: "" },
    { id: "mw_pp",             name: "Municipal waste – PP",       category: "Waste — Municipal", value: -0.13, unit: "kg", description: "" },
    { id: "mw_pet",            name: "Municipal waste – PET",      category: "Waste — Municipal", value: 1,     unit: "kg", description: "" },
    { id: "mw_ps",             name: "Municipal waste – PS",       category: "Waste — Municipal", value: 2,     unit: "kg", description: "Not valid for foam products" },
    { id: "mw_nylon",          name: "Municipal waste – Nylon",    category: "Waste — Municipal", value: 3.1,   unit: "kg", description: "" },
    { id: "mw_pvc",            name: "Municipal waste – PVC",      category: "Waste — Municipal", value: 10,    unit: "kg", description: "" },
    { id: "mw_pvdc",           name: "Municipal waste – PVDC",     category: "Waste — Municipal", value: 16,    unit: "kg", description: "" },
    { id: "mw_paper",          name: "Municipal waste – Paper",    category: "Waste — Municipal", value: 0.71,  unit: "kg", description: "" },
    { id: "mw_cardboard",      name: "Municipal waste – Cardboard",category: "Waste — Municipal", value: 0.64,  unit: "kg", description: "" },
    { id: "mw_steel",          name: "Municipal waste – Steel (ECCS)", category: "Waste — Municipal", value: -5.9, unit: "kg", description: "Valid for primary steel only!" },
    { id: "mw_aluminium",      name: "Municipal waste – Aluminium",category: "Waste — Municipal", value: -23,   unit: "kg", description: "Valid for primary aluminium only!" },
    { id: "mw_glass",          name: "Municipal waste – Glass",    category: "Waste — Municipal", value: 2.2,   unit: "kg", description: "" },

    // ── WASTE — HOUSEHOLD (mPt/kg) ────────────────────────────────────────
    { id: "hw_paper",          name: "Household waste – Paper",    category: "Waste — Household", value: -0.13, unit: "kg", description: "44% separation by consumers" },
    { id: "hw_cardboard",      name: "Household waste – Cardboard",category: "Waste — Household", value: -3.3,  unit: "kg", description: "44% separation by consumers" },
    { id: "hw_glass",          name: "Household waste – Glass",    category: "Waste — Household", value: -6.9,  unit: "kg", description: "52% separation by consumers" }

  ]
};

// Helper: get all unique categories
ECO99.getCategories = function() {
  return [...new Set(ECO99.materials.map(m => m.category))];
};

// Helper: get materials by category
ECO99.byCategory = function(cat) {
  return ECO99.materials.filter(m => m.category === cat);
};

// Helper: search materials by name (case-insensitive)
ECO99.search = function(query) {
  const q = query.toLowerCase();
  return ECO99.materials.filter(m =>
    m.name.toLowerCase().includes(q) ||
    m.category.toLowerCase().includes(q) ||
    m.description.toLowerCase().includes(q)
  );
};

// Helper: get a material by id
ECO99.get = function(id) {
  return ECO99.materials.find(m => m.id === id);
};
