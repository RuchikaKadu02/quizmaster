import React from 'react'
import Navbar from '../Navbar'
import SideBarSection from '../SideBar'
import Scoreboard from '../Scoreboard';
import BootstrapSvg from '../langIconData/BootstrapSvg';
import Footer from '../Footer';
import { useState } from "react";
import { BootstrapQuestion } from "../question/BootstrapQuestion";
import ResultShow from "../ResultShow";

function BootstrapQuiz() {
  const [queIndex, setQueIndex] = useState(0);

  const [trackClick, SetTrackClick] = useState(0);

  function changeQue() {
    if (queIndex < BootstrapQuestion.length - 1) {
      setQueIndex(queIndex + 1);
      updateScore();
    } else {
      SetShowResult(true)
    }
  }

  function priQue() {
    if (queIndex > 0) {
      setQueIndex(queIndex - 1);
    } else {
      return;
    }
  }
  const [changeScore, setChangeScore] = useState(0);

  function updateScore() {
    if (trackClick === BootstrapQuestion[queIndex].ans) {
      setChangeScore(changeScore + 1);
    } else {
      console.log(BootstrapQuestion[queIndex].ans);
      SetWrong(Wrong+1)
    }
  }

  const [ShowResult,SetShowResult]=useState(false);

  const [Wrong,SetWrong]=useState(0)

  function RestAll (){
    setQueIndex(0)
    SetShowResult(false)
    setChangeScore(0)
    SetWrong(0)

  }

  return (
    
   <div>
          <div className="QuizeSction">
      <div className="top-navbar">
        <Navbar />
      </div>

      {ShowResult ?(
        <div className=" d-flex justify-content-center align-items-center w-100 h-100">
           <ResultShow
        AllQuestion={BootstrapQuestion.length}
        SolvedQueStion={changeScore + 1}
        WrongQuestion={Wrong}
        RestFun={RestAll}
        />
        </div>):(
      <div className="container-fluid">
        <div className="row">
          <div className="d-none d-sm-none d-md-flex col-md-3 border border-bottom-0 side-Sction-Holder ">
            <SideBarSection />
          </div>
          <div className="col-12 col-sm-12 col-md-9">
            <div className="container">
              <div className="row">
                <div className="col-12 ">
                  <div className="question-section-holder" />
                  <div className="container">
          <div className="score-section d-flex">
            <Scoreboard allQuestion={BootstrapQuestion.length} nowScore={changeScore} />
            <>
              <div className="d-flex m-2 w-100 rounded border justify-content-center align-items-center">
                <span className="svg d-block mx-2 p-1">
                  <BootstrapSvg width="60" />
                </span>
                <span className="name d-block mx-2 fs-2 ">Bootstrap </span>
              </div>
            </>
          </div>
        </div>
        <div className="container-fluid mt-5 m-auto p-2 p-sm-3 p-md-5 rounded question-sction">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <span className="d-block fs-2  w-100 text-center">
                  {queIndex + 1}.{BootstrapQuestion[queIndex].question}
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                {BootstrapQuestion[queIndex].option.map((option, i) => {
                  return (
                    <button
                    key={i} 
                    className="btn position-relative w-75 btn-option shadow rounded-1 border-1 my-2 fs-5 p-2"
                      onClick={function trackScore() {
                        SetTrackClick(i + 1);
                      }}
                    >
                      <span className=" position-absolute que-number">
                        {i + 1}.{" "}
                      </span>
                      {option}
                    </button>
                  );  
                })}
              </div>
            </div>
          </div>

          <div className="d-flex mt-5 justify-content-center w-100">
            <button
              className="btn priv-btn shadow-sm d-block mx-auto p-2 rounded-2 w-25"
              onClick={priQue}
            >
              Prev
            </button>
            <button
              className="btn next-btn shadow-sm d-block mx-auto p-2 rounded-2 w-25"
              onClick={changeQue}
            >
              Save & Next
            </button>
          </div>
        </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
                  <Footer/>
                </div>
        </div>
      </div> 
      )}
    </div>
   </div>

  );
}

export default BootstrapQuiz;

