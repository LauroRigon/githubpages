import{aC as o}from"./index.0c1b9320.js";async function c(a,t){const{data:n}=await o.post("/login",{email:a,password:t});return n.data}async function i(a){const{data:t}=await o.patch("/forgot-password",{email:a});return t.data}async function e(a,t,n,r){const{data:s}=await o.patch("/update-password/"+r,{email:a,password:t,password_confirmation:n});return s.data}async function u(a){const{data:t}=await o.post("/register",a);return t.data}async function d(){await o.get("/logout")}var p={login:c,logout:d,forgotPassword:i,changePassword:e,registerAccount:u};export{p as A};
