import React from 'react'
import { connect } from "react-redux";
// import { actionChangeInn, actionChangeOgrn } from "../../../../store/actions";
import { TabsContainer } from "./TabsContainer";

const Container = props => <TabsContainer store={props}/>

const putStateToProps = state => {
  const {creditConveyor : {inn, ogrn, companyResponse}} = state
  return {
    inn,
    ogrn,
    companyResponse
  }
}

export default connect(putStateToProps, null)(Container)
