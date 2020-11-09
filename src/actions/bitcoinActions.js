import axios from "axios";
import moment from "moment";

export const getData = ({ time, number }) => async dispatch => {
  try {
    dispatch({
      type: "AWAITING_BITCOIN"
    })

    // https://financialmodelingprep.com/api/v3/historical-chart/1min/BTCUSD?apikey=deme
    /*
[ {
  "date" : "2020-11-08 13:45:00",
  "open" : 15533.268000000000,
  "low" : 15497.087000000000,
  "high" : 15533.268000000000,
  "close" : 15497.087000000000,
  "volume" : 30837102592
}*/
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/historical-chart/${time}/BTCUSD?apikey=${process.env.REACT_APP_API_KEY}`)

    const labels = [];
    const data = [];
    for (let i = 0; i < response.data.length; i++) {
      data.unshift(response.data[i].close)
      labels.unshift(moment(response.data[i].date).format("LT"))

      if (i === (number - 1)) {
        break;
      }
    }

    dispatch({
      type: "SUCCESS_BITCOIN",
      payload: {
        data,
        labels
      }
    })
  } catch (e) {
    dispatch({
      type: "REJECTED_BITCOIN",
    })
  }
}

/*  resoibse.data:
[ {
  "date" : "2020-11-06 11:30:00",
  "open" : 15504.297000000000,
  "low" : 15465.839000000000,
  "high" : 15509.215000000000,
  "close" : 15509.215000000000,
  "volume" : 42792755200
}, {
  "date" : "2020-11-06 11:15:00",
  "open" : 15476.634000000000,
  "low" : 15416.083000000000,
  "high" : 15484.319000000000,
  "close" : 15484.319000000000,
  "volume" : 42862452736
} ]
*/