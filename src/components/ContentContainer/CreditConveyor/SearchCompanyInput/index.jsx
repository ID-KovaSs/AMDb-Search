import React from 'react'
import { connect } from "react-redux";
import { 
  actionChangeInn, 
  loadCompanyInfo, 
  clearCompanyInfo,
  decodedCompanyResponse, 
  decodedRenderData, 
  decodedInn, 
  decodedErrors
} from "../../../../store/ducks/creditConveyor";
import SearchCompanyInput from "./SearchCompanyInput";

const Container = props => <SearchCompanyInput {...props}/>

const putStateToProps = state => {
  return {
    companyResponse: decodedCompanyResponse(state),
    renderData: decodedRenderData(state),
    inn: decodedInn(state), 
    errors: decodedErrors(state)
  }
}

const putActionsToProps =  {
  actionChangeInn,
  loadCompanyInfo,
  clearCompanyInfo
}

export default connect(putStateToProps, putActionsToProps)(Container)
