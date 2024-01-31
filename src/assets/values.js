const depts = [
  "CSE",
  "IT",
  "MCA",
  "ECE",
  "EEE",
  "ECM",
  "Instrumentation",
  "Telecommunication",
  "Mechanical",
  "Energy",
  "Industrial",
  "Automobile",
  "Design",
  "Aeronautical",
  "Applied Mechanics",
  "Aerospace",
  "Civil",
  "Chemical",
  "Ocean",
  "Metallurgy",
  "Marine",
  "Mining",
  "Material",
  "Physics",
  "BBA",
  "MBA",
  "Arts",
  "Commerce",
  "Law",
  "Media",
  "Food Processing",
  "Textile",
  "Polytechnic Students Only",
  "School Students Only",
  "Medical",
  "BioMedical",
  "Pharmacy",
  "BioTechnology",
  "Agricultural",
];
const tags = [
  "music",
  "comedy",
  "stock markets",
  "coding",
  "finance",
  "sports",
];
const event_types = ["offline", "online", "hybrid"];
const accomodations = [
  { label: "Yes, Free", value: "free", id: "free_accomod" },
  { label: "Yes, Paid", value: "paid", id: "paid_accomod" },
  { label: "No", value: "no", id: "no_accomod" },
];
const fees_plans = [
  { label: "Paid", value: "paid", id: "paid_plan" },
  { label: "Free", value: "free", id: "free_plan" },
  { label: "Multiple Plans", value: "multiple", id: "multiple_plan" },
];
const certificates = [
  { label: "Yes, for all", value: "yes", id: "yes_certificate" },
  { label: "Only for Winners", value: "winners", id: "win_certificate" },
  { label: "No", value: "no", id: "no_certificate" },
];
const interests = [
  "music",
  "comedy",
  "stock markets",
  "coding",
  "finance",
  "sports",
];
const genders = ["Male", "Female", "Prefer not to say"];

export {
  depts,
  tags,
  interests,
  event_types,
  accomodations,
  fees_plans,
  certificates,
  genders,
};
