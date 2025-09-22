export interface CityData {
  city: string
  state: string
  population: string
  zipCodes: string[]
  description: string
  longDescription: string
  neighborhoods: string[]
  landmarks: string[]
  completedProjects: number
  averageProjectValue: string
  specialties: string[]
  testimonials: {
    text: string
    author: string
    neighborhood: string
    project: string
    rating: number
  }[]
  nearbyAreas: string[]
  services: {
    title: string
    description: string
    features: string[]
    startingPrice: string
  }[]
  faqs?: {
    question: string
    answer: string
  }[]
}

export const allCities = [
  "Brighton",
  "Pittsford",
  "Webster",
  "Penfield",
  "Fairport",
  "Greece",
  "Henrietta",
  "Irondequoit",
  "Gates",
  "Chili",
  "Spencerport",
  "Brockport",
  "Churchville",
  "East Rochester",
  "Rochester",
  "Victor",
  "Hilton",
]

export const primaryServiceAreas = [
  {
    city: "Rochester",
    slug: "rochester-ny",
    population: "206,000",
    description:
      "Alex Renovation provides full home renovation and handyman services in Rochester, NY. From painting and drywall to plumbing, flooring, and complete bathroom or kitchen remodeling, we help homeowners upgrade their spaces with professional results. Our local team delivers reliable, affordable, and detail-oriented services across the city.",
    highlights: ["Historic neighborhoods", "Urban revitalization", "Diverse housing stock"],
    completedProjects: 156,
    averageProjectValue: "$32,000",
    specialties: ["Historic home renovations", "Urban loft conversions", "Multi-family updates"],
    faqs: [
      {
        question: "Do you provide same-day handyman services in Rochester?",
        answer: "Yes, we can often accommodate small repairs or urgent fixes the same day, depending on scheduling.",
      },
      {
        question: "Can you handle both small and large projects?",
        answer: "Absolutely — from fixing a door handle to remodeling an entire bathroom.",
      },
      {
        question: "Are materials included in the price?",
        answer: "Most clients provide materials, but we can also purchase them on your behalf with reimbursement.",
      },
      {
        question: "Do you serve commercial properties in Rochester?",
        answer: "Yes, we also work with small offices and retail spaces.",
      },
    ],
  },
  {
    city: "Brighton",
    slug: "brighton-ny",
    population: "36,000",
    description:
      "Alex Renovation provides Brighton, NY homeowners with reliable renovation services including painting, drywall, plumbing, and flooring. We also specialize in full bathroom and kitchen remodeling with modern design and quality craftsmanship.",
    highlights: ["Historic homes", "Family neighborhoods", "Close to downtown"],
    completedProjects: 85,
    averageProjectValue: "$28,000",
    specialties: ["Kitchen renovations", "Bathroom remodels", "Historic home updates"],
    faqs: [
      {
        question: "Do you do small handyman repairs in Brighton?",
        answer: "Yes, we take care of small tasks like lock changes and fixture replacements.",
      },
      {
        question: "Can you remodel bathrooms in Brighton homes?",
        answer: "Yes, we offer full bathroom remodeling with tile, plumbing, and fixtures.",
      },
      {
        question: "Do you provide painting for both interior and exterior?",
        answer: "Yes, we do both interior and exterior painting projects.",
      },
      {
        question: "Are consultations free?",
        answer: "Yes, we provide free consultations and estimates.",
      },
    ],
  },
  {
    city: "Pittsford",
    slug: "pittsford-ny",
    population: "29,000",
    description:
      "Homeowners in Pittsford, NY choose Alex Renovation for high-quality remodeling and handyman services. From elegant bathroom and kitchen projects to detailed finish carpentry, we create professional results that fit your home's style.",
    highlights: ["Luxury homes", "Top-rated schools", "Village charm"],
    completedProjects: 72,
    averageProjectValue: "$35,000",
    specialties: ["Luxury kitchens", "Master bathrooms", "Custom millwork"],
    faqs: [
      {
        question: "Do you work on luxury kitchen remodels?",
        answer: "Yes, we provide custom kitchen renovations tailored to upscale homes.",
      },
      {
        question: "Can you recommend materials?",
        answer: "We can advise on cost-effective and stylish materials for your project.",
      },
      {
        question: "Do you offer basement finishing in Pittsford?",
        answer: "Yes, basement framing, drywall, flooring, and insulation are available.",
      },
      {
        question: "Are free estimates available?",
        answer: "Yes, we provide free estimates for all projects in Pittsford.",
      },
    ],
  },
  {
    city: "Webster",
    slug: "webster-ny",
    population: "42,000",
    description:
      "Alex Renovation proudly serves Webster, NY with a wide range of renovation services. Whether you need fresh interior painting, new flooring, or a full kitchen upgrade, our team brings experience and craftsmanship to every project.",
    highlights: ["Growing community", "Family-friendly", "Lake access"],
    completedProjects: 68,
    averageProjectValue: "$25,000",
    specialties: ["Flooring installation", "Basement finishing", "Exterior improvements"],
    faqs: [
      {
        question: "Can you renovate older homes in Webster?",
        answer: "Yes, we specialize in both modern and older homes, with solutions tailored to each property.",
      },
      {
        question: "Do you install bathroom fixtures like showers and toilets?",
        answer: "Yes, our plumbing team handles complete bathroom installations.",
      },
      {
        question: "Is drywall repair included with painting?",
        answer: "Small drywall repairs are usually included before painting for best results.",
      },
      {
        question: "Can you do exterior improvements?",
        answer: "Yes, we handle fencing, siding repairs, and entry door installations.",
      },
    ],
  },
  {
    city: "Penfield",
    slug: "penfield-ny",
    population: "38,000",
    description: "Quality craftsmanship for Penfield's established neighborhoods",
    highlights: ["Established community", "Excellent schools", "Suburban living"],
    completedProjects: 59,
    averageProjectValue: "$30,000",
    specialties: ["Open concept renovations", "Kitchen islands", "Home additions"],
  },
  {
    city: "Fairport",
    slug: "fairport-ny",
    population: "33,000",
    description: "Renovation expertise for Fairport's charming canal community",
    highlights: ["Canal village", "Historic district", "Walkable downtown"],
    completedProjects: 54,
    averageProjectValue: "$26,000",
    specialties: ["Historic renovations", "Exterior siding", "Window replacements"],
  },
  {
    city: "Henrietta",
    slug: "henrietta-ny",
    population: "46,000",
    description: "Professional renovation services for Henrietta residents",
    highlights: ["Diverse housing", "RIT proximity", "Growing area"],
    completedProjects: 41,
    averageProjectValue: "$24,000",
    specialties: ["Basement conversions", "Student housing updates", "Modern renovations"],
  },
  {
    city: "Greece",
    slug: "greece-ny",
    population: "96,000",
    description:
      "Alex Renovation brings professional renovation services to Greece, NY. From flooring and drywall to electrical, plumbing, and remodeling, our team ensures top-quality results tailored to each home.",
    highlights: ["Lake Ontario access", "Diverse neighborhoods", "Established community"],
    completedProjects: 78,
    averageProjectValue: "$22,000",
    specialties: ["Bathroom renovations", "Flooring", "Electrical upgrades"],
    faqs: [
      {
        question: "Do you work on multi-family properties in Greece?",
        answer: "Yes, we service apartments, rentals, and multi-family buildings.",
      },
      {
        question: "Can you replace old flooring?",
        answer: "Yes, we install vinyl, laminate, hardwood, and tile flooring.",
      },
      {
        question: "Do you offer plumbing services?",
        answer: "Yes, we install sinks, toilets, showers, and handle basic plumbing repairs.",
      },
      {
        question: "Can you do ceiling repairs?",
        answer: "Yes, we handle drywall ceilings, tiles, and insulation.",
      },
    ],
  },
  {
    city: "Irondequoit",
    slug: "irondequoit-ny",
    population: "51,000",
    description:
      "Alex Renovation serves Irondequoit, NY with dependable home improvement services. From electrical upgrades and plumbing to flooring, painting, and insulation, we make sure your home is comfortable and modern.",
    highlights: ["Lakefront properties", "Established homes", "Close to city"],
    completedProjects: 47,
    averageProjectValue: "$27,000",
    specialties: ["Lakefront renovations", "Deck construction", "Weatherproofing"],
    faqs: [
      {
        question: "Do you replace windows in Irondequoit?",
        answer: "Yes, we handle window and door installation and replacement.",
      },
      {
        question: "Can you update older electrical systems?",
        answer: "Yes, we install new outlets, lighting, and update wiring when needed.",
      },
      {
        question: "Do you offer ceiling repairs?",
        answer: "We install and repair drywall ceilings, Armstrong panels, and more.",
      },
      {
        question: "Do you handle kitchen backsplash installation?",
        answer: "Yes, tiling services include backsplashes, floors, and showers.",
      },
    ],
  },
  {
    city: "Gates",
    slug: "gates-ny",
    population: "28,000",
    description: "Professional renovation services for Gates' established residential community",
    highlights: ["Affordable housing", "Family neighborhoods", "Close to amenities"],
    completedProjects: 38,
    averageProjectValue: "$23,000",
    specialties: ["Kitchen updates", "Bathroom renovations", "Flooring installation"],
  },
  {
    city: "East Rochester",
    slug: "east-rochester-ny",
    population: "6,600",
    description: "Quality home improvements for East Rochester's charming village community",
    highlights: ["Village charm", "Historic homes", "Walkable community"],
    completedProjects: 22,
    averageProjectValue: "$25,000",
    specialties: ["Historic renovations", "Small space optimization", "Energy efficiency"],
  },
  {
    city: "Spencerport",
    slug: "spencerport-ny",
    population: "3,600",
    description: "Trusted renovation partner for Spencerport's canal village community",
    highlights: ["Canal village", "Historic district", "Small town charm"],
    completedProjects: 19,
    averageProjectValue: "$24,000",
    specialties: ["Historic preservation", "Cottage renovations", "Waterfront improvements"],
  },
  {
    city: "Brockport",
    slug: "brockport-ny",
    population: "8,400",
    description: "Professional home renovations for Brockport's college town community",
    highlights: ["College town", "Historic village", "Canal access"],
    completedProjects: 25,
    averageProjectValue: "$22,000",
    specialties: ["Student housing updates", "Historic home renovations", "Multi-family improvements"],
  },
]

export const cityFAQs = [
  {
    question: "How long does a typical renovation take in this area?",
    answer:
      "Most kitchen renovations take 2-3 weeks, bathrooms 1-2 weeks, and flooring projects 3-5 days. Timeline depends on project scope and material availability.",
  },
  {
    question: "Do you handle permits for local renovations?",
    answer:
      "Yes, we handle all necessary permits and inspections required by local building codes. We're familiar with each municipality's specific requirements.",
  },
  {
    question: "What's included in your free estimate?",
    answer:
      "Our free estimate includes a detailed project assessment, material recommendations, timeline, and comprehensive pricing with no hidden fees.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes, we partner with several financing companies to offer flexible payment plans and competitive rates for qualified homeowners.",
  },
  {
    question: "What warranty do you provide on your work?",
    answer:
      "We provide comprehensive warranties on all our work with terms varying by project type and materials used.",
  },
]

export const additionalServiceAreas = ["Gates", "Chili", "Spencerport", "Brockport", "Churchville", "East Rochester"]

export function getCityBySlug(slug: string) {
  return primaryServiceAreas.find((city) => city.slug === slug)
}

export function getAllCitySlugs() {
  return primaryServiceAreas.map((city) => city.slug)
}
