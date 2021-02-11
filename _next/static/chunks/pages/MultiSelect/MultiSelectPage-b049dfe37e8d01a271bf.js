_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[39],{BgoY:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/MultiSelect/MultiSelectPage",function(){return t("Clt7")}])},Clt7:function(n,e,t){"use strict";t.r(e);var o=t("lebv"),l=t("Fhg5"),a=t("ERkP"),i=t.n(a),r=t("GsAr"),u=t("lIm4"),c=t("cxan"),p=t("nFRM"),s=i.a.createElement,d=[{name:"action",types:"SelectAction",description:"Action option displayed at the end of the list."},{name:"description",types:"string | FormControlDescription",description:"Append a description to the select field."},{name:"disabled",defaultValue:"false",types:"boolean",description:s(i.a.Fragment,null,"Disables the ",s(u.a,null,"MultiSelect")," component.")},{name:"error",types:"string",description:"Displays a form error around the field."},{name:"filterable",types:"boolean",defaultValue:"true",description:s(i.a.Fragment,null,"Allows you to filter the ",s(u.a,null,"SelectOptions")," in the ",s(u.a,null,"Select"),".")},{name:"inputRef",types:"React.Ref<HTMLInputElement> | React.RefObject<HTMLInputElement>",description:s(i.a.Fragment,null,"The provided ref will be used for the underlying input element used in the ",s(u.a,null,"Select"),".")},{name:"label",types:["string","FormControlLabel"],description:"Adds a label to the field."},{name:"labelId",types:"string",description:"Adds a custom id to the label."},{name:"maxHeight",types:"number",defaultValue:"250",description:s(i.a.Fragment,null,"Sets a ",s(u.a,null,"max-height")," to the dropdown.")},{name:"onOptionsChange",types:"(value: [any], option: [SelectOption]) => void",required:!0,description:"Callback called with value of selected option."},{name:"options",types:"Array<SelectOption> | Array<SelectOptionGroup>",required:!0,description:s(i.a.Fragment,null,"Accepts an array of ",s(u.a,null,"SelectOption")," or an array of ",s(u.a,null,"SelectOptionGroups"),". See example for usage.")},{name:"placement",types:["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],defaultValue:"bottom-start",description:"Determines the location in which the dropdown will be placed."},{name:"positionFixed",defaultValue:"false",types:"boolean",description:s(i.a.Fragment,null,"If set, uses ",s(u.a,null,"position: fixed")," instead of ",s(u.a,null,"position: absolute")," to position the items.")},{name:"required",types:"boolean",description:"Sets the field as required."},{name:"value",types:"[any]",description:s(i.a.Fragment,null,"Modifies the current selected value of the field.")}],m=function(n){return s(p.a,Object(c.a)({title:"MultiSelect",propList:d},n))},h=t("sq9i"),v=i.a.createElement;e.default=function(){return v(i.a.Fragment,null,v(o.a,null,"MultiSelects"),v(o.m,null,"MultiSelect are typeable inputs with multiple selectable dropdown items."," ",v(l.a,{href:"https://design.bigcommerce.com/components/selects",target:"_blank"},"Selects Design Guidelines"),"."),v(r.a,null,"function Example() {\n  const [value, setValue] = useState(['mx']);\n  const handleChange = (val) => setValue(val);\n\n  return (\n    <Form>\n      <FormGroup>\n        <MultiSelect\n          action={{\n            actionType: 'destructive' as 'destructive',\n            content: 'Remove Country',\n            icon: <DeleteIcon />,\n            onActionClick: () => null,\n          }}\n          filterable={true}\n          label=\"Countries\"\n          maxHeight={300}\n          onOptionsChange={handleChange}\n          options={[\n            { value: 'us', content: 'United States' },\n            { value: 'mx', content: 'Mexico' },\n            { value: 'ca', content: 'Canada' },\n            { value: 'en', content: 'England' },\n            { value: 'fr', content: 'France' },\n            { value: 'gr', content: 'Germany' },\n            { value: 'ar', content: 'Argentina' },\n            { value: 'ru', content: 'Russia', disabled: true },\n            { value: 'ch', content: 'Chile' },\n            { value: 'bo', content: 'Bolivia' },\n            { value: 'jp', content: 'Japan' },\n            { value: 'cn', content: 'China' },\n            { value: 'sk', content: 'South Korea' },\n            { value: 'au', content: 'Australia' },\n            { value: 'ug', content: 'Uganda' },\n          ]}\n          placeholder={'Choose country'}\n          placement={'bottom-start'}\n          required\n          value={value}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"),v(o.b,null,"API"),v(m,null),v(h.c,null),v(h.a,null),v(o.b,null,"Examples"),v(o.c,null,"Position"),v(o.m,null,"MultiSelect can be anchored in different directions with the ",v(u.a,{primary:!0},"position")," property. It will automatically find a position if there's not enough space in the chosen direction."),v(r.a,null,"<Grid gridColumns=\"repeat(4, 1fr)\">\n  <MultiSelect\n    label=\"Select\"\n    onOptionsChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from above\"\n    placement=\"top\"\n    required\n  />\n  <MultiSelect\n    label=\"Select\"\n    onOptionsChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from below\"\n    placement=\"bottom-start\"\n    required\n  />\n  <MultiSelect\n    label=\"Select\"\n    onOptionsChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the right\"\n    placement=\"right-start\"\n    required\n  />\n  <MultiSelect\n    label=\"Select\"\n    onOptionsChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n    ]}\n    placeholder=\"Choose from the left\"\n    placement=\"left-end\"\n    required\n  />\n</Grid>"),v(o.c,null,"Max Height"),v(o.m,null,"Once the content is longer than the max-height, the Dropdown will be scrollable. It is possible to modify the dimension by passing a ",v(u.a,{primary:!0},"maxHeight")," property."),v(r.a,null,"<Grid gridColumns=\"repeat(3, 1fr)\">\n  <MultiSelect\n    label=\"Select\"\n    onOptionsChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n    ]}\n    placeholder=\"Default\"\n    required\n  />\n  <MultiSelect\n    label=\"Select\"\n    maxHeight={150}\n    onOptionsChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n    ]}\n    placeholder=\"Smaller\"\n    required\n  />\n  <MultiSelect\n    label=\"Select\"\n    maxHeight={350}\n    onOptionsChange={() => null}\n    options={[\n      { value: 1, content: 'Option' },\n      { value: 2, content: 'Option' },\n      { value: 3, content: 'Option' },\n      { value: 4, content: 'Option' },\n      { value: 5, content: 'Option' },\n      { value: 6, content: 'Option' },\n      { value: 7, content: 'Option' },\n      { value: 8, content: 'Option' },\n      { value: 9, content: 'Option' },\n      { value: 10, content: 'Option' },\n      { value: 11, content: 'Option' },\n      { value: 12, content: 'Option' },\n    ]}\n    placeholder=\"Larger\"\n    required\n  />\n</Grid>"),v(o.c,null,"Disabled"),v(o.m,null,"It is possible to disable the entire select component, similar to how you would disable a native HTML select element, by using the ",v(u.a,{primary:!0},"disabled")," property."),v(r.a,null,"<Form>\n  <FormGroup>\n    <MultiSelect\n      disabled\n      label=\"Select\"\n      maxHeight={350}\n      onOptionsChange={() => null}\n      options={[\n        { value: 1, content: 'Option' },\n        { value: 2, content: 'Option' },\n        { value: 3, content: 'Option' },\n        { value: 4, content: 'Option' },\n      ]}\n      placeholder=\"Larger\"\n      required\n    />\n  </FormGroup>\n</Form>\n"),v(o.b,null,"Action"),v(o.m,null,"Accepts an ",v(u.a,null,"action")," object to display at the end of the list."),v(r.a,null,"<Form>\n  <FormGroup>\n    <MultiSelect\n      action={{\n        actionType: 'destructive',\n        content: 'Remove Country',\n        icon: <DeleteIcon />,\n        onActionClick: () => null,\n      }}\n      label=\"Countries\"\n      onOptionsChange={() => null}\n      options={[\n        { value: 'us', content: 'United States' },\n        { value: 'mx', content: 'Mexico' },\n        { value: 'ca', content: 'Canada' },\n        { value: 'en', content: 'England' },\n      ]}\n      placeholder={'Choose country'}\n      placement={'bottom-start'}\n      required\n    />\n  </FormGroup>\n</Form>"),v(o.c,null,"Error"),v(o.m,null,"An ",v(u.a,null,"error")," prop receives a ",v(u.a,null,"string")," to display."),v(r.a,null,"<Form>\n  <FormGroup>\n    <MultiSelect\n      label=\"Countries\"\n      error=\"Need to choose a country before proceeding\"\n      onOptionsChange={() => null}\n      options={[\n        { value: 'us', content: 'United States' },\n        { value: 'mx', content: 'Mexico' },\n        { value: 'ca', content: 'Canada' },\n        { value: 'en', content: 'England' },\n      ]}\n      placeholder={'Choose country'}\n      placement={'bottom-start'}\n      required\n    />\n  </FormGroup>\n</Form>"),v(o.c,null,"MultiSelect Groups"),v(o.m,null,"It is possible to create grouped options with labels with a ",v(u.a,{primary:!0},"Select Group")," by passing"," ",v(u.a,{primary:!0},"label")," and ",v(u.a,{primary:!0},"options")," to the top-level ",v(u.a,{primary:!0},"options")," ","property."),v(r.a,null,"<Form>\n  <FormGroup>\n    <MultiSelect\n      label=\"My Options\"\n      filterable\n      onOptionsChange={() => null}\n      options={[\n        {\n          label: 'Group 1',\n          options: [\n            { value: 'mx', content: 'Mexico' },\n            { value: 'ca', content: 'Canada' },\n            { value: 'en', content: 'England' },\n          ],\n        },\n        {\n          label: 'Group 2',\n          options: [\n            { value: 'fr', content: 'France' },\n            { value: 'gr', content: 'Germany' },\n            { value: 'ar', content: 'Argentina' },\n          ],\n        },\n      ]}\n    />\n  </FormGroup>\n</Form>"),v(o.c,null,"Option & Action Description"),v(o.m,null,"It is possible to add a description for select options and actions."),v(r.a,null,"function Example() {\n  const [value, setValue] = useState([1]);\n  const handleChange = (val) => setValue(val);\n\n  return (\n    <Form>\n      <FormGroup>\n        <MultiSelect\n          action={{\n            actionType: 'destructive',\n            content: 'Remove',\n            description: 'Description for remove action',\n            icon: <DeleteIcon />,\n            onActionClick: () => null,\n          }}\n          label=\"Select\"\n          onOptionsChange={() => null}\n          options={[\n            { value: 1, content: 'Option #1', description: 'Description for option #1' },\n            {\n              value: 2,\n              content: 'Option #2',\n              description: 'Description for option #2',\n              disabled: true,\n            },\n            { value: 3, content: 'Option #3' },\n            { value: 4, content: 'Option #4' },\n            { value: 5, content: 'Option #5' },\n          ]}\n          onChange={handleChange}\n          placeholder=\"Choose option\"\n          required\n          value={value}\n        />\n      </FormGroup>\n    </Form>\n  );\n}"))}}},[["BgoY",0,1,4,7,10,8,9,3,2,6,5,11,12,14]]]);