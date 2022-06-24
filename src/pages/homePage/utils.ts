export interface IWorkExperience {
  year: string;
  position: string;
  company: string;
  note?: string;
}

export interface IFeedback {
  messages: string[];
  name: string;
  position: string;
}
