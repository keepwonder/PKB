// 导入 vuex 
import { createStore} from 'vuex'

// 定义一个存储数据的结构  ---实体类
export interface MyState {
    collapse: boolean  // 控制侧边栏的收缩
}

// 创建一个store对象
const store = createStore<MyState>({

    // state --- 存储具体的值
    state: {
        collapse: false
    },

    // setter 修改state中值的函数
    mutations: {
        setCollapse(state: MyState, collapse: boolean) {
            state.collapse = collapse
        }
    },

    // getter 获取state中值的函数
    getters: {
        getCollapse(state: MyState){
            return state.collapse
        }
    }
})

export default store