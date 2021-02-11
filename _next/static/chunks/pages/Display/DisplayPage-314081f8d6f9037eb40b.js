_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"2HG5":function(e,n,t){"use strict";t.r(n);var r=t("lebv"),o=t("ERkP"),a=t.n(o),i=t("lIm4"),l=t("GsAr"),c=t("R5dR"),u=t("tGwT"),s=a.a.createElement;n.default=function(){return s(a.a.Fragment,null,s(r.a,null,"Display"),s(r.m,null,"A few of our components expose a ",s(i.a,{primary:!0},"display")," prop in order to change the CSS display property."),s(l.a,null,'<Box display="inline-block" backgroundColor="secondary20" border="box" padding="medium">\n  Boxed content\n</Box>'),s(r.m,null,"It's also possible to use the prop with responsive"," ",s(c.a,{href:"/Breakpoints/BreakpointsPage",as:"/breakpoints"},"breakpoints"),":"),s(l.a,null,'<>\n  <Box\n    display={{ mobile: \'none\', tablet: \'inline-block\' }}\n    backgroundColor="secondary20"\n    border="box"\n    padding="medium"\n  >\n    Boxed content hidden on mobile.\n  </Box>\n  <Box display={{ mobile: \'block\', tablet: \'none\' }} backgroundColor="primary10" border="box" padding="medium">\n    Boxed content hidden on tablet.\n  </Box>\n</>'),s(u.a,null))}},"53v8":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Display/DisplayPage",function(){return t("2HG5")}])},KeDb:function(e,n,t){"use strict";var r=t("x3oR"),o=t("pONU");n.__esModule=!0,n.default=void 0;var a,i=o(t("ERkP")),l=t("L9lV"),c=t("7xIC"),u=new Map,s=window.IntersectionObserver,f={};var d=function(e,n){var t=a||(s?a=new s((function(e){e.forEach((function(e){if(u.has(e.target)){var n=u.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(e.target),u.delete(e.target),n())}}))}),{rootMargin:"200px"}):void 0);return t?(t.observe(e),u.set(e,n),function(){try{t.unobserve(e)}catch(n){console.error(n)}u.delete(e)}):function(){}};function p(e,n,t,r){(0,l.isLocalURL)(n)&&(e.prefetch(n,t,r).catch((function(e){0})),f[n+"%"+t]=!0)}var h=function(e){var n=!1!==e.prefetch,t=i.default.useState(),o=r(t,2),a=o[0],u=o[1],h=(0,c.useRouter)(),m=h&&h.pathname||"/",y=i.default.useMemo((function(){var n=(0,l.resolveHref)(m,e.href,!0),t=r(n,2),o=t[0],a=t[1];return{href:o,as:e.as?(0,l.resolveHref)(m,e.as):a||o}}),[m,e.href,e.as]),g=y.href,v=y.as;i.default.useEffect((function(){if(n&&s&&a&&a.tagName&&(0,l.isLocalURL)(g)&&!f[g+"%"+v])return d(a,(function(){p(h,g,v)}))}),[n,a,g,v,h]);var b=e.children,x=e.replace,k=e.shallow,w=e.scroll;"string"===typeof b&&(b=i.default.createElement("a",null,b));var E=i.Children.only(b),R={ref:function(e){e&&u(e),E&&"object"===typeof E&&E.ref&&("function"===typeof E.ref?E.ref(e):"object"===typeof E.ref&&(E.ref.current=e))},onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,h,g,v,x,k,w)}};return n&&(R.onMouseEnter=function(e){(0,l.isLocalURL)(g)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),p(h,g,v,{priority:!0}))}),(e.passHref||"a"===E.type&&!("href"in E.props))&&(R.href=(0,l.addBasePath)(v)),i.default.cloneElement(E,R)};n.default=h},R5dR:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("Fhg5"),o=t("jvFD"),a=t.n(o),i=t("ERkP"),l=t.n(i).a.createElement;function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n="/big-design";return n+e}}var u=function(e){var n=e.as,t=e.children,o=e.href;return l(a.a,{href:o,as:c(n),passHref:!0},"string"===typeof t?l(r.a,null,t):t)}},c2K2:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var r=t("lebv"),o=t("XPf/"),a=t("BtTX"),i=t("ERkP"),l=t.n(i),c=t("ZUh6"),u=t("j/s1"),s=Object(u.e)(c.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),f=l.a.createElement,d=function(e){var n=e.children,t=e.title,l=Object(i.useState)(!0),c=l[0],u=l[1],d=function(){return u(!c)};return f("div",null,f(s,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},c?f(o.a,{title:"Expand"}):f(a.a,{title:"Collapse"}),f(r.m,null,t)),!c&&n)}},jvFD:function(e,n,t){e.exports=t("KeDb")},lIm4:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t("ERkP"),o=t.n(r),a=t("j/s1"),i=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,t=e.primary,r=e.theme;return n&&!t&&Object(a.d)(["background-color:",";padding:",";"],r.colors.warning10,r.spacing.xxSmall)}),(function(e){var n=e.primary,t=e.theme;return n&&Object(a.d)(["color:",";"],t.colors.primary70)})),l=o.a.createElement,c=function(e){return l(i,e)};c.defaultProps={highlight:!0}},nFRM:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t("yGqs"),o=t("lebv"),a=t("Fhg5"),i=t("ERkP"),l=t.n(i),c=t("lIm4"),u=t("c2K2"),s=l.a.createElement,f=function(e){var n=e.collapsible,t=e.id,a=e.propList,i=e.title,f=function(){return s(r.b,{marginBottom:"xLarge"},s(r.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,t=e.required;return s(l.a.Fragment,null,s(c.a,{primary:!0},n),t?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(d,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(c.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(o.m,null,n)}}],items:a}),s(o.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(u.a,{title:"".concat(i," Props")},f()):s(l.a.Fragment,null,s(o.c,{id:t},i),f())},d=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,t){return s(l.a.Fragment,{key:e},e.type===a.a?s(c.a,{highlight:!1},e):s(c.a,null,e),t<n.length-1?" | ":null)})):n.type===a.a?s(c.a,{highlight:!1},n):s(c.a,null,n)}},tGwT:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t("cxan"),o=t("ERkP"),a=t.n(o),i=t("nFRM"),l=a.a.createElement,c=[{name:"display",types:["block","inline-block","inline","inline-flex","flex","grid","inline-grid","none"],description:"Sets the CSS display property of a component."}],u=function(e){return l(i.a,Object(r.a)({title:"Display",propList:c},e))}}},[["53v8",0,1,4,7,10,8,9,3,2,6,5,11,12]]]);