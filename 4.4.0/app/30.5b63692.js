(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{397:function(t,e,a){"use strict";a.r(e);var n=a(90),s=(a(87),a(76)),r=a(67);function o(t,e,a,n,s,r,o){try{var l=t[r](o),i=l.value}catch(t){return void a(t)}l.done?e(i):Promise.resolve(i).then(n,s)}var l={name:"MyReports",components:{VueGoodTable:n.a},mixins:[r.a,s.a],props:{baseUrl:{type:String,default:blessing.base_url}},data(){return{reports:[],columns:[{field:"id",label:"ID",type:"number"},{field:"tid",label:this.$t("report.tid"),type:"number"},{field:"reason",label:this.$t("report.reason"),sortable:!1},{field:"status",label:this.$t("report.status-title")},{field:"report_at",label:this.$t("report.time"),globalSearchDisabled:!0}]}},mounted(){this.fetchData()},methods:{fetchData(){var t,e=this;return(t=function*(){e.reports=yield e.$http.get("/user/report-list")},function(){var e=this,a=arguments;return new Promise(function(n,s){var r=t.apply(e,a);function l(t){o(r,n,s,l,i,"next",t)}function i(t){o(r,n,s,l,i,"throw",t)}l(void 0)})})()}}},i=a(66),d=Object(i.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content"},[a("vue-good-table",{attrs:{rows:t.reports,columns:t.columns,"search-options":t.tableOptions.search,"pagination-options":t.tableOptions.pagination,"style-class":"vgt-table striped"},scopedSlots:t._u([{key:"table-row",fn:function(e){return["tid"===e.column.field?a("span",[t._v("\n        "+t._s(e.formattedRow[e.column.field])+"\n        "),a("a",{attrs:{href:t.baseUrl+"/skinlib/show/"+e.row.tid}},[a("i",{staticClass:"fa fa-share"})])]):"status"===e.column.field?a("span",[t._v("\n        "+t._s(t.$t("report.status."+e.row.status))+"\n      ")]):a("span",[t._v("\n        "+t._s(e.formattedRow[e.column.field])+"\n      ")])]}}])})],1)},[],!1,null,null,null);e.default=d.exports},67:function(t,e,a){"use strict";var n=a(0),s=a(2);e.a=n.default.extend({mounted(){s.a("mounted",{el:this.$root.$options.el})}})},76:function(t,e,a){"use strict";var n=a(0);e.a=n.default.extend({data(){return{tableOptions:{search:{enabled:!0,placeholder:this.$t("vendor.datatable.search")},pagination:{enabled:!0,nextLabel:this.$t("vendor.datatable.next"),prevLabel:this.$t("vendor.datatable.prev"),rowsPerPageLabel:this.$t("vendor.datatable.rowsPerPage"),allLabel:this.$t("vendor.datatable.all"),ofLabel:this.$t("vendor.datatable.of")}}}}})}}]);