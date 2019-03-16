// import React from 'react'
//
// class Calculator extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             age: 0,
//             income:0,
//             grade: 0,
//         };
//
//         this.handleChange = this.handleChange.bind(this);
//     }
//
//     handleChange = e => {
//         const {name, value} = e.target;
//
//         // https://reactjs.org/docs/forms.html
//
//         this.setState({
//             [name]: value
//         });
//     }
//
//     render() {
//         const {age, income, grade} = this.state;
//         const result = age * income * grade;
//         return (
//             <>
//                 <form>
//                     <div>
//                         <label htmlFor="age">年齢</label>
//                         <br/>
//                         <input type="number" name="age" id="age" value={age} onChange={this.handleChange}/>
//                         <span>歳</span>
//                     </div>
//                     <div>
//                         <label htmlFor="income">年収</label>
//                         <br/>
//                         <input type="number" name="income" id="income" value={income} onChange={this.handleChange}/>
//                         <span>万円</span>
//                     </div>
//                     <div>
//                         <span>下記の方はいずれかを選択してください</span>
//                         <div style={{display: 'flex'}}>
//                             {/*今の計算機の男女の箇所を見る*/}
//                             <input type="radio" name="work" id="homemaker" checked="checked" value="homemaker"/>
//                             <label htmlFor="work">主婦（主夫）</label>
//                             <input type="radio" name="work" id="student" checked="" value="student"/>
//                             <label htmlFor="work">学生</label>
//                             <input type="radio" name="work" id="other" checked="" value="other"/>
//                             <label htmlFor="work">その他</label>
//                         </div>
//                     </div>
//                     <div>
//                         <label htmlFor="isMuchiuchi">怪我の程度</label>
//                         <br/>
//                         <select name="isMuchiuchi" onChange={this.handleChange}>
//                             <option value="false">むち打ちより大きい</option>
//                             <option value="true">むち打ち程度</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="visitedHospitalTerm">入院期間</label>
//                         <br/>
//                         <input type="number" name="visitedHospitalTerm" id="visitedHospitalTerm" value="0" onChange={this.handleChange}/>
//                         <span>日間</span>
//                     </div>
//                     <div>
//                         <label htmlFor="stayedHospitalTerm">通院期間</label>
//                         <br/>
//                         <input type="number" name="stayedHospitalTerm" id="stayedHospitalTerm" value="0" onChange={this.handleChange}/>
//                         <span>日間</span>
//                     </div>
//                     <div>
//                         <label htmlFor="income">
//                             休業日数
//                             <span>（主婦または主婦の方は家事ができなかった日数）</span>
//                         </label>
//                         <br/>
//                         <input type="number" name="durationOfAbsence" id="durationOfAbsence" value="0" onChange={this.handleChange}/>
//                         <span>日間</span>
//                     </div>
//                     <div>
//                         <label htmlFor="grade">
//                             後遺障害等級
//                             <span>不明の場合は武藤級で計算</span>
//                         </label>
//                         <br/>
//                         <select name="grade" onChange={this.handleChange}>
//                             <option value="0">非該当</option>
//                             <option value="14">14級</option>
//                             <option value="13">13級</option>
//                         </select>
//                     </div>
//                     <div>
//                         <label htmlFor="gender">性別</label>
//                         <br/>
//                         {/*タブの実装を見る*/}
//                         <input type="button" name="male" id="male" value="男性"/>
//                         <input type="button" name="female" id="female" value="女性"/>
//                     </div>
//                     <div>
//                         {result}
//                     </div>
//                 </form>
//             </>
//         );
//     }
// };

import React, { useState, useEffect } from "react"
import ChildComponent from "./ChildComponent"

function callCalculatorClass(age, income, grade) {
  return [age, income, grade, age + income]
}

function Calculator() {
  const [isOpen, setIsOpen] = useState(false)
  const [elements, setElements] = useState(null)

  function handleChange(states) {
    setElements(states)
  }

  return (
    <>
      <ChildComponent handleChange={handleChange} />
      <div>
        <input
          type="button"
          id="open"
          value="toggle"
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <Result elements={elements} setIsOpen={setIsOpen} isOpen={isOpen} />
        )}
      </div>
    </>
  )
}

const Result = ({ elements, setIsOpen, isOpen }) => {
  if (elements === null) return
  const { age, income, grade } = elements
  const [a, b, c, d] = callCalculatorClass(age, income, grade)
  const result = a + b + c + d
  return (
    <>
      <div>{result}</div>
      <input
        type="button"
        id="open"
        value="toggle"
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  )
}

export default Calculator
