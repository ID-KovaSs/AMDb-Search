import React, { Component } from 'react'
import { Row, Col, Form, Input, Button } from "antd";
import MainCompanyInfo from "./MainCompanyInfo";
import "./search-company.scss"

/** Получение данных из mock data */
import { companyResponse } from "../../../../store/mock";



class SearchCompanyInput extends Component {
  state = {
    showInfo : false,
    clearField : false
  }

  componentWillReceiveProps(nextProps) {
    const { companyResponse } = this.props.store
    const { clearField } = this.state
    if(!clearField && nextProps.companyResponse !== companyResponse) {
      this.setState({
        showInfo: true,
        clearField : false
      })
    }
  }
  
  componentDidMount() {
    const { clearField } = this.state
    const { companyResponse } = this.props.store
    if(!clearField && companyResponse) {
      this.setState({
        showInfo: true
      })
    }
  }

  handleSubmit = e => {  
    const { loadingCompanyInfo, loadCompanyInfo } = this.props.store
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        loadingCompanyInfo()
        /** Симуляция получения данных от сервера */
        setTimeout(() => {
          loadCompanyInfo(companyResponse)
          this.setState ({
            showInfo: true,
          })
        }, 1000);
      }
    });
  }

  clearSearchField = () => {
    const { resetFields } = this.props.form
    // const { clearCompanyInfo } = this.props.store
    // clearCompanyInfo()
    resetFields()
    this.setState({
      showInfo: false,
      clearField : true
    })
  }
  
  getFields = () => {
    const { getFieldDecorator } = this.props.form
    const { showInfo } = this.state
    return (
      <Row>
        <Col span={4}>
          <Form.Item>
            {getFieldDecorator('data', {
              rules: [
                { required: true, message: 'Строка поиска не должна быть пустой!' },
                { pattern: '^[0-9]+$', message: 'Поисковой запрос должен состоять из цифр!'}
              ],
            })(
              <Input disabled={showInfo}/>
            )}
          </Form.Item>
        </Col>
        <Col span={2}>
          { showInfo ?
            <Button onClick={this.clearSearchField} className="search-btn" type="default"> Очистить </Button> :
            <Button className="search-btn" type="primary" htmlType="submit"> Поиск </Button>
          }
        </Col>
          { 
            showInfo ? <MainCompanyInfo /> : null
          }
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

const WrappedRegistrationForm = Form.create({ name: 'searh-company' })(SearchCompanyInput);


export default WrappedRegistrationForm
