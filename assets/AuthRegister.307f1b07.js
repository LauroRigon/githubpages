import{Y as h,bc as g,ah as _,r as y,H as w,I as f,a1 as s,J as t,K as V,a2 as b,bo as x,M as S,Z as N,b8 as U}from"./index.0c1b9320.js";import{A}from"./AuthService.6fbce81a.js";import{n as R}from"./NotifyHelper.aabcb271.js";import{_ as n}from"./BaseInput.91f80f75.js";const q=["onSubmit"],E={class:"row"},j={class:"col"},k={class:"row"},B={class:"col"},O={class:"row"},T={class:"col"},$={class:"row"},C={class:"col"},L={class:"row"},M={class:"col q-mt-sm"},z={class:"row"},F={class:"col q-mt-sm"},H={class:"row q-mt-sm"},I={class:"col"},J=S("Registrar"),K=h({__name:"RegisterForm",props:{code:{type:String,required:!0}},setup(d){const m=d,p=g(),e=_({name:"",email:"",phone:"",company_name:"",password:""}),a=_({email:"",password:"",password_confirmation:"",name:"",phone:"",company_name:"",code:m.code}),i=y(!1);async function v(){var r;const c=N();Object.assign(e,{name:"",email:"",phone:"",company_name:"",password:""}),i.value=!0;try{const o=await A.registerAccount(a);c.setUser(o.user),c.setToken(o.token),await p.push({name:"home"})}catch(o){if(!U.isAxiosError(o))throw o;const l=(r=o.response)==null?void 0:r.data;let u;l!=null&&l.errors&&(u=Object.values(l.errors).flat().join("<br>")),Object.assign(e,l==null?void 0:l.errors),R("N\xE3o foi poss\xEDvel realizar o cadastro",u)}finally{i.value=!1}}return(c,r)=>(w(),f("form",{onSubmit:x(v,["prevent"])},[s("div",E,[s("div",j,[t(n,{modelValue:a.name,"onUpdate:modelValue":r[0]||(r[0]=o=>a.name=o),label:"Nome",type:"text",outlined:"","error-message":e.name?e.name[0]:"",error:!!e.name},null,8,["modelValue","error-message","error"])])]),s("div",k,[s("div",B,[t(n,{modelValue:a.email,"onUpdate:modelValue":r[1]||(r[1]=o=>a.email=o),label:"Email",type:"email",outlined:"","error-message":e.email?e.email[0]:"",error:!!e.email},null,8,["modelValue","error-message","error"])])]),s("div",O,[s("div",T,[t(n,{modelValue:a.phone,"onUpdate:modelValue":r[2]||(r[2]=o=>a.phone=o),label:"Telefone",type:"text",outlined:"","error-message":e.phone?e.phone[0]:"",error:!!e.phone},null,8,["modelValue","error-message","error"])])]),s("div",$,[s("div",C,[t(n,{modelValue:a.company_name,"onUpdate:modelValue":r[3]||(r[3]=o=>a.company_name=o),label:"Nome da sua empresa",type:"text",outlined:"","error-message":e.company_name?e.company_name[0]:"",error:!!e.company_name},null,8,["modelValue","error-message","error"])])]),s("div",L,[s("div",M,[t(n,{modelValue:a.password,"onUpdate:modelValue":r[4]||(r[4]=o=>a.password=o),label:"Senha",type:"password",outlined:"","error-message":e.password?e.password[0]:"",error:!!e.password},null,8,["modelValue","error-message","error"])])]),s("div",z,[s("div",F,[t(n,{modelValue:a.password_confirmation,"onUpdate:modelValue":r[5]||(r[5]=o=>a.password_confirmation=o),label:"Repita a senha",type:"password",outlined:"","error-message":e.password?e.password[0]:"",error:!!e.password},null,8,["modelValue","error-message","error"])])]),s("div",H,[s("div",I,[t(b,{color:"primary",class:"full-width",type:"submit",loading:i.value,disable:i.value},{default:V(()=>[J]),_:1},8,["loading","disable"])])])],40,q))}}),Q=s("div",{class:"row"},[s("div",{class:"col text-center"},[s("h3",null,"Registro")])],-1),W=h({__name:"AuthRegister",props:{code:{type:String,required:!0}},setup(d){const m=d;return(p,e)=>(w(),f("div",null,[Q,t(K,{code:m.code},null,8,["code"])]))}});export{W as default};
