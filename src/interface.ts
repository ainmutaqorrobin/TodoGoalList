import { ReactNode } from "react";

export interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDeleteGoal: (id: number) => void;
}

export interface CourseGoal {
  id: number;
  title: string;
  description: string;
}

export interface CourseGoalListProps {
  goals: CourseGoal[];
  onDeleteGoal: (id: number) => void;
}

export interface Image {
  src: string;
  alt: string;
}

export interface HeaderProps {
  image: Image;
  children: ReactNode;
}

export interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

export interface WarningBoxProps {
  mode: "warning";
  severity: "high" | "medium" | "low";
  children: ReactNode;
}
export interface HintBoxProps {
  mode: "hint";
  children: ReactNode;
}

export type InfoBoxProps = WarningBoxProps | HintBoxProps;
