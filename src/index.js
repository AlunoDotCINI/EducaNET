import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import List from './Components/js.desing/ListOpitions/index'
import Landing from './Components/LandingPage/Lading';
import Home from './Components/js.desing/HomeDash/index';
import ErrorPage from './Components/Error/ErrorPage.js';
import ListStudents from './Components/js.desing/ListOpitionsStudent/index.js'

import AlunosClass from './Components/js.desing/AlunoDashVerAula'
import ActivityAluno from './Components/js.desing/AlunoVerAtividadeDash/index.js' 
import AssistirAula from './Components/js.desing/AlunoDashVerAula/index.js';
import VerCursos from './Components/js.desing/AlunoVerCursos/index.js'
import IrParaAtividade from './Components/js.desing/AlunoVerAtividadeDash/index.js'

import ProfessorActivity from './Components/js.desing/ProfessorDashPostarAtividade'
import ProfessorClass from './Components/js.desing/ProfessorDashPostarAula';
import ProfessorCourses from './Components/js.desing/ProfessorPostarCursos/index.js'

const router = createBrowserRouter([
  {
   element:<App/>,
   errorElement:<ErrorPage/>,
   children:[
    {
      path:"/",
      element: <Landing/>
    },
    {
      path:"/teacher",
       element:<List/>,
       children:[
        {
          path:"/teacher",
       element: <Home/>
        },
        {
          path:"/teacher/class",
       element: <ProfessorClass/>
        },
        {
          path:"/teacher/activity",
       element: <ProfessorActivity />
        },
        {
          path:"/teacher/courses",
       element: <ProfessorCourses  />
        }
       ]
    },
    {
      path:"/students",
      element:<ListStudents/>,
      children:[
        {
          path:"/students",
       element: <Home/>
        },
        {
          path:"/students/courses",
          element:<VerCursos/>
        },
        {
          path:"/students/class",
       element: <AlunosClass/>,
        },   
        {
            path:"/students/watch",
            element:<AssistirAula/>
        },
        {
          path:"/students/activity",
          element:<ActivityAluno/>
        },
        {
          path:"/students/goactivity",
          element:<IrParaAtividade/>
        }
      ]
   
    }
   ]
  }
])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
