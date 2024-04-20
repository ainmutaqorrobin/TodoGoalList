import goalImage from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import { useState } from "react";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoals: CourseGoal = {
        id: Math.random(),
        title: "tajuk robin",
        description: "robin terlalu kacak",
      };
      return [...prevGoals, newGoals];
    });
  }
  return (
    <div>
      <main>
        <Header image={{ src: goalImage, alt: "List of goals" }}>
          <h1>List of goal</h1>
        </Header>
        <button onClick={handleAddGoal}>Add Goal</button>
        <CourseGoalList goals={goals} />
      </main>
    </div>
  );
}
