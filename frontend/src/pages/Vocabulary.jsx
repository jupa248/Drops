import {
  vocabularyClusters1,
  vocabularyClusters2,
  vocabularyClusters3,
} from '../assets/data/vocabularyData';
import './Vocabulary.css';

const Vocabulary = () => {
  return (
    <section className="vocabulary-section">
      <div className="vocabulary-header">
        <h1>DESCRIBING AROMA AND FLAVOUR</h1>
        <p>Think in terms of primary, secondary and tertiary</p>
      </div>

      <div className="vocabulary-subtitle bg-light-blue">
        <h2>Primary Aromas and Flavours</h2>
        <p>The aromas and flavours of the grape and alcoholic fermentation</p>
      </div>
      <div className="key-questions">
        <div>
          <h4>Key questions</h4>
        </div>
        <div>
          <h5>Are the flavours...</h5>
          <p>delicate or intense?</p>
          <p>simple or complex?</p>
          <p>generic or well-defined?</p>
          <p>fresh or cooked?</p>
          <p>under-ripe or ripe or over-ripe?</p>
        </div>
      </div>
      <div className="categories-container">
        <div className="clusters-header bg-light-blue">
          <h4>Clusters</h4>
          <h4>Descriptors</h4>
        </div>
        {vocabularyClusters1.map((cluster, index) => (
          <div
            className={
              (index & 1) === 0 ? 'cluster bg-white' : 'cluster bg-lighter-blue'
            }
            key={index}
          >
            <h5>{cluster.title}</h5>
            <div className="cluster-desc">
              {cluster.descriptors.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="vocabulary-subtitle bg-light-blue">
        <h2>Secondary Aromas and Flavourss</h2>
        <p>The aromas and flavours of post-fermentation winemaking</p>
      </div>
      <div className="key-questions">
        <div>
          <h4>Key questions</h4>
        </div>
        <div>
          <h5>Are the flavours....</h5>
          <p>from yeast, MLF, or oak?</p>
        </div>
      </div>
      <div className="categories-container">
        <div className="clusters-header bg-light-blue">
          <h4>Clusters</h4>
          <h4>Descriptors</h4>
        </div>
        {vocabularyClusters2.map((cluster, index) => (
          <div
            className={
              (index & 1) === 0 ? 'cluster bg-white' : 'cluster bg-lighter-blue'
            }
            key={index}
          >
            <h5>{cluster.title}</h5>
            <div className="cluster-desc">
              {cluster.descriptors.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="vocabulary-subtitle bg-light-blue">
        <h2>Tertiary Aromas and Flavourss</h2>
        <p>The aromas and flavours of maturation</p>
      </div>
      <div className="key-questions">
        <div>
          <h4>Key questions</h4>
        </div>
        <div>
          <h5>Do the flavours show....</h5>
          <p>deliberate oxidation?</p>
          <p>fruit development?</p>
          <p>bottle age?</p>
        </div>
      </div>
      <div className="categories-container">
        <div className="clusters-header bg-light-blue">
          <h4>Clusters</h4>
          <h4>Descriptors</h4>
        </div>
        {vocabularyClusters3.map((cluster, index) => (
          <div
            className={
              (index & 1) === 0 ? 'cluster bg-white' : 'cluster bg-lighter-blue'
            }
            key={index}
          >
            <h5>{cluster.title}</h5>
            <div className="cluster-desc">
              {cluster.descriptors.map((desc, index) => (
                <p key={index}>{desc}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Vocabulary;
