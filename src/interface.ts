import { ReactNode } from "react";

export interface CourseGoalProps {
  title: string;
  children: ReactNode;
}

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export interface CourseGoalListProps {
  goals: CourseGoal[];
}

export interface Image {
  src: string;
  alt: string;
}

export interface HeaderProps {
  image: Image;
  children: ReactNode;
}
