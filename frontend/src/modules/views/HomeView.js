import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import PropTypes from 'prop-types';
import TemplateIcon from '../components/TemplateIcon';
import FinishedIcon from '../components/finishedIcon';

async function getTemplates(user_id) {
    console.log("getting Templates " + user_id)
    return fetch(`http://localhost:8080/api/doc/docTemplates/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
  }

  async function getFinishedDocs(user_id) {
    console.log("getting docs " + user_id)
    return fetch(`http://localhost:8080/api/doc/finishedDocs/${user_id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(data => data.json())
  }

function HomeView(user){
    
    const [templates, setTemplates] = useState([]); 
    const [finishedDocs, setFinishedDocs] = useState([]);
    
    useEffect(() => {
        getTemplates(user.user.id)
        .then(data => setTemplates(data))
    }, []) // kör varje gång något ändras inom []

    useEffect(() => {
        getFinishedDocs(user.user.id)
        .then(data => setFinishedDocs(data))
    }, [])

    console.log(templates)
    return(
        <div className="body">

        <h2 className="textCenter m-3">Recent Templates</h2>
        <hr/>
        <TemplateIcon templates={templates} />
        <h2 className="textCenter m-3">Recently Finished</h2>
        <hr/>
        <FinishedIcon templates={finishedDocs} />
        </div>
        
    );
}
HomeView.propTypes = {
    user: PropTypes.object
  }

export default HomeView;