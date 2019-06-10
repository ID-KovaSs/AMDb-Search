import React, { Component } from 'react'
import { Row, Col, Form, Input, Button } from "antd";
import MainCompanyInfo from "./MainCompanyInfo";
import "./search-company.scss"

/** Получение тестовых данных из mock data */
import { companyResponse } from "../../../../store/mock";

class SearchCompanyInput extends Component {
  state = {
    showInfo : false,
    clearField : false
  }

  componentWillReceiveProps(nextProps) {
    const { companyResponse, inn } = this.props
    const { clearField } = this.state
    const {setFieldsValue} = this.props.form
    if(clearField && nextProps.companyResponse !== companyResponse) {
      setFieldsValue.__reactBoundContext.instances.data.state.value = inn
      this.setState({
        showInfo: true,
        clearField : false
      })
    } else {
      this.setState({
        showInfo: false,
        clearField : false
      })
    }
  }
  
  componentDidMount() {
    const { clearField } = this.state
    const { companyResponse, renderData, inn } = this.props
    const {setFieldsValue} = this.props.form
    if(!clearField && companyResponse && renderData) {
      setFieldsValue.__reactBoundContext.instances.data.state.value = inn
      this.setState({
        showInfo: true
      })
    }
  }
  
  handleSubmit = e => {  
    const { loadingCompanyOpenBillInfo, loadCompanyOpenBillInfo } = this.props
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        loadingCompanyOpenBillInfo()
        /** Симуляция получения данных от сервера */
        setTimeout(() => {
          loadCompanyOpenBillInfo(companyResponse)
          this.setState ({
            showInfo: true,
            clearField: false
          })
        }, 2500);
        this.changeValue()
      }
    });
  }

  changeValue = () => {
    const { actionChangeOpenBillInn } = this.props
    setTimeout(() => {
      actionChangeOpenBillInn(this.props.form.setFieldsValue.__reactBoundContext.instances.data.state.value)
    }, 100);
  }

  clearSearchField = () => {
    const { resetFields } = this.props.form
    const { toHideTableInfo, clearCompanyOpenBillInfo } = this.props
    this.setState({
      showInfo: false,
      clearField : true
    })
    toHideTableInfo()
    clearCompanyOpenBillInfo()
    resetFields()
  }
  
  getFields = () => {
    const { getFieldDecorator } = this.props.form
    const { showInfo } = this.state
    const { inn } = this.props
    return (
      <Row>
        <Col span={4}>
          <Form.Item>
            {getFieldDecorator('data', {
              initialValue: inn,
              rules: [
                { required: true, message: 'Строка поиска не должна быть пустой!' },
                { pattern: '^[0-9]{10,15}$', message: 'Поисковой запрос должен состоять из 10-15 цифр!'}
              ],
            })(
              <Input placeholder="Введите ИНН или ОГРН" disabled={showInfo}/>
            )}
          </Form.Item>
        </Col>
        <Col span={2}>
          { showInfo ?
            <Button onClick={this.clearSearchField} className="search-btn" type="default"> Очистить </Button> :
            <Button className="search-btn" type="primary" htmlType="submit"> Поиск </Button>
          }
        </Col>
          { showInfo && <MainCompanyInfo /> }
      </Row>
    )
  }

  render() {
    return (
      <Form className="ant-advanced-search-form" onSubmit={this.handleSubmit}>
        { this.getFields() }
      </Form>
    )
  }
}

const WrappedRegistrationForm = Form.create({ name: 'searh-open-bill-company' })(SearchCompanyInput);


export default WrappedRegistrationForm