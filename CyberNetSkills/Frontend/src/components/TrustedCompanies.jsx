
import {
  SiTcs,
  SiInfosys,
  SiWipro,
  SiAccenture,
} from "react-icons/si";

const companies = [
  {
    name: "TCS",
    logo: "/logos/tcs.png",
  },
  {
    name: "Infosys",
    logo: "/logos/infosys.png",
  },
  {
    name: "Wipro",
    logo: "/logos/wipro.png",
  },
  {
    name: "Accenture",
    logo: "/logos/accenture.png",
  },
  {
    name: "Capgemini",
    logo: "/logos/capgemini.png",
  },
  {
    name: "Cognizant",
    logo: "/logos/cognizant.png",
  },
  {
    name: "HCL",
    logo: "/logos/hcl.png",
  },
  {
    name: "Tech Mahindra",
    logo: "/logos/techmahindra.png",
  },
];

const TrustedCompanies = () => {
  return (
    <section className="py-20 bg-black overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">

          <span
            className="
            px-4
            py-2
            rounded-full
            bg-green-500/10
            border
            border-green-500/20
            text-green-400
            text-sm
          "
          >
            Hiring Partners
          </span>

          <h2 className="text-4xl font-bold text-white mt-5">
            Trusted By
            <span className="text-orange-500">
              {" "}Top Companies
            </span>
          </h2>

        </div>

      </div>

      {/* Marquee */}

      <div className="relative">

        <div className="flex marquee">

          {[...companies, ...companies].map(
            (company, index) => (
              <div
                key={index}
                className="
                flex
                items-center
                gap-4
                min-w-[250px]
                mx-4
                px-6
                py-5
                rounded-2xl
                bg-white/5
                border
                border-white/10
                backdrop-blur-xl
              "
              >

                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-12 w-auto object-contain"
                />

                <span className="text-white font-semibold">
                  {company.name}
                </span>

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
};

export default TrustedCompanies;