import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const channelStore = createSlice({
  name: 'channel',
  initialState: {
    channelList: []
  },
  reducers: {
    setChannels (state, action) {
      state.channelList = action.payload
    }
  }
})


// 异步请求部分
const { setChannels } = channelStore.actions

const fetchChannlList = () => {
  return async (dispatch) => {
    const res = await axios.get('http://localhost:7300/mock/659095d96cc19439b72d0fd8/channels')
    dispatch(setChannels(res.data.data.channels))
  }
}

export { fetchChannlList }

const reducer = channelStore.reducer

export default reducer
