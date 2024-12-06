import { useState } from "react";

const TaskCard = ({
  title,
  description,
  date,
  participants,
  initialValidation = false, // Nouveau prop pour l'état initial de validation
}: {
  title: string;
  description: string;
  date: string;
  participants: string[];
  initialValidation?: boolean; // Optionnel, pour définir l'état initial de validation
}) => {
  // Définir l'état pour savoir si la tâche est validée ou non, en utilisant initialValidation comme valeur par défaut
  const [isValidated, setIsValidated] = useState(initialValidation);

  // Fonction pour basculer l'état de validation
  const toggleValidation = () => {
    setIsValidated(!isValidated);
  };

  return (
    <div className="bg-white animate__animated animate__fadeIn animate__delay-2s">
      <div
        className={`bg-white p-6 rounded-xl shadow-md w-[540px] transition-all duration-300 ease-in-out transform ${
          isValidated ? "scale-105 bg-green-50" : "scale-100"
        }`}
      >
        {/* Titre et checkbox de validation */}
        <div className="flex justify-between items-center">
          {/* Appliquer la classe line-through si la tâche est validée */}
          <h2 className={`text-2xl mb-2 ${isValidated ? "line-through" : ""}`}>
            {title}
          </h2>

          {/* Checkbox pour marquer la tâche comme validée ou non */}
          <label className="relative inline-flex items-center">
            <input
              type="checkbox"
              checked={isValidated}
              onChange={toggleValidation}
              className="w-8 h-8 border-2 border-gray-400 rounded-full appearance-none checked:bg-blue-500 focus:outline-none transition duration-200"
            />
            {/* Afficher un icône quand coché */}
            <span className="absolute inset-0 flex justify-center items-center">
              {isValidated && (
                <span className="text-white text-lg">✔</span> // Affiche un check
              )}
            </span>
          </label>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-xl mb-4">{description}</p>

        {/* Séparateur horizontal */}
        <hr className="mb-4" />

        {/* Date et avatars */}
        <div className="flex justify-between items-center">
          {/* Date */}
          <span className="text-gray-400 text-xl">{date}</span>

          {/* Avatars */}
          <div className="flex -space-x-2">
            {participants.slice(0, 3).map((participant, index) => (
              <img
                key={index}
                src={participant}
                alt={`Participant ${index + 1}`}
                className="w-8 h-8 rounded-full border-2 border-white"
              />
            ))}

            {/* Si plus de 3 participants, afficher "4+" */}
            {participants.length > 3 && (
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex justify-center items-center">
                4+
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
