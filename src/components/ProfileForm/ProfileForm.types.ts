import { FormEvent } from 'react';
import { Event } from '../Profile/Profile.types';

interface FormData {
  name: string;
  birthday: string;
  progrLang: string;
  description: string;
  yearsOfExperience: number;
  isExpert: boolean;
}

interface ProfileFormProps {
  formData: FormData;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  handleChange: (target: Event) => void;
}

export default ProfileFormProps;