webpackJsonp([25],{1162:function(t,_,v){"use strict"},1447:function(t,_){t.exports={render:function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("div",{staticClass:"doc"},[v("h2",[t._v("Category 分类选择")]),t._v(" "),v("h3",[t._v("基本调用")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),v("example",{attrs:{demo:"plugins/category1"}}),t._v(" "),v("h3",[t._v("对象调用")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),v("example",{attrs:{demo:"plugins/category2"}}),t._v(" "),v("h3",[t._v("字典配置")]),t._v(" "),v("example",{attrs:{demo:"plugins/category3"}}),t._v(" "),v("h3",[t._v("Category 参数")]),t._v(" "),t._m(4),t._v(" "),v("h3",[t._v("option 配置")]),t._v(" "),t._m(5)],1)},staticRenderFns:[function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("在传递的param参数中，定义基本的数据字段："),v("code",[t._v("keyName")]),t._v(", "),v("code",[t._v("parentName")]),t._v(", "),v("code",[t._v("titleName")]),t._v("。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("设定数据模式："),v("code",[t._v("dataMode")]),t._v(", 当传递的数据为有key,parent字段的list，则传递"),v("code",[t._v("list")]),t._v("，组件会根据key,parent字段自动计算树模型，如果传递的数据本身就是树模型，则传递"),v("code",[t._v("tree")]),t._v("。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("在传递的param参数中，定义基本的数据字段："),v("code",[t._v("keyName")]),t._v(", "),v("code",[t._v("parentName")]),t._v(", "),v("code",[t._v("titleName")]),t._v("。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("p",[t._v("设定数据模式："),v("code",[t._v("dataMode")]),t._v(", 当传递的数据为有key,parent字段的list，则传递"),v("code",[t._v("list")]),t._v("，组件会根据key,parent字段自动计算树模型，如果传递的数据本身就是树模型，则传递"),v("code",[t._v("tree")]),t._v("。")])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"table"},[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("type")]),t._v(" "),v("td",[t._v("数据类型")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("key,object")]),t._v(" "),v("td",[t._v("key")])]),t._v(" "),v("tr",[v("td",[t._v("option")]),t._v(" "),v("td",[t._v("配置项，详细参见下面的option说明")]),t._v(" "),v("td",[t._v("Object")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("multiple")]),t._v(" "),v("td",[t._v("多选")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("filterable")]),t._v(" "),v("td",[t._v("是否可以搜索")]),t._v(" "),v("td",[t._v("Boolean")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("false")])]),t._v(" "),v("tr",[v("td",[t._v("config")]),t._v(" "),v("td",[t._v("使用全局配置的方法")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])])])},function(){var t=this,_=t.$createElement,v=t._self._c||_;return v("table",{staticClass:"table"},[v("tr",[v("th",[t._v("参数")]),t._v(" "),v("th",[t._v("说明")]),t._v(" "),v("th",[t._v("类型")]),t._v(" "),v("th",[t._v("可选值")]),t._v(" "),v("th",[t._v("默认值")])]),t._v(" "),v("tr",[v("td",[t._v("keyName")]),t._v(" "),v("td",[t._v("数据的key对应字段")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("全局配置"),v("code",[t._v("category.default.keyName")])])]),t._v(" "),v("tr",[v("td",[t._v("titleName")]),t._v(" "),v("td",[t._v("数据的title对应字段")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("全局配置"),v("code",[t._v("category.default.titleName")])])]),t._v(" "),v("tr",[v("td",[t._v("parentName")]),t._v(" "),v("td",[t._v("数据的parent对应字段")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("全局配置"),v("code",[t._v("category.default.parentName")])])]),t._v(" "),v("tr",[v("td",[t._v("dataMode")]),t._v(" "),v("td",[t._v("提供的数据类型，是平铺需要解析的列表，还是已经生成好的tree数据")]),t._v(" "),v("td",[t._v("String")]),t._v(" "),v("td",[t._v("list, tree")]),t._v(" "),v("td",[t._v("list")])]),t._v(" "),v("tr",[v("td",[t._v("datas")]),t._v(" "),v("td",[t._v("用于tree展示的数据")]),t._v(" "),v("td",[t._v("Array")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("[]")])]),t._v(" "),v("tr",[v("td",[t._v("getTotalDatas")]),t._v(" "),v("td",[t._v("异步获取用于tree展示的数据，一次性全部加载")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])]),t._v(" "),v("tr",[v("td",[t._v("getDatas")]),t._v(" "),v("td",[t._v("异步获取用于tree展示的数据，每一次单击获取子集")]),t._v(" "),v("td",[t._v("Function")]),t._v(" "),v("td",[t._v("-")]),t._v(" "),v("td",[t._v("-")])])])}]}},901:function(t,_,v){var e=v(1)(v(1162),v(1447),null,null,null);t.exports=e.exports}});