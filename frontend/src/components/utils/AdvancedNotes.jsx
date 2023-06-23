import { useState } from 'react';
import './AdvancedNotes.css';
import Dropdown from './Dropdown';
import { EyeIcon } from '../../assets/svgIcons';
import { NoseIcon } from '../../assets/svgIcons';

const AdvancedNotes = ({ formData, handleDropdownChange }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  let categoryIcon;

  // if(category === 'appearance') {
  //   categoryIcon = <EyeIcon />
  // }

  return (
    <>
      {Object.entries(formData).map(([category, options]) => (
        <section key={category} className="advanced-section">
          <div className="category-section">
            <h3>{category}</h3>
            {(category === 'appearance' && <EyeIcon />) ||
              (category === 'nose' && <NoseIcon />)}
            <span></span>
          </div>
          <div className="advanced-container">
            {options.map(({ title, options }) => (
              <div key={title}>
                <h4>{title.replaceAll('$', ' ')}</h4>
                <Dropdown
                  options={options}
                  title={title}
                  activeDropdown={activeDropdown}
                  setActiveDropdown={setActiveDropdown}
                  handleDropdownChange={handleDropdownChange}
                />
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};

export default AdvancedNotes;
