import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"
import { MapPin, Phone, Star, ArrowLeft, Home, CheckCircle, Mail, Clock } from "lucide-react"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { cityFAQs } from "@/lib/city-data"

// City data for local SEO pages
const cityData = {
  "brighton-ny": {
    city: "Brighton",
    state: "NY",
    population: "36,000",
    zipCodes: ["14610", "14618", "14620"],
    description:
      "Professional home renovation services in Brighton, NY. Serving the Brighton community with quality kitchen remodels, bathroom renovations, flooring installation, and complete home improvements.",
    longDescription:
      "Brighton, New York is a beautiful suburban community just south of Rochester, known for its tree-lined streets, excellent schools, and well-maintained homes. Our renovation team has been serving Brighton homeowners for over 10 years, helping transform houses into dream homes with quality craftsmanship and personalized service.",
    neighborhoods: ["Twelve Corners", "Brighton Village", "Elmwood", "Highland Park", "South Wedge", "Swillburg"],
    landmarks: ["Highland Park", "Twelve Corners Shopping", "Brighton Town Park", "Mendon Ponds Park"],
    completedProjects: 85,
    averageProjectValue: "$28,000",
    specialties: [
      "Kitchen renovations for historic homes",
      "Bathroom remodels with modern fixtures",
      "Hardwood floor refinishing",
      "Basement finishing and family rooms",
      "Exterior siding and window replacement",
      "Custom cabinetry and built-ins",
    ],
    testimonials: [
      {
        text: "Alex's team did an amazing job on our Brighton kitchen renovation. They understood the character of our 1920s home and created a perfect blend of modern functionality with historic charm.",
        author: "Sarah M.",
        neighborhood: "Twelve Corners",
        project: "Kitchen Renovation",
        rating: 5,
      },
      {
        text: "Professional, punctual, and incredibly skilled. Our bathroom remodel exceeded expectations and was completed on time and within budget.",
        author: "Michael C.",
        neighborhood: "Brighton Village",
        project: "Master Bathroom",
        rating: 5,
      },
    ],
    nearbyAreas: ["Pittsford", "Rochester", "Henrietta", "Penfield"],
    services: [
      {
        title: "Kitchen Renovations Brighton NY",
        description:
          "Transform your Brighton kitchen with custom cabinetry, premium countertops, and modern appliances. We specialize in preserving the character of Brighton's historic homes while adding modern functionality.",
        features: [
          "Custom cabinet design",
          "Quartz & granite countertops",
          "Kitchen island installation",
          "Appliance integration",
        ],
        startingPrice: "$15,000",
      },
      {
        title: "Bathroom Remodeling Brighton NY",
        description:
          "Create spa-like bathrooms that complement Brighton's elegant homes. From powder room updates to master suite transformations, we deliver quality results that add value and comfort.",
        features: ["Walk-in showers", "Double vanities", "Heated floors", "Custom tile work"],
        startingPrice: "$8,000",
      },
      {
        title: "Flooring Installation Brighton NY",
        description:
          "Beautiful hardwood, luxury vinyl, and tile flooring installation throughout Brighton homes. We work with the unique layouts and architectural details of Brighton's diverse housing stock.",
        features: ["Hardwood refinishing", "Luxury vinyl plank", "Ceramic & porcelain tile", "Carpet installation"],
        startingPrice: "$5,000",
      },
    ],
  },
  "pittsford-ny": {
    city: "Pittsford",
    state: "NY",
    population: "29,000",
    zipCodes: ["14534"],
    description:
      "Luxury home renovation services in Pittsford, NY. Specializing in high-end kitchen remodels, spa-like bathrooms, and custom home improvements for Pittsford's upscale community.",
    longDescription:
      "Pittsford, New York is renowned for its excellent schools, beautiful homes, and charming village atmosphere. Our renovation team understands the high standards expected in Pittsford and delivers luxury renovations that enhance property values and lifestyle quality.",
    neighborhoods: ["Pittsford Village", "Thornell Farm", "Sutherland", "Cobblestone Creek", "Pittsford Farms"],
    landmarks: ["Pittsford Village", "Schoen Place", "Thornell Farm Park", "Pittsford Plaza"],
    completedProjects: 72,
    averageProjectValue: "$35,000",
    specialties: [
      "Luxury kitchen renovations",
      "Master bathroom suites",
      "Custom millwork and built-ins",
      "High-end flooring installation",
      "Whole home renovations",
      "Outdoor living spaces",
    ],
    testimonials: [
      {
        text: "The attention to detail in our Pittsford kitchen renovation was exceptional. Every element was perfectly executed, from the custom cabinetry to the marble countertops.",
        author: "Jennifer L.",
        neighborhood: "Pittsford Village",
        project: "Luxury Kitchen",
        rating: 5,
      },
      {
        text: "Our master bathroom is now a true spa retreat. The craftsmanship and material quality exceeded our high expectations.",
        author: "Robert D.",
        neighborhood: "Thornell Farm",
        project: "Master Bathroom Suite",
        rating: 5,
      },
    ],
    nearbyAreas: ["Brighton", "Penfield", "Fairport", "Mendon"],
    services: [
      {
        title: "Luxury Kitchen Renovations Pittsford NY",
        description:
          "High-end kitchen renovations featuring premium materials, custom cabinetry, and luxury appliances. We create stunning kitchens that match Pittsford's upscale lifestyle and home values.",
        features: [
          "Custom luxury cabinetry",
          "Natural stone countertops",
          "Premium appliance packages",
          "Designer lighting",
        ],
        startingPrice: "$25,000",
      },
      {
        title: "Master Bathroom Suites Pittsford NY",
        description:
          "Spa-like master bathrooms with luxury finishes, custom tile work, and premium fixtures. Transform your Pittsford home's master suite into a personal retreat.",
        features: ["Luxury shower systems", "Soaking tubs", "Custom vanities", "Heated floors"],
        startingPrice: "$15,000",
      },
      {
        title: "Custom Home Renovations Pittsford NY",
        description:
          "Complete home renovations and additions that enhance Pittsford's beautiful properties. From open concept living to luxury finishes throughout.",
        features: ["Whole home design", "Custom millwork", "Premium materials", "Architectural details"],
        startingPrice: "$50,000",
      },
    ],
  },
  "penfield-ny": {
    city: "Penfield",
    state: "NY",
    population: "38,000",
    zipCodes: ["14526"],
    description:
      "Quality home renovation services in Penfield, NY. Kitchen remodels, bathroom renovations, flooring, and home improvements for Penfield's established neighborhoods.",
    longDescription:
      "Penfield, New York is a well-established suburban community known for excellent schools, family-friendly neighborhoods, and well-maintained homes. Our renovation team specializes in updating Penfield homes with modern amenities while preserving their classic suburban charm.",
    neighborhoods: [
      "Penfield Center",
      "Panorama Plaza",
      "Baird Road",
      "Five Mile Line",
      "Harris Whalen",
      "Scribner Road",
    ],
    landmarks: ["Penfield Town Hall", "Rothfuss Park", "Penfield Library", "Panorama Plaza"],
    completedProjects: 59,
    averageProjectValue: "$30,000",
    specialties: [
      "Open concept renovations",
      "Kitchen islands and breakfast bars",
      "Master bathroom suites",
      "Basement finishing",
      "Home office conversions",
      "Mudroom additions",
    ],
    testimonials: [
      {
        text: "Our Penfield kitchen renovation opened up the entire first floor. The new island is perfect for family gatherings and homework time.",
        author: "Lisa K.",
        neighborhood: "Penfield Center",
        project: "Open Concept Kitchen",
        rating: 5,
      },
      {
        text: "Alex's team finished our basement beautifully. It's now our favorite space in the house - perfect for movie nights and entertaining.",
        author: "David R.",
        neighborhood: "Harris Whalen",
        project: "Basement Finishing",
        rating: 5,
      },
    ],
    nearbyAreas: ["Webster", "Brighton", "Pittsford", "Fairport"],
    services: [
      {
        title: "Open Concept Renovations Penfield NY",
        description:
          "Transform your Penfield home with open concept living spaces. Remove walls, create flow, and modernize your home's layout for today's lifestyle.",
        features: [
          "Wall removal and structural work",
          "Kitchen island installation",
          "Coordinated flooring",
          "Integrated lighting design",
        ],
        startingPrice: "$18,000",
      },
      {
        title: "Basement Finishing Penfield NY",
        description:
          "Turn your Penfield basement into valuable living space. Family rooms, home offices, playrooms - we create comfortable, functional finished basements.",
        features: ["Moisture control systems", "Egress windows", "Full bathrooms", "Built-in storage"],
        startingPrice: "$20,000",
      },
      {
        title: "Master Bathroom Renovations Penfield NY",
        description:
          "Create luxurious master bathrooms in your Penfield home. Double vanities, walk-in showers, and spa-like features for the ultimate retreat.",
        features: ["Walk-in showers", "Double vanities", "Soaking tubs", "Heated tile floors"],
        startingPrice: "$12,000",
      },
    ],
  },
  "fairport-ny": {
    city: "Fairport",
    state: "NY",
    population: "33,000",
    zipCodes: ["14450"],
    description:
      "Professional home renovation services in Fairport, NY. Specializing in historic home renovations, kitchen remodels, and exterior improvements for Fairport's canal village community.",
    longDescription:
      "Fairport, New York is a charming canal village community with a rich history and walkable downtown. Our renovation team specializes in preserving the historic character of Fairport homes while adding modern conveniences and energy efficiency.",
    neighborhoods: ["Fairport Village", "Perinton Hills", "Willowbrook", "Fairport Landing", "Canal District"],
    landmarks: ["Erie Canal", "Fairport Village Landing", "Perinton Park", "Historic Lift Bridge"],
    completedProjects: 54,
    averageProjectValue: "$26,000",
    specialties: [
      "Historic home renovations",
      "Exterior siding and trim work",
      "Window and door replacement",
      "Kitchen modernization",
      "Bathroom updates",
      "Energy efficiency improvements",
    ],
    testimonials: [
      {
        text: "Our 1890s Fairport home needed extensive updates. Alex's team preserved all the historic details while making it completely modern and efficient.",
        author: "Patricia W.",
        neighborhood: "Fairport Village",
        project: "Historic Home Renovation",
        rating: 5,
      },
      {
        text: "The new windows and siding transformed our home's appearance and cut our energy bills significantly. Excellent craftsmanship throughout.",
        author: "Thomas H.",
        neighborhood: "Perinton Hills",
        project: "Exterior Renovation",
        rating: 5,
      },
    ],
    nearbyAreas: ["Pittsford", "Penfield", "Perinton", "East Rochester"],
    services: [
      {
        title: "Historic Home Renovations Fairport NY",
        description:
          "Preserve the character of your historic Fairport home while adding modern amenities. We specialize in maintaining architectural integrity while improving functionality.",
        features: [
          "Period-appropriate materials",
          "Historic detail preservation",
          "Modern system integration",
          "Energy efficiency upgrades",
        ],
        startingPrice: "$22,000",
      },
      {
        title: "Exterior Renovations Fairport NY",
        description:
          "Enhance your Fairport home's curb appeal and weather protection. Siding, windows, doors, and roofing services that complement the village's historic character.",
        features: ["Fiber cement siding", "Energy-efficient windows", "Historic-style doors", "Architectural trim"],
        startingPrice: "$16,000",
      },
      {
        title: "Kitchen Modernization Fairport NY",
        description:
          "Update your Fairport kitchen while respecting your home's historic character. Modern appliances and functionality with period-appropriate styling.",
        features: ["Period-style cabinetry", "Modern appliances", "Farmhouse sinks", "Traditional hardware"],
        startingPrice: "$14,000",
      },
    ],
  },
  "greece-ny": {
    city: "Greece",
    state: "NY",
    population: "96,000",
    zipCodes: ["14612", "14615", "14616", "14626"],
    description:
      "Comprehensive home renovation services in Greece, NY. Kitchen remodels, bathroom renovations, flooring, and home improvements throughout Greece's diverse neighborhoods.",
    longDescription:
      "Greece, New York is Rochester's largest suburb, offering diverse neighborhoods from lakefront properties to established residential areas. Our renovation team serves all of Greece with quality craftsmanship and competitive pricing for every budget and style.",
    neighborhoods: ["Greece Ridge", "Latta Road", "Dewey Avenue", "Long Pond", "Charlotte Beach", "Ridgeway"],
    landmarks: ["Charlotte Beach", "Greece Ridge Mall", "Braddock Bay", "Hamlin Beach State Park"],
    completedProjects: 78,
    averageProjectValue: "$22,000",
    specialties: [
      "Bathroom renovations",
      "Kitchen updates",
      "Flooring installation",
      "Electrical upgrades",
      "Basement waterproofing",
      "Deck and patio construction",
    ],
    testimonials: [
      {
        text: "Our Greece bathroom renovation was completed quickly and professionally. The new walk-in shower is perfect for our needs.",
        author: "Mary S.",
        neighborhood: "Greece Ridge",
        project: "Bathroom Renovation",
        rating: 5,
      },
      {
        text: "Alex's team installed beautiful luxury vinyl throughout our Greece home. Great value and the results look amazing.",
        author: "James P.",
        neighborhood: "Long Pond",
        project: "Flooring Installation",
        rating: 5,
      },
    ],
    nearbyAreas: ["Rochester", "Gates", "Parma", "Hilton"],
    services: [
      {
        title: "Bathroom Renovations Greece NY",
        description:
          "Transform your Greece bathroom with modern fixtures, efficient layouts, and quality materials. From simple updates to complete remodels.",
        features: ["Walk-in showers", "Vanity upgrades", "Tile work", "Accessibility features"],
        startingPrice: "$7,500",
      },
      {
        title: "Kitchen Updates Greece NY",
        description:
          "Modernize your Greece kitchen with new cabinets, countertops, and appliances. Affordable solutions that make a big impact.",
        features: ["Cabinet refacing", "Laminate countertops", "Appliance installation", "Backsplash tile"],
        startingPrice: "$10,000",
      },
      {
        title: "Flooring Installation Greece NY",
        description:
          "Beautiful, durable flooring for Greece homes. Luxury vinyl, laminate, tile, and carpet installation with professional results.",
        features: ["Luxury vinyl plank", "Laminate flooring", "Ceramic tile", "Carpet and padding"],
        startingPrice: "$3,500",
      },
    ],
  },
  "henrietta-ny": {
    city: "Henrietta",
    state: "NY",
    population: "46,000",
    zipCodes: ["14467", "14623"],
    description:
      "Professional home renovation services in Henrietta, NY. Kitchen remodels, bathroom renovations, basement finishing, and modern home improvements for Henrietta residents.",
    longDescription:
      "Henrietta, New York is a growing community with diverse housing options, from established neighborhoods to newer developments. Our renovation team specializes in modernizing Henrietta homes with contemporary designs and energy-efficient solutions.",
    neighborhoods: [
      "Henrietta Center",
      "Jefferson Road",
      "Calkins Road",
      "East Henrietta",
      "RIT Area",
      "Lehigh Station",
    ],
    landmarks: ["RIT Campus", "Tinker Nature Park", "Henrietta Town Hall", "Marketplace Mall"],
    completedProjects: 41,
    averageProjectValue: "$24,000",
    specialties: [
      "Basement conversions",
      "Modern kitchen designs",
      "Student housing updates",
      "Energy-efficient renovations",
      "Home office spaces",
      "Multi-generational living spaces",
    ],
    testimonials: [
      {
        text: "Our Henrietta basement conversion created the perfect space for our college-age kids. Professional work and great communication throughout.",
        author: "Karen D.",
        neighborhood: "RIT Area",
        project: "Basement Conversion",
        rating: 5,
      },
      {
        text: "The kitchen renovation modernized our entire Henrietta home. Love the new island and all the storage space.",
        author: "Steven L.",
        neighborhood: "Jefferson Road",
        project: "Kitchen Renovation",
        rating: 5,
      },
    ],
    nearbyAreas: ["Brighton", "Rush", "West Henrietta", "Rochester"],
    services: [
      {
        title: "Basement Conversions Henrietta NY",
        description:
          "Transform your Henrietta basement into functional living space. Perfect for growing families, home offices, or rental income opportunities.",
        features: ["Moisture control", "Egress windows", "Full bathrooms", "Kitchenette options"],
        startingPrice: "$18,000",
      },
      {
        title: "Modern Kitchen Designs Henrietta NY",
        description:
          "Contemporary kitchen renovations for Henrietta homes. Clean lines, efficient layouts, and modern appliances for today's lifestyle.",
        features: ["Quartz countertops", "Soft-close cabinets", "LED lighting", "Stainless appliances"],
        startingPrice: "$16,000",
      },
      {
        title: "Home Office Renovations Henrietta NY",
        description:
          "Create productive home office spaces in your Henrietta home. Perfect for remote work, studying, or running a business from home.",
        features: ["Built-in desks", "Electrical upgrades", "Sound insulation", "Custom storage"],
        startingPrice: "$8,000",
      },
    ],
  },
  "irondequoit-ny": {
    city: "Irondequoit",
    state: "NY",
    population: "51,000",
    zipCodes: ["14617", "14622"],
    description:
      "Quality home renovation services in Irondequoit, NY. Specializing in lakefront renovations, weatherproofing, deck construction, and home improvements for Irondequoit's established community.",
    longDescription:
      "Irondequoit, New York offers beautiful lakefront living and established neighborhoods close to Rochester. Our renovation team specializes in weatherproofing, deck construction, and renovations that take advantage of the area's natural beauty and lake access.",
    neighborhoods: ["Seabreeze", "Newport", "Irondequoit Bay", "Titus Avenue", "Ridge Road", "Culver Road"],
    landmarks: ["Seabreeze Amusement Park", "Irondequoit Bay", "Durand Eastman Park", "Lake Ontario"],
    completedProjects: 47,
    averageProjectValue: "$27,000",
    specialties: [
      "Lakefront renovations",
      "Deck and patio construction",
      "Weatherproofing and siding",
      "Bathroom renovations",
      "Kitchen updates",
      "Basement waterproofing",
    ],
    testimonials: [
      {
        text: "Our new deck overlooks the lake and has become our favorite space. Alex's team built it to withstand lake weather and it's absolutely beautiful.",
        author: "Nancy R.",
        neighborhood: "Seabreeze",
        project: "Lakefront Deck",
        rating: 5,
      },
      {
        text: "The weatherproofing and new siding protected our Irondequoit home from harsh lake weather. Professional installation and great materials.",
        author: "Paul M.",
        neighborhood: "Irondequoit Bay",
        project: "Exterior Renovation",
        rating: 5,
      },
    ],
    nearbyAreas: ["Rochester", "Webster", "Penfield", "Brighton"],
    services: [
      {
        title: "Lakefront Renovations Irondequoit NY",
        description:
          "Specialized renovations for Irondequoit's lakefront properties. Weather-resistant materials and designs that take advantage of lake views and access.",
        features: [
          "Weather-resistant materials",
          "Lake view optimization",
          "Moisture protection",
          "Outdoor living spaces",
        ],
        startingPrice: "$20,000",
      },
      {
        title: "Deck Construction Irondequoit NY",
        description:
          "Custom deck construction for Irondequoit homes. Built to withstand lake weather while providing beautiful outdoor living spaces.",
        features: ["Composite decking", "Weather-resistant railings", "Built-in seating", "Lighting systems"],
        startingPrice: "$12,000",
      },
      {
        title: "Weatherproofing Services Irondequoit NY",
        description:
          "Protect your Irondequoit home from harsh lake weather. Siding, windows, and roofing services designed for lakefront conditions.",
        features: ["Fiber cement siding", "Storm-resistant windows", "Weatherproof doors", "Gutter systems"],
        startingPrice: "$15,000",
      },
    ],
  },
  "rochester-ny": {
    city: "Rochester",
    state: "NY",
    population: "206,000",
    zipCodes: ["14604", "14605", "14606", "14607", "14608", "14609", "14611", "14613", "14614", "14619", "14621"],
    description:
      "Premier home renovation services in Rochester, NY. Serving the Flower City with comprehensive kitchen remodels, bathroom renovations, historic home restorations, and complete home improvements.",
    longDescription:
      "Rochester, New York is a vibrant city known as the Flower City, with diverse neighborhoods ranging from historic districts to modern developments. Our renovation team has deep roots in Rochester, serving homeowners throughout the city with quality craftsmanship that respects the area's rich architectural heritage while meeting modern living needs.",
    neighborhoods: [
      "Park Avenue",
      "East End",
      "South Wedge",
      "Neighborhood of the Arts",
      "19th Ward",
      "Corn Hill",
      "Upper Monroe",
      "Swillburg",
    ],
    landmarks: [
      "High Falls",
      "Strong Museum",
      "Eastman Theatre",
      "Highland Park",
      "Mount Hope Cemetery",
      "Rochester Public Market",
    ],
    completedProjects: 156,
    averageProjectValue: "$32,000",
    specialties: [
      "Historic home renovations and restorations",
      "Urban loft and condo conversions",
      "Multi-family property improvements",
      "Kitchen modernization for city living",
      "Bathroom renovations with period details",
      "Energy efficiency upgrades for older homes",
    ],
    testimonials: [
      {
        text: "Our Park Avenue home renovation perfectly balanced historic character with modern functionality. Alex's team understood the unique challenges of city renovation.",
        author: "Amanda K.",
        neighborhood: "Park Avenue",
        project: "Historic Home Renovation",
        rating: 5,
      },
      {
        text: "The loft conversion in the East End exceeded our expectations. Professional work that transformed our space into a modern urban retreat.",
        author: "Marcus T.",
        neighborhood: "East End",
        project: "Loft Conversion",
        rating: 5,
      },
    ],
    nearbyAreas: ["Brighton", "Irondequoit", "Greece", "Gates"],
    services: [
      {
        title: "Historic Home Renovations Rochester NY",
        description:
          "Preserve Rochester's architectural heritage while adding modern amenities. We specialize in maintaining historic character while improving functionality and efficiency.",
        features: [
          "Period-appropriate materials",
          "Historic detail preservation",
          "Modern system integration",
          "City permit assistance",
        ],
        startingPrice: "$25,000",
      },
      {
        title: "Urban Kitchen Renovations Rochester NY",
        description:
          "Maximize space and functionality in Rochester's urban kitchens. Smart designs that work with city living constraints while creating beautiful, efficient spaces.",
        features: ["Space optimization", "Modern appliances", "Smart storage solutions", "Urban-appropriate materials"],
        startingPrice: "$18,000",
      },
      {
        title: "Multi-Family Property Improvements Rochester NY",
        description:
          "Enhance Rochester rental properties and multi-family homes. Durable, attractive renovations that increase property value and tenant satisfaction.",
        features: [
          "Durable materials",
          "Cost-effective solutions",
          "Tenant-friendly scheduling",
          "Property value enhancement",
        ],
        startingPrice: "$12,000",
      },
    ],
  },
  "victor-ny": {
    city: "Victor",
    state: "NY",
    population: "14,000",
    zipCodes: ["14564"],
    description:
      "Quality home renovation services in Victor, NY. Specializing in new home customization, modern kitchen designs, and luxury home improvements for Victor's growing community.",
    longDescription:
      "Victor, New York is a thriving community known for excellent schools, new developments, and family-friendly neighborhoods. Our renovation team specializes in customizing newer homes and creating luxury improvements that match Victor's high standards for quality living.",
    neighborhoods: ["Victor Village", "Willowbrook", "Cobblestone Creek", "Valentown", "Fishers", "Boughton Hill"],
    landmarks: [
      "Ganondagan State Historic Site",
      "Victor Municipal Park",
      "Eastview Mall",
      "Finger Lakes Community College",
    ],
    completedProjects: 32,
    averageProjectValue: "$31,000",
    specialties: [
      "New home customization and upgrades",
      "Modern kitchen designs with luxury finishes",
      "Master suite additions and renovations",
      "Basement finishing for family spaces",
      "Outdoor living space construction",
      "Smart home technology integration",
    ],
    testimonials: [
      {
        text: "Our Victor kitchen renovation created the perfect space for entertaining. The modern design and luxury finishes exceeded our expectations.",
        author: "Rachel M.",
        neighborhood: "Willowbrook",
        project: "Luxury Kitchen Renovation",
        rating: 5,
      },
      {
        text: "The master suite addition gave us the space we needed without moving. Professional work and attention to detail throughout.",
        author: "Brian S.",
        neighborhood: "Cobblestone Creek",
        project: "Master Suite Addition",
        rating: 5,
      },
    ],
    nearbyAreas: ["Farmington", "Canandaigua", "Pittsford", "Fairport"],
    services: [
      {
        title: "New Home Customization Victor NY",
        description:
          "Personalize your new Victor home with custom upgrades and modifications. From builder-grade to luxury finishes that reflect your style and needs.",
        features: ["Luxury finish upgrades", "Custom cabinetry", "Premium flooring", "Designer lighting"],
        startingPrice: "$20,000",
      },
      {
        title: "Modern Kitchen Designs Victor NY",
        description:
          "Contemporary kitchen renovations featuring the latest trends and technology. Perfect for Victor's modern lifestyle and entertaining needs.",
        features: ["Quartz countertops", "Smart appliances", "Custom islands", "LED lighting systems"],
        startingPrice: "$22,000",
      },
      {
        title: "Master Suite Additions Victor NY",
        description:
          "Expand your Victor home with luxury master suite additions. Create private retreats with walk-in closets, spa bathrooms, and sitting areas.",
        features: ["Walk-in closets", "Spa bathrooms", "Sitting areas", "Private balconies"],
        startingPrice: "$35,000",
      },
    ],
  },
  "hilton-ny": {
    city: "Hilton",
    state: "NY",
    population: "5,900",
    zipCodes: ["14468"],
    description:
      "Trusted home renovation services in Hilton, NY. Specializing in cottage renovations, lakefront improvements, and historic preservation for Hilton's charming village community.",
    longDescription:
      "Hilton, New York is a charming village community with small-town character and convenient lake access. Our renovation team specializes in preserving Hilton's historic charm while adding modern conveniences, with particular expertise in cottage-style homes and lakefront properties.",
    neighborhoods: ["Hilton Village", "Lake Avenue", "Hilton-Parma", "North Greece", "Hamlin Beach Area"],
    landmarks: ["Hilton Village Historic District", "Hamlin Beach State Park", "Hilton Apple Fest", "Northampton Park"],
    completedProjects: 28,
    averageProjectValue: "$26,000",
    specialties: [
      "Cottage-style home renovations",
      "Lakefront property improvements",
      "Historic village home preservation",
      "Seasonal home winterization",
      "Small-space optimization",
      "Weather-resistant exterior improvements",
    ],
    testimonials: [
      {
        text: "Our cottage renovation maintained all the charm while adding modern comfort. Perfect understanding of Hilton's village character.",
        author: "Dorothy L.",
        neighborhood: "Hilton Village",
        project: "Cottage Renovation",
        rating: 5,
      },
      {
        text: "The lakefront improvements made our seasonal home perfect for year-round use. Excellent weatherproofing and attention to detail.",
        author: "Frank R.",
        neighborhood: "Hamlin Beach Area",
        project: "Lakefront Renovation",
        rating: 5,
      },
    ],
    nearbyAreas: ["Brockport", "Spencerport", "Greece", "Hamlin"],
    services: [
      {
        title: "Cottage Renovations Hilton NY",
        description:
          "Preserve the charm of Hilton's cottage-style homes while adding modern amenities. Specialized in maintaining village character with contemporary comfort.",
        features: [
          "Period-appropriate materials",
          "Cozy interior designs",
          "Efficient heating systems",
          "Charming exterior details",
        ],
        startingPrice: "$16,000",
      },
      {
        title: "Lakefront Improvements Hilton NY",
        description:
          "Enhance your Hilton lakefront property with weather-resistant improvements and outdoor living spaces. Built to withstand lake conditions.",
        features: [
          "Weather-resistant materials",
          "Deck construction",
          "Winterization services",
          "Lake view optimization",
        ],
        startingPrice: "$18,000",
      },
      {
        title: "Historic Preservation Hilton NY",
        description:
          "Maintain the historic character of Hilton village homes while improving functionality and efficiency. Respectful renovations that preserve community heritage.",
        features: [
          "Historic detail restoration",
          "Period-appropriate upgrades",
          "Energy efficiency improvements",
          "Village permit assistance",
        ],
        startingPrice: "$20,000",
      },
    ],
  },
}

interface CityPageProps {
  params: {
    city: string
  }
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = cityData[params.city as keyof typeof cityData]

  if (!city) {
    return {
      title: "City Not Found - Alex Renovation",
    }
  }

  return {
    title: `${city.city} ${city.state} Renovation Services - Alex Renovation`,
    description: city.description,
  }
}

export default function CityPage({ params }: CityPageProps) {
  const city = cityData[params.city as keyof typeof cityData]

  if (!city) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <Button variant="outline" size="sm" asChild>
                <Link href="/locations">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  All Locations
                </Link>
              </Button>
              <Badge variant="secondary">Service Area</Badge>
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-balance">
                {city.city}, {city.state} Renovation Services
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>Population: {city.population}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Home className="h-4 w-4 text-primary" />
                  <span>{city.completedProjects} Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star className="h-4 w-4 text-primary" />
                  <span>5-Star Rated</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>Free Estimates</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">{city.longDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                Professional Renovation Services in {city.city}, {city.state}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Trusted by {city.city} homeowners for quality craftsmanship and exceptional service.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {city.services.map((service, index) => (
                <Card key={index} className="border-0 bg-card/50 hover:shadow-lg transition-all">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="text-xs">
                        Starting at {service.startingPrice}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 bg-transparent">
                      Get Free Estimate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Images Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Recent Projects in {city.city}</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                See our quality work in your neighborhood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 bg-card/50 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img
                    src={`/abstract-geometric-shapes.png?key=vawq3&height=300&width=400&query=${city.city} kitchen renovation modern cabinets`}
                    alt={`Kitchen renovation in ${city.city}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Modern Kitchen Renovation</h3>
                  <p className="text-sm text-muted-foreground">
                    {city.neighborhoods[0]}, {city.city}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img
                    src={`/abstract-geometric-shapes.png?key=9u68w&height=300&width=400&query=${city.city} bathroom remodel luxury shower`}
                    alt={`Bathroom remodel in ${city.city}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Luxury Bathroom Remodel</h3>
                  <p className="text-sm text-muted-foreground">
                    {city.neighborhoods[1] || city.neighborhoods[0]}, {city.city}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50 overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <img
                    src={`/abstract-geometric-shapes.png?key=v77hu&height=300&width=400&query=${city.city} home exterior renovation siding`}
                    alt={`Home exterior renovation in ${city.city}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">Complete Home Exterior</h3>
                  <p className="text-sm text-muted-foreground">
                    {city.neighborhoods[2] || city.neighborhoods[0]}, {city.city}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                {city.city} Neighborhoods We Serve
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Professional renovation services throughout all {city.city} neighborhoods and surrounding areas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <Card className="border-0 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center">
                    <MapPin className="h-6 w-6 text-primary mr-3" />
                    Primary Neighborhoods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {city.neighborhoods.map((neighborhood, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                        <span className="text-sm">{neighborhood}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/50">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif flex items-center">
                    <Home className="h-6 w-6 text-primary mr-3" />
                    Local Landmarks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {city.landmarks.map((landmark, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                        <span className="text-sm">{landmark}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                What {city.city} Homeowners Say
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Real reviews from satisfied customers in your neighborhood.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {city.testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 bg-card/50">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {testimonial.project}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <blockquote className="text-base italic">"{testimonial.text}"</blockquote>
                    <div className="space-y-1">
                      <div className="font-medium text-sm">- {testimonial.author}</div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.neighborhood}, {city.city}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Common questions from {city.city} homeowners about our renovation services.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {cityFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
                Get Your Free {city.city} Renovation Estimate
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Ready to start your renovation project? Contact us for a personalized estimate.
              </p>
            </div>

            <Card className="border-0 bg-card/50">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Full Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Phone Number</label>
                      <Input placeholder="(585) 555-0123" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="kitchen">Kitchen Renovation</SelectItem>
                        <SelectItem value="bathroom">Bathroom Remodel</SelectItem>
                        <SelectItem value="flooring">Flooring Installation</SelectItem>
                        <SelectItem value="whole-home">Whole Home Renovation</SelectItem>
                        <SelectItem value="addition">Home Addition</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Project Details</label>
                    <Textarea placeholder={`Tell us about your ${city.city} renovation project...`} rows={4} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Preferred Contact Method</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How would you like us to contact you?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="phone">Phone Call</SelectItem>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="text">Text Message</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button size="lg" className="w-full">
                    <Mail className="h-4 w-4 mr-2" />
                    Get My Free Estimate
                  </Button>

                  <div className="text-center text-sm text-muted-foreground">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Response within 24 hours</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-4 w-4" />
                        <span>No obligation</span>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance mb-8">We Also Serve Nearby Areas</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {city.nearbyAreas.map((area, index) => (
                <Badge key={index} variant="outline" className="text-sm px-4 py-2">
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-balance">
              Ready to Transform Your {city.city} Home?
            </h2>
            <p className="text-xl opacity-90 text-pretty leading-relaxed">
              Contact us today for a free estimate on your renovation project. Serving {city.city} homeowners with
              quality craftsmanship and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild className="text-lg px-8 py-6">
                <Link href="/contact">Get Free Estimate</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary bg-transparent"
              >
                <Link href="tel:+15854725795">(585) 472-5795</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
