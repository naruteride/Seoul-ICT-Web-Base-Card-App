import React from 'react'
import { useNavigate } from 'react-router-dom';

const Detail = (props) => {
  const content = props.content;
  const navigate = useNavigate();
  console.log(content);
  return <div style={{ paddingTop: 20, textAlign: 'center', color: 'white' }}>
    <table border={1} style={{margin: "auto",}}>
      <thead>
        <tr>
          <td>사양</td>
          <td>수치</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>caliber</th>
          <td>{content.caliber}</td>
        </tr>
        <tr>
          <th>action</th>
          <td>{content.action}</td> 
        </tr>
        <tr>
          <th>length</th>
          <td>{content.length}</td>
        </tr>
        <tr>
          <th>height</th>
          <td>{content.height}</td> 
        </tr>
        <tr>
          <th>width</th>
          <td>{content.width}</td>
        </tr>
        <tr>
          <th>sightRadius</th>
          <td>{content.sightRadius}</td> 
        </tr>
        <tr>
          <th>barrelLength</th>
          <td>{content.barrelLength}</td>
        </tr>
        <tr>
          <th>barrelRifling</th>
          <td>{content.barrelRifling}</td> 
        </tr>
        <tr>
          <th>magCapacity</th>
          <td>{content.magCapacity}</td> 
        </tr>
        
      </tbody>
    </table>






    <button onClick={() => navigate(-1)}>BACK</button>
  </div>
}

export default Detail