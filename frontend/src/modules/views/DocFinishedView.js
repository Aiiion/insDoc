import React, { useState, useEffect } from "react";
import { useTemplate } from "../providers/TemplateDataProvider";

import Button from "react-bootstrap/Button";
import { Redirect } from "react-router";



function DocFinishedView() {
  
    
  

  return (
    <div className="login">
      <h1 className="mt-2 col-12 textCenter">{thisTemplate.body}</h1>

      
    </div>
  );
}

export default DocFinishedView;
