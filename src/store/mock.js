import { getTimeAndDate } from '../services/utils'

export const companyRes = {
  "company_type": "",
  "registration_date": "",
  "phone_list": "",
  "workers_range": "",
  "workers_range_fns": "",
  "index_of_due_diligence": "",
  "payment_index": "",
  "failure_score": "",
  "ogrn": "",
  "status": "",
  "previous_address": "",
  "previous_name": "",
  "email": "",
  "address": "",
  "successors": "",
  "capital": "",
  "site": "",
  "full_name": "",
  "stop_list": "",
  "leaders_list": "",
  "inn": "",
  "name": '',
  "okved": "",
  "precessors": '',
  "fns": "",
  "sex": "",
  "birthdate": "",
  "birth_place": "",
  "arbiter": "",
  "arbiter_other": "",
  "spiski": "",
  "heads": [],
  "isponlit_proizvodstva": "",  
  "sanctions": "",
  "founders_fl": [],
  "management_companies":[],
  "management_history":[],
  "founders_ul": [],
  "befenicials": [],
  "ul" : [],
  "fl" : [],
  "documents": [],
  "heads_ul" : [],
  "heads_fl" : [],
  "share_holders_fl" : [],
  "share_holders_ul" : [],
  "key" : "",
  "reqnum" : ""
}

export const ebgData = [
  {
    key: '1',
    number: '1',
    date: getTimeAndDate(Date.now()-(19*60000)),
    time: Date.now()-(19*60000),
    info: {
      name: 'ШАМКОВ МАКСИМ АНАТОЛЬЕВИЧ',
      inn: '552801899036',
      birthday: '1969-04-22',
    }
  },
  {
    key: '2',
    number: '2',
    date: getTimeAndDate(Date.now()-(17*60000)),
    time: Date.now()-(17*60000),
    info: {
      name: "ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ \"БЕЛЫЙ ДОМ\"",
      inn: '2901178314',
      ogrn: '1082901005263',
    }
  },
  {
    key: '3',
    number: '3',
    date: getTimeAndDate(Date.now()-(15*60000)),
    time: Date.now()-(15*60000),
    info: {
      name: "ООО \"БИКОМПАКТ 2.0\"",
      inn: '7725735213',
      ogrn: '1117746763672',
    }
  },
  {
    key: '4',
    number: '4',
    date: getTimeAndDate(Date.now()-(14*60000)),
    time: Date.now()-(14*60000),
    info: {
      name: "ООО \"КУРОРТНЫЙ МАГАЗИН\"",
      inn: '7702419476',
      ogrn: '1177746635153',
    }
  },
  {
    key: '5',
    number: '5',
    date: getTimeAndDate(Date.now()-(11*60000)),
    time: Date.now()-(11*60000),
    info: {
      name: "АО \"КН ФПК \"ГАРАНТ-ИНВЕСТ\"",
      inn: '7726637843',
      ogrn: '1097746603680',
    }
  },
  {
    key: '6',
    number: '6',
    date: getTimeAndDate(Date.now()-(7*60000)),
    time: Date.now()-(7*60000),
    info: {
      name: "ОАО \"РЖД\"",
      inn: '7708503727',
      ogrn: '1037739877295',
    }
  },
  {
    key: '7',
    number: '7',
    date: getTimeAndDate(Date.now()-(4*60000)),
    time: Date.now()-(4*60000),
    info: {
      name: "АО \"АВАНТЕЛ\"",
      inn: '5408185212',
      ogrn: '1025403651195',
    }
  },
  {
    key: '8',
    number: '8',
    date: getTimeAndDate(Date.now()-(3*60000)),
    time: Date.now()-(3*60000),
    info: {
      name: "ООО \"ГАЗПРОМ ТРАНСГАЗ МОСКВА\"",
      inn: '5003028028',
      ogrn: '1025000653920',
    }
  },
  {
    key: '9',
    number: '9',
    date: getTimeAndDate(Date.now()-(2.5*60000)),
    time: Date.now()-(2.5*60000),
    info: {
      name: 'Назаров Зафар Эгамкулович',
      inn: '272417313948',
      birthday: '1964-08-19',
    }
  },
  {
    key: '10',
    number: '10',
    date: getTimeAndDate(Date.now()-(1*60000)),
    time: Date.now()-(1*60000),
    info: {
      name: "ООО \"НОВЫЙ ВЕК - МЕДИА\"",
      inn: '2317054915',
      ogrn: '1092367003849',
    }
  },
];

