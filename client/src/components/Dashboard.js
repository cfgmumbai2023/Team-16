import {useEffect, useState} from "react";
import axios from "axios";

export const Dashboard = () => {
    const [students, setStudents] = useState([])

    useEffect(() => {
        axios({
            method: "GET",
            url: `http://localhost:8080/student?teacher=${localStorage.getItem("umrikey")}`
        }).then(res => {
            setStudents(res.data)
            console.log(res.data)
        })
            .catch(err => console.error(err.message))
    })
  return (
      <div>
          dashboard boi
      </div>
  )
}