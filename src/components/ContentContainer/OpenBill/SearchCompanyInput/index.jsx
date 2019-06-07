import React from 'react'
import { connect } from "react-redux";
import { actionChangeOpenBillInn, loadCompanyOpenBillInfo, loadingCompanyOpenBillInfo, clearCompanyOpenBillInfo } from "../../../../store/actions";
import SearchCompanyInput from "./SearchCompanyInput";

const Container = props => <SearchCompanyInput store={props}/>

const putStateToProps = state => {
  const {openBill : { companyResponse, renderData, inn }} = state
  return {
    companyResponse,
    renderData,
    inn
  }
}

const putActionsToProps =  {
  actionChangeOpenBillInn,
  loadingCompanyOpenBillInfo,
  loadCompanyOpenBillInfo,
  clearCompanyOpenBillInfo
}

export default connect(putStateToProps, putActionsToProps)(Container)
