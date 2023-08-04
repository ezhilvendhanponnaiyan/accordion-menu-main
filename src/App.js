import data from './data';
import Question from './components/Question';
import { useState } from 'react';

const App = () => {
  const [questions, setQuestion] = useState(data);
  return (
    <main>
      <div>
        <div className='container'>
          <h3>Frequently asked Interview questions</h3>
          <section className='info'>
            {questions.map((question) => {
              return <Question key={question.id} {...question} />;
            })}
          </section>
        </div>
        <div className='footer'>
          <h3 className='footer-container'>
            Designed by <span>Ezhilvendhan</span>
          </h3>
        </div>
      </div>
    </main>
  );
};

export default App;
