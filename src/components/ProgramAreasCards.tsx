import { ProgramCards } from "../constants"
import ProgramCard from "./ProgramCard"

const ProgramAreasCards = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-4 place-items-center">
        {ProgramCards.map((program) => (
          <ProgramCard
            key={program.id}
            title={program.title}
            image={program.image}
            link_url={program.link_url}
          />
        ))}
      </div>
  )
}

export default ProgramAreasCards