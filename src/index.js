import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import kandyKorner from './kandyKorner'

ReactDOM.render(
  <Router>
    <kandyKorner />
  </Router>,
  document.getElementById('root')
);