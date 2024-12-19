// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <div>
    <img
        src="./guirlande.png"
        alt="guirlande"
        className="absolute top-0 left-0 -ml-8 w-60 -mt-10 "
      />
    <ul className="space-y-2 mx-auto text-center text-white font-Poppins">
      {assignments.map((assignment, index) => (
        <li key={index}>
          <span>{assignment.giver}</span> offre un beau cadeau à{" "}
          <span>{assignment.receiver}</span>
        </li>
      ))}
    </ul>
    </div>
  );
}
