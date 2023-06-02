// types.ts

export interface EventDescription {
  introduction: string;
  // agenda: string[];
  agenda: { time: string; description: string }[];
}
