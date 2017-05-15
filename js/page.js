/**
 * Created by matrix on 2017/5/10.
 */
$(function(){
    var datas = [
        {"list": "mail", "listnum": "24"},
        {"list": "invites", "listnum": ""},
        {"list": "event", "listnum": ""},
        {"list": "account", "listnum": "2"},
        {"list": "static", "listnum": ""}
    ];
    var page = {
        init: function () {
            this.initUI();
            this.renderPage(datas);
            this.listEventBind();
        },
        initUI: function () {
            this.$main = $(".js-list");
        },
        listEventBind: function () {
            $(document).on("click", ".js-list li", function () {
                var $this = $(this);
                var $prev = $this.prev();
                $this.addClass("cur").siblings().removeClass("cur");
                if ($prev.length) {
                    $prev.addClass("borderBottom").siblings().removeClass("borderBottom");
                }
            })
        },
        renderPage: function (datas) {
            var items = datas,
                htmls = "",
                that = this;

            for (var i = 0; i < items.length; i++) {

                if (items[i].listnum == "" || items[i].listnum == 0) {
                    htmls += '<li class="sub ' + items[i].list + '"><strong class="content">' + items[i].list + '</strong> </li>';
                } else {
                    htmls += '<li class="sub ' + items[i].list + '"><strong class="content">' + items[i].list + '</strong> <span class="num">' + items[i].listnum + '</span></li>';
                }
            }

            that.$main.append(htmls);

            $(".js-list li").eq(1).addClass("cur");


        },
        doAjax:function(){

        }
    };

    page.init();

})