export const region = [
  {
    value: "01",
    title: "Алтайский край"
  },
  {
    value: "10",
    title: "Амурская область"
  },
  {
    value: "11",
    title: "Архангельская область"
  },
  {
    value: "12",
    title: "Астраханская область"
  },
  {
    value: "14",
    title: "Белгородская область"
  },
  {
    value: "15",
    title: "Брянская область"
  },
  {
    value: "17",
    title: "Владимирская область"
  },
  {
    value: "18",
    title: "Волгоградская область"
  },
  {
    value: "19",
    title: "Вологодская область"
  },
  {
    value: "20",
    title: "Воронежская область"
  },
  {
    value: "40",
    title: "Санкт-Петербург и Ленинградская область"
  },
  {
    value: "99",
    title: "Еврейская автономная область"
  },
  {
    value: "76",
    title: "Забайкальский край"
  },
  {
    value: "24",
    title: "Ивановская область"
  },
  {
    value: "25",
    title: "Иркутская область"
  },
  {
    value: "83",
    title: "Кабардино-Балкарская Республика"
  },
  {
    value: "27",
    title: "Калининградская область"
  },
  {
    value: "29",
    title: "Калужская область"
  },
  {
    value: "30",
    title: "Камчатский край"
  },
  {
    value: "91",
    title: "Карачаево-Черкесская Республика"
  },
  {
    value: "32",
    title: "Кемеровская область"
  },
  {
    value: "33",
    title: "Кировская область"
  },
  {
    value: "34",
    title: "Костромская область"
  },
  {
    value: "03",
    title: "Краснодарский край"
  },
  {
    value: "04",
    title: "Красноярский край"
  },
  {
    value: "37",
    title: "Курганская область"
  },
  {
    value: "38",
    title: "Курская область"
  },
  {
    value: "42",
    title: "Липецкая область"
  },
  {
    value: "44",
    title: "Магаданская область"
  },
  {
    value: "45",
    title: "Москва и Московская область"
  },
  {
    value: "47",
    title: "Мурманская область"
  },
  {
    value: "22",
    title: "Нижегородская область"
  },
  {
    value: "49",
    title: "Новгородская область"
  },
  {
    value: "50",
    title: "Новосибирская область"
  },
  {
    value: "52",
    title: "Омская область"
  },
  {
    value: "53",
    title: "Оренбургская область"
  },
  {
    value: "54",
    title: "Орловская область"
  },
  {
    value: "56",
    title: "Пензенская область"
  },
  {
    value: "57",
    title: "Пермский край"
  },
  {
    value: "05",
    title: "Приморский край"
  },
  {
    value: "58",
    title: "Псковская область"
  },
  {
    value: "79",
    title: "Республика Адыгея"
  },
  {
    value: "80",
    title: "Республика Башкортостан"
  },
  {
    value: "81",
    title: "Республика Бурятия"
  },
  {
    value: "82",
    title: "Республика Дагестан"
  },
  {
    value: "26",
    title: "Республика Ингушетия"
  },
  {
    value: "85",
    title: "Республика Калмыкия"
  },
  {
    value: "86",
    title: "Республика Карелия"
  },
  {
    value: "87",
    title: "Республика Коми"
  },
  {
    value: "35",
    title: "Республика Крым (исключая Севастополь)"
  },
  {
    value: "88",
    title: "Республика Марий Эл"
  },
  {
    value: "89",
    title: "Республика Мордовия"
  },
  {
    value: "98",
    title: "Республика Саха (Якутия)"
  },
  {
    value: "90",
    title: "Республика Северная Осетия - Алания"
  },
  {
    value: "92",
    title: "Республика Татарстан"
  },
  {
    value: "93",
    title: "Республика Тыва"
  },
  {
    value: "95",
    title: "Республика Хакасия"
  },
  {
    value: "60",
    title: "Ростовская область"
  },
  {
    value: "61",
    title: "Рязанская область"
  },
  {
    value: "36",
    title: "Самарская область"
  },
  {
    value: "63",
    title: "Саратовская область"
  },
  {
    value: "64",
    title: "Сахалинская область"
  },
  {
    value: "65",
    title: "Свердловская область"
  },
  {
    value: "67",
    title: "Севастополь город федерального значения"
  },
  {
    value: "66",
    title: "Смоленская область"
  },
  {
    value: "07",
    title: "Ставропольский край"
  },
  {
    value: "68",
    title: "Тамбовская область"
  },
  {
    value: "28",
    title: "Тверская область"
  },
  {
    value: "69",
    title: "Томская область"
  },
  {
    value: "70",
    title: "Тульская область"
  },
  {
    value: "71",
    title: "Тюменская область"
  },
  {
    value: "94",
    title: "Удмуртская Республика"
  },
  {
    value: "73",
    title: "Ульяновская область"
  },
  {
    value: "08",
    title: "Хабаровский край"
  },
  {
    value: "75",
    title: "Челябинская область"
  },
  {
    value: "96",
    title: "Чеченская Республика"
  },
  {
    value: "97",
    title: "Чувашская Республика-Чувашия"
  },
  {
    value: "77",
    title: "Чукотский автономный округ"
  },
  {
    value: "78",
    title: "Ярославская область"
  }
]