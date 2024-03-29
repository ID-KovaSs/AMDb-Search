import React, { Component, Suspense } from "react";
import { connect } from "react-redux";
import { Spin, Col, Row } from "antd";
import PropTypes from "prop-types";
import CollapceContainer from "./CollapceContainer";
import SearchCompanyInput from "./SearchCompanyInput";
import { 
  decodedCompanyResponse, 
  decodedRequestLoading, 
  decodedRenderData, 
  decodedErrors, 
  decodedReqnum 
} from "../../../store/ducks/openBill";

class OpenBill extends Component {
  state = {
    showTable : false,
    loading : false,
    error: false
  }  

  componentWillReceiveProps(nextProps) {
    const { companyResponse } = this.props

    nextProps.requestLoading.get("companyMainInfoUpdate") === true ?
      this.setState({
        loading: true
      }) :
      this.setState({
        loading: false,
        showTable: true
      })
    nextProps.companyResponse !== companyResponse && 
    this.setState({ 
      showTable: true 
    })
  }

  componentDidMount() {
    const { companyResponse } = this.props
    companyResponse &&
    this.setState({
      showTable: true
    })
    document.title = "AC - Проверка | Открытие счета"
  }

  componentDidCatch(err) {
    console.log('err', err)
    return this.setState({
      error: true
    })
  }

  toHideTableInfo = () => {
    this.setState({
      showTable: false
    })
  }

  render() {
    const { showTable, loading, error } = this.state
    const { renderData, ebgInn } = this.props
    if(error) return <div style={{textAlign: "center"}}>Ошибка в работе компонента "openBill", пожалуйста перезагрузите страницу</div>

    return (
      <Suspense fallback={<div></div>}>
        <Row className="credit-conveyor">
          <Col span={24}>
            <SearchCompanyInput ebgInn={ebgInn} toHideTableInfo={this.toHideTableInfo} />
            { showTable && renderData ?
              <CollapceContainer /> : 
              <Spin spinning={loading} size="large" tip="Идет поиск данных" >
                <div className="search-result-table" style={{display: "table"}}>
                  <div style={{display: "table-cell", verticalAlign: "middle"}}>
                    <div style={{marginLeft: "auto", marginRight: "auto"}}>
                      <div>Открытие счета:</div>
                      <div>Для поиска информации об организации введите ИНН в поисковую строку</div>
                    </div>
                  </div>
                </div>
              </Spin>
            }
          </Col>
        </Row>
      </Suspense>
    );
  }
}

const putStateToProps = state => {
  return {
    companyResponse: decodedCompanyResponse(state),
    requestLoading: decodedRequestLoading(state) ,
    renderData: decodedRenderData(state),
    errors: decodedErrors(state),
    reqnum: decodedReqnum(state)
  }
}

export default connect(putStateToProps)(OpenBill)

/** Проверка на входящие параметры */
OpenBill.propTypes = {
  companyResponse: PropTypes.object,
  requestLoading: PropTypes.object,
  renderData: PropTypes.bool,
  errors: PropTypes.object
}