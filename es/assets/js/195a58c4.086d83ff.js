"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1024],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>f});var t=a(67294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=o,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||r;return a?t.createElement(f,i(i({ref:n},d),{},{components:a})):t.createElement(f,i({ref:n},d))}));function f(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},48051:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var t=a(87462),o=(a(67294),a(3905));const r=a.p+"assets/images/chain_of_thought_example-37c925a2720c9c4bb4c823d237bc72c8.png",i=a.p+"assets/images/prompted_palm-20fba06418ed8569b51f0dd376c03b41.png",s={sidebar_position:3,locale:"en-us",style:"chicago"},l="\ud83d\udfe2 Cadena de pensamiento",c={unversionedId:"intermediate/chain_of_thought",id:"intermediate/chain_of_thought",title:"\ud83d\udfe2 Cadena de pensamiento",description:'El Encadenamiento de pensamiento (CoT, por sus siglas en ingl\xe9s "Chain of Thought") (@wei2022chain) es un m\xe9todo de indicaciones que se desarroll\xf3 recientemente y que alienta al LLM a explicar su razonamiento. La imagen a continuaci\xf3n (@wei2022chain) muestra una indicaci\xf3n est\xe1ndar de "pocos ejemplos" (izquierda) en comparaci\xf3n con una indicaci\xf3n de encadenamiento de pensamiento (derecha).',source:"@site/i18n/es/docusaurus-plugin-content-docs/current/intermediate/chain_of_thought.md",sourceDirName:"intermediate",slug:"/intermediate/chain_of_thought",permalink:"/es/docs/intermediate/chain_of_thought",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.2/docs/intermediate/chain_of_thought.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,locale:"en-us",style:"chicago"},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddd9\u200d\u2642\ufe0f Intermediate",permalink:"/es/docs/category/\ufe0f-intermediate"},next:{title:"\ud83d\udfe2 Zero Shot Chain of Thought",permalink:"/es/docs/intermediate/zero_shot_cot"}},d={},m=[{value:"Ejemplo",id:"ejemplo",level:2},{value:"Incorrecto",id:"incorrecto",level:4},{value:"Correcto",id:"correcto",level:4},{value:"Resultados",id:"resultados",level:2},{value:"Limitaciones",id:"limitaciones",level:2},{value:"Notas",id:"notas",level:2}],u={toc:m},p="wrapper";function f(e){let{components:n,...a}=e;return(0,o.kt)(p,(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-cadena-de-pensamiento"},"\ud83d\udfe2 Cadena de pensamiento"),(0,o.kt)("p",null,'El Encadenamiento de pensamiento (CoT, por sus siglas en ingl\xe9s "Chain of Thought")',(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," es un m\xe9todo de indicaciones que se desarroll\xf3 recientemente y que alienta al LLM a explicar su razonamiento. La imagen a continuaci\xf3n",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),' muestra una indicaci\xf3n est\xe1ndar de "pocos ejemplos" (izquierda) en comparaci\xf3n con una indicaci\xf3n de encadenamiento de pensamiento (derecha).'),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:r,style:{width:"750px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"Indicaci\xf3n est\xe1ndar vs. CoT (Wei et al.)"),(0,o.kt)("p",null,"La idea principal de CoT es que, al mostrarle al LLM algunos %%ejemplos|ejemplos%% con pocos disparos en los que se explica el proceso de razonamiento, el LLM tambi\xe9n mostrar\xe1 el proceso de razonamiento al responder la indicaci\xf3n. Esta explicaci\xf3n del razonamiento a menudo conduce a resultados m\xe1s precisos."),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("p",null,"Aqu\xed hay algunas demostraciones. La primera muestra que GPT-3 (davinci-003) no puede resolver un problema de palabras simple. La segunda muestra que GPT-3 (davinci-003) resuelve con \xe9xito el mismo problema utilizando la indicaci\xf3n de CoT."),(0,o.kt)("h4",{id:"incorrecto"},"Incorrecto"),(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"\xbfCu\xe1l es la forma m\xe1s r\xe1pida de llegar al trabajo?\\nOpci\xf3n 1: Tomar un autob\xfas de 1000 minutos, luego un tren de media hora y finalmente un paseo en bicicleta de 10 minutos.\\nOpci\xf3n 2: Tomar un autob\xfas de 800 minutos, luego un tren de una hora y finalmente un paseo en bicicleta de 30 minutos.","initial-response":"La opci\xf3n 1 es una forma m\xe1s r\xe1pida de llegar al trabajo.","max-tokens":"256","box-rows":"7","model-temp":"0","top-p":"0"}),(0,o.kt)("h4",{id:"correcto"},"Correcto"),(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"\xbfCu\xe1l es la forma m\xe1s r\xe1pida de llegar a casa?\\nOption 1: Tomar un autob\xfas de 10 minutos, luego un autob\xfas de 40 minutos y finalmente un tren de 10 minutos.\\nOption 2: Tomar un tren de 90 minutos, luego un paseo en bicicleta de 45 minutos y finalmente un autob\xfas de 10 minutos.\\nOption 1: tomar\xe1 10+40+10=60 minutos.\\nOption 2: tomar\xe1 90+45+10=145 minutos.\\nSince Dado que la opci\xf3n 1 tarda 60 minutos y la opci\xf3n 2 tarda 145 minutos, la opci\xf3n 1 es m\xe1s r\xe1pida.\\n\\n\xbfCu\xe1l es la forma m\xe1s r\xe1pida de llegar al trabajo? \\nOption 1: Tomar un autob\xfas de 1000 minutos, luego un tren de media hora y finalmente un paseo en bicicleta de 10 minutos. \\nOption 2: Tomar un autob\xfas de 800 minutos, luego un tren de una hora y finalmente un paseo en bicicleta de 30 minutos.","initial-response":"La opci\xf3n 1 tomar\xe1 1000+30+10=1040 minutos.\nLa opci\xf3n 2 tomar\xe1 800+60+30=890 minutos.\nDado que la opci\xf3n 2 tarda 890 minutos y la opci\xf3n 1 tarda 1040 minutos, la opci\xf3n 2 es m\xe1s r\xe1pida.","max-tokens":"256","box-rows":"18","model-temp":"0","top-p":"0"}),(0,o.kt)("h2",{id:"resultados"},"Resultados"),(0,o.kt)("p",null,"Se ha demostrado que CoT es efectivo para mejorar los resultados en tareas como\naritm\xe9tica, sentido com\xfan y tareas de razonamiento simb\xf3lico",(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),".\nEn particular, prompted PaLM 540B",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2"))," alcanza una precisi\xf3n de\ntasa de resoluci\xf3n del 57% en GSM8K",(0,o.kt)("sup",{parentName:"p",id:"fnref-3"},(0,o.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3"))," (SOTA en ese momento)."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"300px"}})),(0,o.kt)("div",{style:{textAlign:"center"}},"Comparaci\xf3n de modelos en la prueba de referencia GSM8K (Wei et al.)"),(0,o.kt)("h2",{id:"limitaciones"},"Limitaciones"),(0,o.kt)("p",null,'Es importante destacar que, seg\xfan Wei et al., "CoT solo produce mejoras en el rendimiento cuando se utiliza con modelos de \u223c100B de par\xe1metros". Modelos m\xe1s peque\xf1os escribieron cadenas de pensamiento il\xf3gicas, lo que llev\xf3 a una precisi\xf3n peor que la de la prueba est\xe1ndar. Los modelos suelen obtener mejoras de rendimiento a partir de la sugerencia CoT de manera proporcional al tama\xf1o del modelo.'),(0,o.kt)("h2",{id:"notas"},"Notas"),(0,o.kt)("p",null,"Ning\xfan modelo de lenguaje fue ",(0,o.kt)("del",{parentName:"p"},"da\xf1ado")," afinado en el proceso de escritura de este cap\xedtulo \ud83d\ude0a."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Wei, J., Wang, X., Schuurmans, D., Bosma, M., Ichter, B., Xia, F., Chi, E., Le, Q., & Zhou, D. (2022). Chain of Thought Prompting Elicits Reasoning in Large Language Models.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"Chowdhery, A., Narang, S., Devlin, J., Bosma, M., Mishra, G., Roberts, A., Barham, P., Chung, H. W., Sutton, C., Gehrmann, S., Schuh, P., Shi, K., Tsvyashchenko, S., Maynez, J., Rao, A., Barnes, P., Tay, Y., Shazeer, N., Prabhakaran, V., \u2026 Fiedel, N. (2022). PaLM: Scaling Language Modeling with Pathways.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-3"},"Cobbe, K., Kosaraju, V., Bavarian, M., Chen, M., Jun, H., Kaiser, L., Plappert, M., Tworek, J., Hilton, J., Nakano, R., Hesse, C., & Schulman, J. (2021). Training Verifiers to Solve Math Word Problems.\n",(0,o.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);