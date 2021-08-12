// 搜索值校验
function toSearchVaild() {
    var search = $("#search").val().trim();
    if (!search){
        layer.tips('请输入搜索内容!', '#search', {
          tips: [1, '#28a745'] //还可配置颜色
        });
        return false;
    }
}

function toSign(){
    layer.open({
        type: 1,
        skin: 'layui-layer-demo', //加上边框
        area: ['420px', '240px'], //宽高
        content: `<div></div>`
    });
}