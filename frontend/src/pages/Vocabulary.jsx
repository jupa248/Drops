// import { vocabularyData } from '../assets/data/vocabularyData'
// import './Vocabulary.css'

// const Vocabulary = () => {

//     //vocabularyData.map(text => console.log(text))
//   return (
//     <section className="vocabulary-section">
//         <h2>DESCRIBING AROMA AND FLAVOUR</h2>
//         <p>Think in terms of primary, secondary and tertiary</p>
//             {vocabularyData.map((text,index) => (
//         <article key={index}>
//                 <h3>{text.title}</h3>
//                 <h5>{text.subTitle}</h5>
//                 <div>
//                     <h6>{text.categoryTitles}</h6>
//                 </div>
//         </article>
//             ))}
//     </section>
//   )
// }
// export default Vocabulary

import { vocabularyData } from '../assets/data/vocabularyData';
import './Vocabulary.css';

const Vocabulary = () => {
  return (
    <section className="vocabulary-section">
      <h2>DESCRIBING AROMA AND FLAVOUR</h2>
      <p>Think in terms of primary, secondary and tertiary</p>
      {vocabularyData.map((section, index) => (
        <article key={index}>
          <h3>{section.title}</h3>
          <h5>{section.subTitle}</h5>
          {section.categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h6>{category.title}</h6>
              {category.questions && category.questions.map((question, questionIndex) => (
                <p key={questionIndex}>{question}</p>
              ))}
              {category.descriptors && category.descriptors.map((descriptor, descriptorIndex) => (
                <p key={descriptorIndex}>{descriptor}</p>
              ))}
            </div>
          ))}
        </article>
      ))}
    </section>
  );
};

export default Vocabulary;
