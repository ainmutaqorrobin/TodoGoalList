import goalImage from "./assets/goals.jpg";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import { useState } from "react";

interface CourseGoal {
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
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              <CourseGoal title={goal.title}>
                <p>{goal.description}</p>
              </CourseGoal>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
