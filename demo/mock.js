var data = [
{title:'hello', content:'今天是个好日子', id:'20'},
{title:'hello', content:'今天是个好日子', id:'22'},
{title:'hello', content:'今天是个好日子', id:'23'},
{title:'hello', content:'今天是个好日子', id:'24'},
{title:'hello', content:'今天是个好日子', id:'250'},
{title:'hello', content:'今天是个好日子', id:'26'}
]

	Vue.component('list-component', {
	props:['data'],
		template:`
		< table class = 'table' >
		< thead >
		< tr >
		< td > id < /td>
		< td > title < /td>
		< td > content < /td>
		< /tr>
		< /thead>
		< tbody >
		< tr v - for = 'item in data' >
		< td > {{item.id}} < /td>
		< td > {{item.title}} < /td>
		< td > {{item.content}} < /td>
		< /tr>
		< /tbody>
		< /table>
		`
	})

//vue化
//vue作用域内产生一个数据:lists
	new Vue({
	el:"#app",
		data:{
		lists:data
		}
	});
