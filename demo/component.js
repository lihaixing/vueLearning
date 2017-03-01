//组件库，接受参数props，template
Vue.component('list-component',{
    //模板，数据，视图全部一次搞定
    props:['data'],
    template:
    `
    <table class='table'>
        <thead>
            <tr>
                <td>id</td>
                <td>title</td>
                <td>content</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for='item in data'>
                <td>{{item.id}}</td>
                <td>{{item.title}}</td>
                <td>{{item.content}}</td>
            </tr>
        </tbody>
    </table>
    `
})