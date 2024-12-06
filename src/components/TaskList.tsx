import { FC } from "react";
import TaskCard from "./TaskCard";

// Définir l'interface pour typer les données des cartes
interface CardData {
  title: string;
  description: string;
  date: string;
  participants: string[]; // Les URLs des avatars des participants
}

// Données exemple
const data: CardData[] = [
  {
    title: "Team Meeting",
    description: "Discussing the upcoming project milestones and deadlines.",
    date: "Today O1:15PM - 03:00PM",
    participants: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
      "https://i.pravatar.cc/150?img=3",
    ],
  },
  {
    title: "Product Launch",
    description: "Launch of our new product with exciting features.",
    date: "Today O1:15PM - 03:00PM",
    participants: [
      "https://i.pravatar.cc/150?img=4",
      "https://i.pravatar.cc/150?img=5",
      "https://i.pravatar.cc/150?img=9",
      "https://i.pravatar.cc/150?img=10",
    ],
  },
  {
    title: "Design Sprint",
    description: "Brainstorming new design concepts for the app.",
    date: "Today O1:15PM - 03:00PM",
    participants: [
      "https://i.pravatar.cc/150?img=6",
      "https://i.pravatar.cc/150?img=7",
      "https://i.pravatar.cc/150?img=8",
    ],
  },
  {
    title: "Design test",
    description: "Brainstorming new design concepts for the app web.",
    date: "Today O1:15PM - 03:00PM",
    participants: [
      "https://i.pravatar.cc/150?img=6",
      "https://i.pravatar.cc/150?img=7",
      "https://i.pravatar.cc/150?img=2",
    ],
  },
];

// Card Component

// HeroSection Component
const TaskList = () => {
  return (
    <div className="grid grid-rows-1 justify-center space-y-12 bg-white">
      {/* Mapper les données pour afficher les cartes */}
      {data.map((item, index) => (
        <TaskCard
          key={index}
          title={item.title}
          description={item.description}
          date={item.date}
          participants={item.participants}
          // Activer les deux premières cartes par défaut
          initialValidation={index < 2} // Les deux premières cartes seront validées par défaut
        />
      ))}
    </div>
  );
};

export default TaskList;
