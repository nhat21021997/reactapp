import React from 'react';
import {Container} from 'semantic-ui-react'
// import {Segment,Item, Icon, List, Button} from 'semantic-ui-react';
import NavBar from '../../nav/navBar/NavBar';
import EventDashBoard from '../../features/event/EventDashBoard/EventDashBoard';
function App() {
  return (
    
    <div className="App">
     <NavBar/>
      <Container>
        <EventDashBoard/>
      </Container>
    </div>
  );
}

export default App;
