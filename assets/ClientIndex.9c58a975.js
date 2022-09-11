import{Q as P}from"./QInnerLoading.e500c865.js";import{Y as B,r as I,w as L,aE as V,H as s,I as u,J as e,K as a,a0 as o,aF as z,A as g,L as d,a5 as E,a9 as S,a1 as A,a2 as n,M as b,a8 as F,$ as _}from"./index.0c1b9320.js";import{Q as T,a as D}from"./QSelect.7759fa6b.js";import{Q as c}from"./QTd.ae6a459c.js";import{Q as q}from"./QBadge.eab045ac.js";import{Q as H}from"./QTable.2b218a80.js";import{n as J}from"./NotifyHelper.aabcb271.js";import{u as K}from"./usePaginatedResourceListing.ce68d7c3.js";import{C as M}from"./ClientService.8acab992.js";import"./QMenu.795138f0.js";import"./QList.7d15dc0d.js";const O={class:"q-pa-lg"},R=b(" Sem pets registrados "),U={class:"flex"},se=B({__name:"ClientIndex",async setup(Y){let i,m;const r=I(null);L(r,async()=>await y());const h=[{name:"name",label:"Nome",align:"left",field:"name",sortable:!1},{name:"email",label:"Email",field:"email",align:"left",sortable:!1},{name:"phone",label:"Contato",field:"phone",align:"left",sortable:!1},{name:"pets",align:"left",label:"Pets",field:"pets",sortable:!1},{name:"options",align:"left",label:"Op\xE7\xF5es",field:"options",sortable:!1,headerStyle:"width: 230px"}],{fetchData:y,fetchNextPage:x,fetchPreviousPage:w,hasPreviousPage:Q,hasNextPage:v,data:C,isLoading:k}=([i,m]=V(async()=>K(async l=>await M.list({cursor:l,include:["pets","pets.breed"],name:r.value}),l=>J(l.response&&l.response.data.message))),i=await i,m(),i);return(l,p)=>(s(),u("div",O,[e(H,{title:"Clientes","row-key":"name",rows:o(C),columns:h,loading:o(k),"rows-per-page-options":[0]},{loading:a(()=>[e(P,{showing:"",color:"primary"})]),"top-right":a(()=>[e(z,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=t=>r.value=t),placeholder:"Nome do cliente",debounce:300},{append:a(()=>[e(g,{name:"search"})]),_:1},8,["modelValue"])]),"body-cell-pets":a(({row:t})=>[t.pets.length?(s(),d(c,{key:0},{default:a(()=>[(s(!0),u(E,null,S(t.pets,(f,N)=>(s(),d(D,{key:N,color:"blue","text-color":"white",size:"sm"},{default:a(()=>[e(F,{icon:"pets"}),b(" "+_(f.name)+", "+_(f.breed.name),1)]),_:2},1024))),128))]),_:2},1024)):(s(),d(c,{key:1,class:"text-left"},{default:a(()=>[e(T,{caption:""},{default:a(()=>[e(q,{color:"yellow-6","text-color":"black",rounded:""},{default:a(()=>[e(g,{name:"warning"}),R]),_:1})]),_:1})]),_:1}))]),"body-cell-options":a(({row:t})=>[e(c,{id:t.id},{default:a(()=>[A("div",U,[e(n,{color:"primary",size:"xs",icon:"visibility"}),e(n,{color:"warning",size:"xs",icon:"edit"}),e(n,{color:"red",size:"xs",icon:"delete"})])]),_:2},1032,["id"])]),pagination:a(()=>[e(n,{icon:"chevron_left",color:"grey-8",round:"",dense:"",flat:"",disable:!o(Q),onClick:o(w)},null,8,["disable","onClick"]),e(n,{icon:"chevron_right",color:"grey-8",round:"",dense:"",flat:"",disable:!o(v),onClick:o(x)},null,8,["disable","onClick"])]),_:1},8,["rows","loading"])]))}});export{se as default};
