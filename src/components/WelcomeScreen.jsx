



export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6  min-h-screen flex flex-col justify-center items-center relative ">
  <img
    src="./guirlande.png"
    alt="guirlande"
    className="absolute top-0 left-0 -ml-8 w-60 -mt-10 font-Pacifico"
  />
  
  <div className="relative">
    <img
      src="./lutin1.png"
      alt="lutin"
      className=" mx-auto"
    />
  </div>
  
  <h1 className="text-5xl  text-white mt-4">Secret Santa</h1>
  
  <p className=" text-white px-6 font-Poppins text-sm">
    Parce qu’on sent déjà l’enthousiasme débordant de vos fêtes, un Secret Santa pourrait presque égayer tout ça.
  </p>
  
  <button
    onClick={onStart}
    className="bg-[#BD2931] text-white text-2xl  px-10 py-3 rounded-full mt-4 "
  >
    Commencer
  </button>
</div>

  );
}
