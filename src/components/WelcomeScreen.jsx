

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-primary">Secret Santa</h1>
      <p className="text-lg">
      Parce qu’on sent déjà l’enthousiasme débordant de vos fêtes, un Secret Santa pourrait presque égayer tout ça.
      </p>
      <button onClick={onStart} className="button text-lg px-8 py-3 ">
        Commencer
      </button>
    </div>
  );
}
