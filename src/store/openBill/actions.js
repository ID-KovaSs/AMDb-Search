export const START = '_START'
export const SUCCESS = '_SUCCESS'
export const FAIL = '_FAIL'
export const UPDATE = '_UPDATE'

export const ACTION_CHANGE_OB_INN = 'ACTION_CHANGE_OB_INN'
export const actionChangeInn = newInn => {
  return {
    type: ACTION_CHANGE_OB_INN,
    payload: newInn
  }
}

export const LOAD_COMPANY_OB_INFO = 'LOAD_COMPANY_OB_INFO'
export const loadCompanyInfo = inn => {
  return dispatch => {
    dispatch({
      type: LOAD_COMPANY_OB_INFO + START,
      loading: true
    })

    fetch('/cgi-bin/serg/0/6/9/reports/276/mock.pl')
    .then(res => res.json())
    .then(res =>
      dispatch({
        type: LOAD_COMPANY_OB_INFO + SUCCESS,
        payload : res,
        loading : false
      })
    )

    fetch(`/cgi-bin/serg/0/6/9/reports/276/otkrytie_scheta.pl?request=${JSON.stringify({ 
      type: 'get_company_info',
      data : {
        code: inn
      }
    })}`, {
      mode: 'cors',
      credentials: 'include',
    })
    .then(res => res.json())
    .then(res => {
      const data = JSON.parse(res.data) 
      return dispatch({
        type: LOAD_COMPANY_OB_INFO + UPDATE,
        payload : data.Data.Report
      })
    })
  }
}

export const CLEAR_COMPANY_OB_INFO = 'CLEAR_COMPANY_OB_INFO'
export const clearCompanyInfo = () => {
  return {
    type: CLEAR_COMPANY_OB_INFO
  }
}

