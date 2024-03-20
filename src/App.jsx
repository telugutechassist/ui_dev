import React from 'react';
import ClassComponent1 from './ClassComponent1';
import ClassComponentProps1 from './ClassComponentProps1';
import ClassComponentProps2 from './ClassComponentProps2';
import ClassComponentProps3 from './ClassComponentProps3';
import ClassComponentProps4 from './ClassComponentProps4';
import ClassComponentProps5 from './ClassComponentProps5';
import ClassComponentState1 from './ClassComponentState1';
import ClassComponentState2 from './ClassComponentState2';
import ClassComponentState3 from './ClassComponentState3';
import ClassComponentState4 from './ClassComponentState4';
import ClassComponentState5 from './ClassComponentState5';
import FunctionalComponentProps1 from './FunctionalComponentProps1';
import FunctionalComponentProps2 from './FunctionalComponentProps2';
import FunctionalComponentProps3 from './FunctionalComponentProps3';
import FunctionalComponentProps4 from './FunctionalComponentProps4';
import FunctionalComponentProps5 from './FunctionalComponentProps5';
import FunctionalComponentState1 from './FunctionalComponentState1';
import FunctionalComponentState2 from './FunctionalComponentState2';
import FunctionalComponentState3 from './FunctionalComponentState3';
import FunctionalComponentState4 from './FunctionalComponentState4';
import FunctionalComponentState5 from './FunctionalComponentState5';
const App = () => {
  return (
    <div>
      <center>
       <h1>ClassComponent1</h1>
      <ClassComponent1 />
      <h1>ClassComponentProps1</h1>
      <ClassComponentProps1 name="John" age={30} />
      <h1>ClassComponentProps2</h1>
     
      <ClassComponentProps2 text="Click me" onClick={() => alert('Button clicked!')} />
      <h1>ClassComponentProps3</h1>
    
      <ClassComponentProps3 title="Example Card" content="This is a sample card component." />
      <h1>ClassComponentProps4</h1>
    
      <ClassComponentProps4 items={['A', 'B', 'C']} />
      <h1>ClassComponentProps5</h1>
      
      <ClassComponentProps5 src="" alt="Description of the image" />
      <h1>ClassComponentState1</h1>
      <ClassComponentState1 />
      <h1>ClassComponentState2</h1>
      <ClassComponentState2 />
      <h1>ClassComponentState3</h1>
      <ClassComponentState3 />
      <h1>ClassComponentState4</h1>
      <ClassComponentState4 />
      <h1>ClassComponentState5</h1>
      <ClassComponentState5 />
      <h1>FunctionalComponentProps1</h1>
      <FunctionalComponentProps1 text="Click me" onClick={() => alert('Button clicked!')} />
      <h1>FunctionalComponentProps2</h1>
      <FunctionalComponentProps2 title="Example Card" content="This is a sample card component." />
      <h1>FunctionalComponentProps3</h1>
      <FunctionalComponentProps3 src="addimagepath" alt="Description of the image" />
      <h1>FunctionalComponentProps4</h1>
      <FunctionalComponentProps4 items={['A', 'B', 'C']} />
      <h1>FunctionalComponentProps5</h1>
      <FunctionalComponentProps5 items={[
  { id: 1, label: 'Home', link: '/' },
  { id: 2, label: 'About', link: '/about' },
  { id: 3, label: 'Contact', link: '/contact' }

]} />
<h1>FunctionalComponentState1</h1>
      <FunctionalComponentState1 />
      <h1>FunctionalComponentState2</h1>
      <FunctionalComponentState2 />
      <h1>FunctionalComponentState3</h1>
      <FunctionalComponentState3 />
      <h1>FunctionalComponentState4</h1>
      <FunctionalComponentState4 />
      <h1>FunctionalComponentState5</h1>
      <FunctionalComponentState5 />
      



      </center>

    </div>
  );
};

export default App;