import React from 'react'
import { connect } from "react-redux"
import ManagmentItem from './ManagmentItem'
import PropTypes from 'prop-types'
import { trasform } from "../../../../../services/transformData";
import { decodedRequestLoading, decodedManagementSource, identifyUser } from "../../../../../store/ducks/openBill";

/** Вывод данных об руководстве */
const ManagmentData = ({managementSource, identifyUser}) => {

  const managementInfo = trasform._managementSource(managementSource)
  const heads = managementInfo.find( item => item.id === 'heads');

  const renderHeads = heads.data.map( item =>  (
    <ManagmentItem 
      key={item.inn} 
      item={item} 
      activeKey={item.inn} 
      searchData={'heads'} 
      identifyUser={identifyUser}
    />
  ))

  return <>{renderHeads}</>
}

const putStateToProps = state => {
  return {
    requestLoading: decodedRequestLoading(state),
    managementSource: decodedManagementSource(state)
  }
}

const putActionsToProps = {
  identifyUser
}

export default connect(putStateToProps, putActionsToProps)(ManagmentData)

ManagmentItem.propTypes = {
  /** Данные о руководящем составе */
  managementSource: PropTypes.shape({
    heads: PropTypes.array,
    management_companies: PropTypes.array,
    founders_fl: PropTypes.array,
    founders_ul: PropTypes.array,
    befenicials: PropTypes.array
  }),
  identifyUser: PropTypes.func.isRequired
}