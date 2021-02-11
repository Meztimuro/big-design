_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{XWwo:function(e,n,r){"use strict";r.r(n);var t=r("lebv"),l=r("Fhg5"),a=r("ERkP"),o=r.n(a),i=r("lIm4"),u=r("GsAr"),p=r("cxan"),s=r("nFRM"),c=o.a.createElement,d=function(e){var n=e.id;return c(o.a.Fragment,null,c(t.c,{id:n},"FormControlError"),c(t.m,null,"Supports all native ",c(i.a,null,"<p />")," element attributes."))},m=[{name:"fullWidth",types:"boolean",defaultValue:"false",description:"Sets the form width to 100%"}],h=[{name:"description",types:["string","FieldsetDescription"],description:"Pass in a description to display in the fieldset. Will render nothing if not the correct type."},{name:"legend",types:["string","FieldsetLegend"],description:"Pass in a legend to display in the fieldset. Will render nothing if not the correct type."}],g=function(e){return c(s.a,Object(p.a)({title:"Fieldset",propList:h},e))},b=function(e){var n=e.id;return c(o.a.Fragment,null,c(t.c,{id:n},"FormControlLabel"),c(t.m,null,"Supports all native ",c(i.a,null,"<label />")," element attributes."))},F=function(e){var n=e.id;return c(o.a.Fragment,null,c(t.c,{id:n},"FormControlDescription"),c(t.m,null,"Supports all native ",c(i.a,null,"<p />")," element attributes."))},f=[{name:"errors",types:["React.ReactChild","React.ReactChild[]"],description:"Pass error(s) into the form group to override child input errors."}],y=function(e){return c(o.a.Fragment,null,c(t.m,null,"Supports all native ",c(i.a,null,"<form />")," element attributes."),c(s.a,Object(p.a)({title:"Form",propList:m},e)))},v=function(e){return c(s.a,Object(p.a)({title:"FormGroup",propList:f},e))},x=o.a.createElement;n.default=function(){return x(o.a.Fragment,null,x(t.a,null,"Forms"),x(t.m,null,"Form fields are essential to any website or web application. ",x(i.a,null,"id"),"'s' will be auto-generated for input/textarea and labels ",x(i.a,null,"for")," attribute, unless manually specifying one."," ",x(l.a,{href:"https://design.bigcommerce.com/components/forms",target:"_blank"},"Form Fields Design Guidelines"),"."),x(u.a,null,'<Form>\n  <FormGroup>\n    <Input\n      label="Email"\n      type="email"\n      description="Please provide a valid email address."\n      placeholder="Email address"\n    />\n  </FormGroup>\n  <FormGroup>\n    <Input label="Password" type="password" placeholder="Password" />\n  </FormGroup>\n  <Box marginTop="xxLarge">\n    <Button>Sign In</Button>\n  </Box>\n</Form>'),x(t.b,null,"API"),x(y,null),x(d,{id:"error"}),x(b,{id:"label"}),x(F,{id:"label"}),x(v,null),x(g,null),x(t.b,null,"Input Types"),x(t.m,null,"BigDesign comes with various input types: ",x(i.a,null,"Input"),", ",x(i.a,null,"Checkbox"),", ",x(i.a,null,"Radio"),","," ",x(i.a,null,"Select"),", and ",x(i.a,null,"Textarea"),"."),x(u.a,null,'<Form>\n  <FormGroup>\n    <Input label="Example Input" placeholder="Example" />\n  </FormGroup>\n  <FormGroup>\n    <Checkbox checked={true} onChange={() => null} label="Example Checkbox" />\n  </FormGroup>\n  <FormGroup>\n    <Radio checked={true} onChange={() => null} label="Example Radio" />\n  </FormGroup>\n  <FormGroup>\n    <Select\n      label="Example Select"\n      onOptionChange={() => null}\n      options={[\n        { value: 1, content: \'Option\' },\n        { value: 2, content: \'Option\' },\n        { value: 3, content: \'Option\' },\n        { value: 4, content: \'Option\' },\n      ]}\n      placeholder="Example"\n    />\n  </FormGroup>\n  <FormGroup>\n    <Textarea label="Example Textarea" placeholder="Example" />\n  </FormGroup>\n</Form>'),x(t.b,null,"Layout"),x(t.m,null,"You can up to 3 ",x(i.a,null,"Input")," components in row to add more dimension to a ",x(i.a,null,"FormGroup"),"."," ",x(i.a,null,"Radio")," and ",x(i.a,null,"Checkbox")," components will never display inline inside a ",x(i.a,null,"FormGroup"),"."),x(u.a,null,'<Form>\n  <FormGroup>\n    <Input label="Company" placeholder="BigCommerce" required />\n  </FormGroup>\n  <FormGroup>\n    <Input label="First Name" placeholder="John" required />\n    <Input label="Last Name" placeholder="Doe" required />\n  </FormGroup>\n  <FormGroup>\n    <Input label="City" placeholder="Austin" required />\n    <Input label="State" placeholder="Texas" required />\n    <Input label="Postal Code" placeholder="78726" required />\n  </FormGroup>\n  <Fieldset legend="Shipping Method">\n    <FormGroup>\n      <Radio label="Free \u2013 Three Day Shipping" checked onChange={() => null} />\n      <Radio label="$4.99 \u2013 Two Day Shipping" />\n      <Radio label="$9.99 \u2013 One Day Shipping" />\n    </FormGroup>\n  </Fieldset>\n</Form>'),x(t.b,null,"Validation"),x(t.m,null,"All form controls are tied to ",x(i.a,{primary:!0},"onChange")," or equivalent event handlers. Validation messages can be passed through the ",x(i.a,null,"error")," prop. All input errors in an ",x(i.a,null,"FormGroup")," will appear at the bottom of the group component component."),x(u.a,null,'function Example() {\n  const ERROR_MSG = \'Must be less than or equal to 3 characters long.\';\n\n  const [value, setValue] = useState(\'BigCommerce\');\n  const [error, setError] = useState(ERROR_MSG);\n\n  const handleSubmit = (event) => {\n    const form = event.currentTarget;\n\n    if (form.checkValidity() === false) {\n      event.preventDefault();\n      event.stopPropagation();\n    }\n  };\n\n  const handleChange = (event) => {\n    const { target } = event;\n    const regex = RegExp(target.pattern, \'g\');\n\n    regex.test(target.value) ? setError(\'\') : setError(ERROR_MSG);\n\n    setValue(target.value);\n  };\n\n  return (\n    <Form onSubmit={handleSubmit}>\n      <FormGroup>\n        <Input\n          label="Example"\n          description="Remove characters to preview validation."\n          value={value}\n          error={error}\n          onChange={handleChange}\n          pattern="^.{1,3}$"\n          required\n        />\n      </FormGroup>\n      <FormGroup>\n        <Input label="City" error="You must enter a valid City." placeholder="Austin" required />\n        <Input label="State" placeholder="Texas" required />\n        <Input label="Postal Code" error="You must enter a valid Postal Code." placeholder="78726" required />\n      </FormGroup>\n    </Form>\n  );\n}'))}},c2K2:function(e,n,r){"use strict";r.d(n,"a",(function(){return d}));var t=r("lebv"),l=r("XPf/"),a=r("BtTX"),o=r("ERkP"),i=r.n(o),u=r("ZUh6"),p=r("j/s1"),s=Object(p.e)(u.a).withConfig({displayName:"styled__StyledFlex",componentId:"sc-14v4ikn-0"})(["cursor:pointer;display:inline-flex;flex-direction:row;"]),c=i.a.createElement,d=function(e){var n=e.children,r=e.title,i=Object(o.useState)(!0),u=i[0],p=i[1],d=function(){return p(!u)};return c("div",null,c(s,{marginBottom:"xLarge",alignItems:"center",onClick:d,onKeyPress:function(e){"Enter"!==e.key&&" "!==e.key||d()},tabIndex:0},u?c(l.a,{title:"Expand"}):c(a.a,{title:"Collapse"}),c(t.m,null,r)),!u&&n)}},lIm4:function(e,n,r){"use strict";r.d(n,"a",(function(){return u}));var t=r("ERkP"),l=r.n(t),a=r("j/s1"),o=a.e.code.withConfig({displayName:"styled__StyledCode",componentId:"sc-1xz1scc-0"})(["color:",";",";",";"],(function(e){return e.theme.colors.secondary70}),(function(e){var n=e.highlight,r=e.primary,t=e.theme;return n&&!r&&Object(a.d)(["background-color:",";padding:",";"],t.colors.warning10,t.spacing.xxSmall)}),(function(e){var n=e.primary,r=e.theme;return n&&Object(a.d)(["color:",";"],r.colors.primary70)})),i=l.a.createElement,u=function(e){return i(o,e)};u.defaultProps={highlight:!0}},nFRM:function(e,n,r){"use strict";r.d(n,"a",(function(){return c}));var t=r("yGqs"),l=r("lebv"),a=r("Fhg5"),o=r("ERkP"),i=r.n(o),u=r("lIm4"),p=r("c2K2"),s=i.a.createElement,c=function(e){var n=e.collapsible,r=e.id,a=e.propList,o=e.title,c=function(){return s(t.b,{marginBottom:"xLarge"},s(t.a,{columns:[{header:"Prop Name",hash:"propName",render:function(e){var n=e.name,r=e.required;return s(i.a.Fragment,null,s(u.a,{primary:!0},n),r?s("b",null," *"):null)}},{header:"Type",hash:"type",render:function(e){var n=e.types;return s(d,{types:n})}},{header:"Default",hash:"default",render:function(e){var n=e.defaultValue;return s(u.a,{highlight:!1},n)}},{header:"Description",hash:"description",width:"50%",render:function(e){var n=e.description;return s(l.m,null,n)}}],items:a}),s(l.g,{marginTop:"xSmall"},"Props ending with * are required"))};return n?s(p.a,{title:"".concat(o," Props")},c()):s(i.a.Fragment,null,s(l.c,{id:r},o),c())},d=function(e){var n=e.types;return Array.isArray(n)?n.map((function(e,r){return s(i.a.Fragment,{key:e},e.type===a.a?s(u.a,{highlight:!1},e):s(u.a,null,e),r<n.length-1?" | ":null)})):n.type===a.a?s(u.a,{highlight:!1},n):s(u.a,null,n)}},ybwp:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/Form/FormPage",function(){return r("XWwo")}])}},[["ybwp",0,1,4,7,10,8,9,3,2,6,5,11]]]);