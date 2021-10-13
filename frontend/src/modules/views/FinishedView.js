import React,{useEffect, useState} from 'react';
import FinishedIcon from '../components/finishedIcon';

async function getFinishedDocs(user_id) {
    console.log("getting docs " + user_id)
    return fetch(`https://insdoc.herokuapp.com/api/doc/finishedDocs/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
  }
function FinishedView({ user }){
    const [finishedDocs, setFinishedDocs] = useState([]);
    
    useEffect(() => {
        getFinishedDocs(user.id)
        .then(data => setFinishedDocs(data))
    }, [])
    return(
        <div className="body">
        <h1 className="textCenter">Finished insDocs</h1>
        <FinishedIcon templates={finishedDocs} />
        </div>
        
    );
}

export default FinishedView;