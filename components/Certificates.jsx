// components/Certificates.jsx

const certificates = [
  {
    src: "/assets/certificate/freecodecamp.png",
    alt: "FreeCodeCamp Certificate",
    label: "FreeCodeCamp",
  },
  {
    src: "/assets/certificate/git.jpg",
    alt: "Git Certificate",
    label: "Git",
  },
  {
    src: "/assets/certificate/html.jpg",
    alt: "HTML Certificate",
    label: "HTML",
  },
];

export default function Certificates() {
return (
    <section className="w-full mt-10">
        <h2 className="h2 mb-8">My <span className="text-accent">Certificates</span></h2>
      <div className="flex flex-wrap gap-6">
        {certificates.map((cert) => (
          <div className="flex flex-col items-center" key={cert.alt}>
            <img src={cert.src} alt={cert.alt} className="w-40 h-28 object-contain rounded shadow" />
            <span className="mt-2 text-sm">{cert.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
