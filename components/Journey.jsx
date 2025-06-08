const journey = [
  {
    year: "2025 - Present",
    role: "Chief Technology Officer",
    institute: "El Kratos Embassy"
  },
  {
    year: "2025 - Present",
    role: "Web Developer",
    institute: "Noor's Path"
  },
  {
    year: "2023 - Present",
    role: "Student",
    institute: "University of Ilorin"
  },
  {
    year: "2021 - 2022",
    role: "Student",
    institute: "University of Ilorin"
  }
]


const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8">
        Education & <span className="text-accent">Experience</span>
      </h2>
      {
        journey.map((item, index) => {
          const { institute, role, year } = item;
          return (
            <div key={index} className="flex items-center gap-12 w-full">
              {/* bullets */}
              <div className="flex flex-col w-max justify-center items-center">
                <div className="w-3 h-3 bg-accent rounded-full">
                </div>
                <div className="w-[1px] h-[160px] bg-white/10">
                </div>
              </div>
              {/* text */}
              <div className="max-w-[500px]">
                <p className="mb-6 text-lg text-white/50">{year}</p>
                <h4 className="h4 mb-2">{role}</h4>
                <h4 className="text-lg text-white/50">{institute}</h4>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default Journey