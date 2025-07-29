export type Plants = {
  name: string;
  diagnosis: string;
  status: "Pending" | "Analysing" | "Success" | "Failed";
  score: number;
  accuracy: "High" | "Medium" | "Low";
};
