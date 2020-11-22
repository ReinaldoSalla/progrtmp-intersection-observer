import React, { FunctionComponent } from 'react';
import ProfileFormProps from './ProfileForm.types';
import './ProfileForm.css';

const ProfileForm: FunctionComponent<ProfileFormProps> = ({ 
  formData, 
  handleChange,
  handleSubmit
}): JSX.Element => {

  return (
    <div className='profile--form__main--wrapper'>
      <form className='profile--form__form' onSubmit={handleSubmit}>
        <h2 className='profile--form__title'>Write Your Profile</h2>
        <label className='profile--form__label' htmlFor='name'>Name</label>
        <div className='profile--form__input--wrapper'>
          <input className='profile--form__input' name='name' id='name' value={formData.name} onChange={handleChange} type='text' />
        </div>
        <label className='profile--form__label' htmlFor='birthday'>Birthday</label>
        <div className='profile--form__input--wrapper'>
          <input className='profile--form__input' name='birthday' id='birthday' type='date' value={formData.birthday} onChange={handleChange} />
        </div>
        <label className='profile--form__label' htmlFor='programming language'>Programming language</label>
        <div className='profile--form__input--wrapper'>
          <select className='profile--form__input' name='progrLang' id='programming language' value={formData.progrLang} onChange={handleChange}>
            <option>C</option>
            <option>C++</option>
            <option>Java</option>
            <option>Python</option>
            <option>JavaScript</option>
          </select>
        </div>
        <label className='profile--form__label' htmlFor='description'>Skills on {formData.progrLang}</label>
        <div className='profile--form__input--wrapper'>
          <textarea className='profile--form__input' name='description' id='description' value={formData.description} onChange={handleChange} />
        </div>
        <label className='profile--form__label' htmlFor='experience'>Years of experience</label>
        <div className='profile--form__input--wrapper'>
          <input className='profile--form__input' name='yearsOfExperience' id='experience' type='number' value={formData.yearsOfExperience} onChange={handleChange} />
        </div>
        <div className='profile--form__label--check--wrapper'>
          <label htmlFor='expert'>Is an expert?</label>
          <input name='isExpert' id='expert' type='checkbox' checked={formData.isExpert} onChange={handleChange} />
        </div>
        <div className='profile--form__button--wrapper'>
          <button className='button' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileForm;