// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="space-y-4">
      <img
        src="./guirlande.png"
        alt="guirlande"
        className="absolute top-0 left-0 -ml-8 w-60 -mt-10 "
      />

      <div className="flex space-x-2 mx-10 bg-[#D56067] border-[#BD2931] border-2 rounded-full text-white pl-5">
        <input
          type="text"
          className="input flex-grow"
          placeholder="Entrez un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
        />
        <button
          className="button bg-[#BD2931] text-white px-4 py-2 rounded-full text-3xl font-Poppins"
          onClick={addParticipant}
        >
          +
        </button>
      </div>
      

      <div className="">
      <ul className="space-y-5   text-black mx-16  ">
        <div className="h-96 bg-white -mt-4 overflow-hidden rounded-2xl ">
        {participants.map((name, index) => (
          <li key={index} className="flex bg-[#799F84] mx-3 rounded-xl items-center  mt-2">
            <div><img src="./tete.png" className="w-10 mt-"></img></div>
            <div> {name}</div>
           
            <div className=" ml-4 ">
              <button
                className="text-[#BD2931] "
                onClick={() => onRemoveParticipant(index)}
              >
                Supprimer
              </button>
            </div>
          </li>
          
        ))}
        </div>
      </ul>
      
      </div>
      
    </div>
  );
}
