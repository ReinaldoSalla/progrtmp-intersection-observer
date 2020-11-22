interface Event {
  target: {
    type: string;
    name: string;
    value?: number | string;
    checked?: boolean;
  };
  preventDefault: () => void;
}

interface FormData {
  name: string;
  birthday: string;
  progrLang: string;
  description: string;
  yearsOfExperience: number;
  isExpert: boolean;
}

export type { Event, FormData };