import React from 'react';
import './App.css';
import Header from './component/Header/Header';
import CourseArea from './component/CourseArea/CourseArea';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import CourseKey from './component/courseKey/CourseKey';
import OrderReview from './component/OrderReview/OrderReview';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path="/CourseArea">
            <CourseArea></CourseArea>
          </Route>
          <Route path="/Contact">
            <Contact></Contact>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/course/:courseId">
            <CourseKey></CourseKey>
          </Route>
          <Route exact path="/">
            <CourseArea></CourseArea>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
