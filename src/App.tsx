import goalImage from "./assets/goals.jpg";
import CourseGoalList from "./components/CourseGoalList";
import Header from "./components/Header";
import { useState } from "react";
import { CourseGoal } from "./interface";

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

  //take previous goals state and filter each element using id that does not same with id from arguement
  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <div>
      <main>
        <Header image={{ src: goalImage, alt: "List of goals" }}>
          <h1>List of goal</h1>
        </Header>
        <button onClick={handleAddGoal}>Add Goal</button>
        <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
      </main>
    </div>
  );
}
