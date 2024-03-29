import React, { useState, useEffect } from "react"

function ChildComponent({ handleChange }) {
  const [age, setAge] = useState(0)
  const [income, setIncome] = useState(0)
  const [grade, setGrade] = useState(0)
  const [employment, setEmployment] = useState("homemaker")
  const [gender, setGender] = useState("")
  const elements = [age, income, grade, employment, gender]

  useEffect(() => {
    const states = {
      age,
      income,
      grade,
      employment,
      gender,
    }
    handleChange(states)
  }, elements)

  return (
    <form>
      <div>
        <label htmlFor="age">年齢</label>
        <br />
        <input
          type="number"
          name="age"
          id="age"
          value={age}
          onChange={e => setAge(parseInt(e.target.value))}
        />
        <span>歳</span>
      </div>
      <div>
        <label htmlFor="income">年収</label>
        <br />
        <input
          type="number"
          name="income"
          id="income"
          value={income}
          onChange={e => setIncome(parseInt(e.target.value))}
        />
        <span>万円</span>
      </div>
      <div>
        <span>下記の方はいずれかを選択してください</span>
        <div style={{ display: "flex" }}>
          {/*今の計算機の男女の箇所を見る*/}
          <input
            type="radio"
            name="work"
            id="homemaker"
            checked={employment === "homemaker" ? "checked" : ""}
            value="homemaker"
            onClick={e => setEmployment(e.target.value)}
          />
          <label htmlFor="work">主婦（主夫）</label>
          <input
            type="radio"
            name="work"
            id="student"
            checked={employment === "student" ? "checked" : ""}
            value="student"
            onClick={e => setEmployment(e.target.value)}
          />
          <label htmlFor="work">学生</label>
          <input
            type="radio"
            name="work"
            id="other"
            checked={employment === "other" ? "checked" : ""}
            value="other"
            onClick={e => setEmployment(e.target.value)}
          />
          <label htmlFor="work">その他</label>
        </div>
      </div>
      <div>
        <label htmlFor="isMuchiuchi">怪我の程度</label>
        <br />
        <select name="isMuchiuchi">
          <option value="false">むち打ちより大きい</option>
          <option value="true">むち打ち程度</option>
        </select>
      </div>
      <div>
        <label htmlFor="visitedHospitalTerm">入院期間</label>
        <br />
        <input
          type="number"
          name="visitedHospitalTerm"
          id="visitedHospitalTerm"
          value="0"
        />
        <span>日間</span>
      </div>
      <div>
        <label htmlFor="stayedHospitalTerm">通院期間</label>
        <br />
        <input
          type="number"
          name="stayedHospitalTerm"
          id="stayedHospitalTerm"
          value="0"
        />
        <span>日間</span>
      </div>
      <div>
        <label htmlFor="income">
          休業日数
          <span>（主婦または主婦の方は家事ができなかった日数）</span>
        </label>
        <br />
        <input
          type="number"
          name="durationOfAbsence"
          id="durationOfAbsence"
          value="0"
        />
        <span>日間</span>
      </div>
      <div>
        <label htmlFor="grade">
          後遺障害等級
          <span>不明の場合は武藤級で計算</span>
        </label>
        <br />
        <select name="grade" onChange={e => setGrade(parseInt(e.target.value))}>
          <option value="0">非該当</option>
          <option value="14">14級</option>
          <option value="13">13級</option>
        </select>
      </div>
      <div>
        <label htmlFor="gender">性別</label>
        <br />
        {/*タブの実装を見る*/}
        <input
          type="button"
          name="male"
          id="male"
          value="男性"
          onClick={e => setGender(e.target.name)}
          style={{ backgroundColor: gender === "male" ? "skyblue" : "" }}
        />
        <input
          type="button"
          name="female"
          id="female"
          value="女性"
          onClick={e => setGender(e.target.name)}
          style={{ backgroundColor: gender === "female" ? "skyblue" : "" }}
        />
      </div>
    </form>
  )
}

export default ChildComponent
