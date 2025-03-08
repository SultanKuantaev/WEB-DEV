export interface Task {
    id: number;
    title: string;
    description: string;
    category: string; // e.g., "Work", "Personal", "Study"
    status: string;   // e.g., "Pending", "Completed"
    deadline: Date;
  }