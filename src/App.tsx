import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import { RecoilRoot } from 'recoil';
import './App.css';

// pages
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import PreTest from './pages/preTest/PreTest';
import Interview from './pages/interview/interview/Intervew';
import GroupProfile from './pages/groupProfile/GroupProfile';
import Result from './components/groupProfile/result/Result';
import InterviewMailComplete from './pages/interviewmail/InterviewMailComplete';
import InterviewMailYet from './components/interviewmail/InterviewMailYet';
import InterviewMail from './components/interviewmail/InterviewMail';
import InterviewMake from './pages/interviewMake/InterviewMake';
import InterviewMakeComplete from './pages/interviewMake/InterviewMakeComplete';
import InterviewExit from './pages/interview/interview/InterviewExit';
// components
import Header from './components/header/Header';
import Step1 from './components/interview/checkSetting/Step1';
//import Step2 from './components/interview/checkSetting/Step2';

function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
                {/*헤더가 필요한 페이지 */}
                <Route element={<Header />}>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/group-profile" element={<GroupProfile />} />
                  <Route path="/result" element={<Result />} />
                  <Route path="/interview-mail-complete" element={<InterviewMailComplete />} />
                  <Route path="/interview-mail-yet" element={<InterviewMailYet />} />
                  <Route path="/interview-mail" element={<InterviewMail />} />
                  <Route path="/interview-make" element={<InterviewMake />} />
                  <Route path="/interview-make-complete" element={<InterviewMakeComplete />} />
                </Route>
                {/*헤더가 필요 없는 페이지*/}
                <Route path="/pretest" element={<PreTest />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/interview-exit" element={<InterviewExit />} />
                {/*면접 페이지*/}
                <Route element={<Interview />}>
                  <Route path="/interview-setting" element={<Step1/>}/>
                </Route>
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}

export default App;
