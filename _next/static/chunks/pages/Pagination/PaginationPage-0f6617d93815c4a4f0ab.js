_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[41],{"6wrC":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Pagination/PaginationPage",function(){return t("qIvM")}])},KeDb:function(e,n,t){"use strict";var r=t("x3oR"),a=t("pONU");n.__esModule=!0,n.default=void 0;var i,o=a(t("ERkP")),s=t("L9lV"),l=t("7xIC"),c=new Map,u=window.IntersectionObserver,g={};var p=function(e,n){var t=i||(u?i=new u((function(e){e.forEach((function(e){if(c.has(e.target)){var n=c.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),c.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),c.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}c.delete(e)}):function(){}};function m(e,n,t,r){(0,s.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),g[n+"%"+t]=!0)}var f=function(e){var n=!1!==e.prefetch,t=o.default.useState(),a=r(t,2),i=a[0],c=a[1],f=(0,l.useRouter)(),d=f&&f.pathname||"/",h=o.default.useMemo((function(){var n=(0,s.resolveHref)(d,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,s.resolveHref)(d,e.as):i||a}}),[d,e.href,e.as]),y=h.href,v=h.as;o.default.useEffect((function(){if(n&&u&&i&&i.tagName&&(0,s.isLocalURL)(y)&&!g[y+"%"+v])return p(i,(function(){m(f,y,v)}))}),[n,i,y,v,f]);var P=e.children,b=e.replace,w=e.shallow,I=e.scroll;"string"===typeof P&&(P=o.default.createElement("a",null,P));var M=o.Children.only(P),E={ref:function(e){e&&c(e),M&&"object"===typeof M&&M.ref&&("function"===typeof M.ref?M.ref(e):"object"===typeof M.ref&&(M.ref.current=e))},onClick:function(e){M.props&&"function"===typeof M.props.onClick&&M.props.onClick(e),e.defaultPrevented||function(e,n,t,r,a,i,o){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,s.isLocalURL)(t))&&(e.preventDefault(),null==o&&(o=r.indexOf("#")<0),n[a?"replace":"push"](t,r,{shallow:i}).then((function(e){e&&o&&(window.scrollTo(0,0),document.body.focus())})))}(e,f,y,v,b,w,I)}};return n&&(E.onMouseEnter=function(e){(0,s.isLocalURL)(y)&&(M.props&&"function"===typeof M.props.onMouseEnter&&M.props.onMouseEnter(e),m(f,y,v,{priority:!0}))}),(e.passHref||"a"===M.type&&!("href"in M.props))&&(E.href=(0,s.addBasePath)(v)),o.default.cloneElement(M,E)};n.default=f},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("Fhg5"),a=t("jvFD"),i=t.n(a),o=t("ERkP"),s=t.n(o).a.createElement;function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var c=function(e){var n=e.as,t=e.children,a=e.href;return s(i.a,{href:a,as:l(n),passHref:!0},"string"===typeof t?s(r.a,null,t):t)}},akZe:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("cxan"),a=t("ERkP"),i=t.n(a),o=t("R5dR"),s=t("nFRM"),l=i.a.createElement,c=[{name:"margin",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the margin to be applied."},{name:"marginTop",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top margin to be applied."},{name:"marginRight",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the right margin to be applied."},{name:"marginBottom",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the bottom margin to be applied."},{name:"marginLeft",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left margin to be applied."},{name:"marginVertical",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the top and bottom margin to be applied."},{name:"marginHorizontal",types:l(o.a,{href:"/Margin/MarginPage",as:"/margin"},"Margin"),description:"Determines the left and right margin to be applied."}],u=function(e){return l(s.a,Object(r.a)({title:"Margin",propList:c},e))}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return p}));var r=t("lebv"),a=t("XPf/"),i=t("BtTX"),o=t("ERkP"),s=t.n(o),l=t("ZUh6"),c=t("j/s1"),u=Object(c.e)(l.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),g=s.a.createElement,p=function(e){var n=e.children,t=e.title,s=Object(o.useState)(!0),l=s[0],c=s[1],p=function(){return c(!l)};return g("div",null,g(u,{marginBottom:"xLarge",alignItems:"center",onClick:p,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||p()},tabIndex:0},l?g(a.a,{title:"Expand"}):g(i.a,{title:"Collapse"}),g(r.m,null,t)),!l&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t("ERkP"),a=t.n(r),i=t("j/s1"),o=i.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(i.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(i.d)(["color:",";"],t.colors.primary70)})),s=a.a.createElement,l=function(e){return s(o,e)};l.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return g}));var r=t("yGqs"),a=t("lebv"),i=t("Fhg5"),o=t("ERkP"),s=t.n(o),l=t("lIm4"),c=t("c2K2"),u=s.a.createElement,g=function(e){var n=e.collapsible,t=e.id,i=e.propList,o=e.title,g=function(){return u(r.b,{marginBottom:"xLarge"},u(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return u(s.a.Fragment,null,u(l.a,{primary:!0},n),t?u("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return u(p,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return u(l.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return u(a.m,null,n)}}],items:i}),u(a.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?u(c.a,{title:"".concat(o," Props")},g()):u(s.a.Fragment,null,u(a.c,{id:t},o),g())},p=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return u(s.a.Fragment,{key:e},e.type===i.a?u(l.a,{highlight:!1},e):u(l.a,null,e),t<n.length-1?" | ":null)})):n.type===i.a?u(l.a,{highlight:!1},n):u(l.a,null,n)}},qIvM:function(e,n,t){"use strict";t.r(n);var r=t("lebv"),a=t("ERkP"),i=t.n(a),o=t("GsAr"),s=t("cxan"),l=t("nFRM"),c=i.a.createElement,u=[{name:"itemsPerPage",types:"number",required:!0,description:"Indicates how many items are displayed per page."},{name:"currentPage",types:"number",required:!0,description:"Indicates the page currently/initially displayed."},{name:"totalItems",types:"number",required:!0,description:"Indicates how many items in total will be displayed."},{name:"itemsPerPageOptions",types:"number[]",required:!0,description:"Indicates options for per-page ranges."},{name:"onPageChange",types:"(page: number) => void",required:!0,description:"Function that will be called when a navigation arrow is clicked."},{name:"onItemsPerPageChange",types:"(range: number) => void",required:!0,description:"Function that will be called when a new per-page range is selected."}],g=function(e){return c(l.a,Object(s.a)({title:"Pagination",propList:u},e))},p=t("akZe"),m=i.a.createElement;n.default=function(){return m(i.a.Fragment,null,m(r.a,null,"Pagination"),m(r.m,null,"Pagination allows for navigation through pages of content."," "),m(o.a,null,"function ExampleList() {\n  const [items] = useState(['Item1', 'Item2', 'Item3', 'Item 4', 'Item 5']);\n  const [ranges] = useState([2, 3, 4]);\n  const [range, setRange] = useState(ranges[0]);\n  const [page, setPage] = useState(1);\n  const [currentItems, setCurrentItems] = useState(['']);\n\n  const onItemsPerPageChange = (newRange) => {\n    setPage(1);\n    setRange(newRange);\n  };\n\n  useEffect(() => {\n    const maxItems = page * range;\n    const lastItem = Math.min(maxItems, items.length);\n    const firstItem = Math.max(0, maxItems - range);\n\n    setCurrentItems(items.slice(firstItem, lastItem));\n  }, [page, items, range]);\n\n  return (\n    <>\n      <Pagination\n        currentPage={page}\n        itemsPerPage={range}\n        itemsPerPageOptions={ranges}\n        totalItems={items.length}\n        onPageChange={(newPage) => setPage(newPage)}\n        onItemsPerPageChange={onItemsPerPageChange}\n      />\n      <ul>\n        {currentItems.map((item) => (\n          <li key={item}>{item}</li>\n        ))}\n      </ul>\n    </>\n  );\n}"),m(r.b,null,"API"),m(g,null),m(r.c,null,"Inherited Props"),m(p.a,{collapsible:!0}))}}},[["6wrC",0,1,4,7,10,8,9,3,2,6,5,11,12]]]);