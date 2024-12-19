import { useState } from "react";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { ParticipantInput } from "./components/ParticipantInput";
import { AssignmentDisplay } from "./components/AssignmentDisplay";

export default function App() {
  // Tableau des participants
  const [participants, setParticipants] = useState([]);
  // Tableau des assignments
  const [assignments, setAssignments] = useState([]);
  // Etat de l'application welcome | input | assignments
  const [currentScreen, setCurrentScreen] = useState("welcome");

  // Fonction pour ajouter un participant
  const addParticipant = (name) => {
    setParticipants([...participants, name]);
  };

  // Fonction pour supprimer un participant
  const removeParticipant = (index) => {
    setParticipants(participants.filter((_, i) => i !== index));
  };

  // Fonction pour distribuer les cadeaux
  const distributeGifts = () => {
    // S'il n'y a pas assez de participants, on affiche une alerte
    if (participants.length < 2) {
      alert("Il faut au moins 2 participants pour faire un Secret Santa !");
      return;
    }

    // On mélange le tableau des participants
    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    // On crée un nouveau tableau d'assignments
    const newAssignments = shuffled.map((giver, index) => ({
      giver,
      receiver: shuffled[(index + 1) % shuffled.length],
    }));

    // On met à jour le state des assignments
    setAssignments(newAssignments);
    // On affiche l'écran des assignments
    setCurrentScreen("assignments");
  };

  // Fonction pour recommencer l'application
  const resetApp = () => {
    setParticipants([]);
    setAssignments([]);
    setCurrentScreen("welcome");
  };

  return (
    <div className="bg-[#799F84]  h-full " style={{fontFamily:"'Pacifico','Poppins'" } }   >
    <div className="container mx-auto p-4">
      <div>
        
        {currentScreen === "welcome" && (
          <WelcomeScreen onStart={() => setCurrentScreen("input")} />
        )}
        
        {currentScreen === "input" && (
          <>
            <h2 className="text-4xl lg:text-1xl mb-2 text-center mt-24 text-white">
            T’invite qui ?
            </h2>
            <p className="font-Poppins text-white text-xs text-center mb-5">Puisque t’aimes déjà personne, autant être rentable: mets celles qui ont de la thune, ça te consolera.</p>
           
            <ParticipantInput
              onAddParticipant={addParticipant}
              participants={participants}
              onRemoveParticipant={removeParticipant}
            />
             
            <div className="mt-6 text-white text-xl flex">
              <button className="button w-full" onClick={distributeGifts}>
                Distribuer les cadeaux
              </button>
              <img src="./lutin2.png" alt="lutin2" className="w-28 lg:" />
            </div>
            
          </>
        )}
        
        {currentScreen === "assignments" && (
          <>
            <h2 className="text-4xl mb-3 text-center text-white mt-20">
              Alors qui fait qui ?
            </h2>
            <p className="font-Poppins text-white text-xs text-center mb-5">Alors, on recommence ? Pas de panique, si tu triches, personne ne le saura. Enfin presque.</p>
            <AssignmentDisplay assignments={assignments} />
            <div className="mt-6">
              <button className="bg-[#BD2931] text-white text-xl  px-10 py-3 rounded-full mt-4 flex items-center mx-auto" onClick={resetApp}>
                Tu veux recommencer ? 
              </button>
            </div>
            <img src="./lutin1.png" className="w-60 mx-auto mt-8"></img>
          </>
        )}
      </div>
    </div>
    </div>
  );
}
