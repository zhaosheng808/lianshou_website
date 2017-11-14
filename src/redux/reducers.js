/**
 * Created by DELL on 2017/11/14.
 */
import { combineReducers } from 'redux'

const name = (state='', action) => {
  switch (action.type) {
    case 'hi':
      return "hello world!";
    default :
      return state
  }
};
/*
reducer首先用action中传入的type属性来判断我们要做的是哪种操作，
然后再根据传入的其他属性当做参数做你想要的改变，最后返回一个{name : ...}的对象，
然后所有类似的对象通过combineReducers合并为一个总状态对象暴露给组件访问。
*/

const todoApp = combineReducers({
  name,
  // more state
});

export default todoApp;