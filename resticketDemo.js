/**
 * Created by wudhb on 2017/2/23.
 */
var resticketApp = new Vue({
    el: '#resticketDemo',
    data: {
        constant: {
            FIND_URL: " /api/resticket/space/park/resticketManage/findResticketConvertConfig",
            SAVE_URL: " /api/resticket/space/park/resticketManage/addResticketConvertConfig"
        },
        resticketList: {},
        items: [],
        delItems: []
    },
    methods: {
        find: function () {
            var that = this;
            var url = this.constant.FIND_URL;
            var paramObj = {resticketId: 1};
            $.get(url, paramObj, function (result) {
                if (result.header.retCode == "000000") {
                    that.$set(that.resticketList, "find", result.body[result.header.busiCode]);
                    that.items = that.resticketList.find;
                    alert(result.header.retMsg);
                }
            });
        },
        save: function () {
            var that = this;
            var url = this.constant.SAVE_URL;
            var list = this.items.concat(this.delItems);
            var paramObj = {resticketId: 1, list: list};
            $.post(url, paramObj, function(result){
                if (result.header.retCode == "000000") {
                    that.$set(that.resticketList, "save", result.body[result.header.busiCode]);
                    alert(result.header.retMsg);
                }
            });
        },
        cancel: function () {
            window.location.href = "/resticket";
        },
        add: function () {
            var obj = { name: '123', isRequired : false, status: 1 };
            this.items.push(obj);
        },
        remove: function(index) {
            var delArray = this.items.splice(index, 1);
            // 仅更新状态（0）可转变为删除状态（2）
            var obj = delArray[0];
            var status = obj.status;
            if (status == 0) {
                obj.status = 2;
                this.delItems.push(obj);
            }
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            // 代码保证 this.$el 在 document 中
            this.find();
        })
    }
})