import{x as M,r as f,I as w,y as K,_ as D,z as S,d as y,q as b,v as x,o as u,j as g,c as k,b as v,w as _,A as Q,f as o,l as r,B as j,C as W,u as O,a as Z,F as X,D as ee,e as i,i as R,E as te,G as ae,H as T,J as F,K as se,L as ne,M as oe,N as re,p as Y,O as le,Q as ce}from"./index-Ch-kxdx7.js";import{b as U,_ as J,a as V}from"./submit.component.vue_vue_type_style_index_0_scope_true_lang-BBdNtaqW.js";const A=M("user-info",()=>{let e=f({id:"",username:"",total_size:""});return{getData:async()=>{const a=await fetch("/dashboard/drive");if(!a.ok)throw new Error("Error 401");e.value.id=a.headers.get("id")||"",e.value.username=a.headers.get("username")||"",e.value.total_size=a.headers.get("total_size")||""},user:e}}),ie={created(){this.check401()},methods:{async check401(){let{getData:e}=A();try{await e()}catch{w.error("You are not authenticated"),K.push({name:"users"})}}}};function ue(e,t,a,s,n,l){return S(e.$slots,"default")}const de=D(ie,[["render",ue]]),he={class:"Modal"},C=y({__name:"base-modal.component",props:{isShow:{type:Boolean,required:!0}},setup(e){return(t,a)=>b((u(),g("div",he,[S(t.$slots,"default")],512)),[[x,e.isShow]])}}),_e=y({__name:"modal.component",props:{x:{type:Number,required:!0},y:{type:Number,required:!0},isShow:{type:Boolean,required:!0}},setup(e){let t=e,a=k(()=>`top: ${t.y}px; left: ${t.x}px;`);return(s,n)=>(u(),v(C,{class:"Modal","is-show":e.isShow,style:Q(o(a))},{default:_(()=>[S(s.$slots,"default")]),_:3},8,["is-show","style"]))}}),G=M("modal-state",()=>{let e=f({x:0,y:0,isShow:!1});return{changePosition:(s,n)=>{e.value.x=s,e.value.y=n},changeIsShow:s=>e.value.isShow=s,state:e}}),L=M("modals",()=>{let e=f(!1),t=f(!1),a=f(!1),s=f("");return{uploadFiles:t,createDirectory:e,deleteDF:a,deleteItem:s,changeCreateDirectory:d=>e.value=d,changeUploadFiles:d=>t.value=d,changeDeleteDF:d=>a.value=d,changeDeleteItem:d=>s.value=d}}),me=r("hr",null,null,-1),fe=y({__name:"context-menu",setup(e){let{changeCreateDirectory:t,changeUploadFiles:a}=L(),{state:s}=G();return(n,l)=>(u(),v(_e,{class:"ContextMenu",x:o(s).x,y:o(s).y,"is-show":o(s).isShow},{default:_(()=>[r("button",{class:"ContextMenu-button",onClick:l[0]||(l[0]=c=>o(t)(!0))},"New Folder"),me,r("button",{class:"ContextMenu-button",onClick:l[1]||(l[1]=c=>o(a)(!0))},"Upload Files")]),_:1},8,["x","y","is-show"]))}}),pe={},ge={class:"PageExpanded"};function we(e,t){return u(),g("section",ge,[S(e.$slots,"default")])}const z=D(pe,[["render",we]]),ye={},ve={viewBox:"0 0 512 512"},$e=r("path",{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},null,-1),De=[$e];function Se(e,t){return u(),g("svg",ve,De)}const H=D(ye,[["render",Se]]);class P{static async getData(t){const a=await fetch(t);if(!a.ok)throw new Error(`Error fetching data from ${t}: ${a.statusText}`);return a.json()}static async getPageFiles(t){return await this.getData(j(t))}static async getSearchFiles(t){return await this.getData(W(t))}static async getTrash(){return await this.getData(j("trash"))}}const N=M("files",()=>{let e=f([]),t=f([]),a=f(""),s=f([]);return{search:a,page_files:e,search_files:t,trash:s,changeSearch:h=>a.value=h,getPage:async h=>e.value=await P.getPageFiles(h),getSearch:async h=>t.value=await P.getSearchFiles(h),resetSearch:()=>t.value=[],getTrash:async()=>s.value=await P.getTrash()}}),E=(e=["drive"])=>{let t=O(),a=f(e);return t.params.pathMatch&&(a.value=a.value.concat(t.params.pathMatch)),{path:a.value.join("/")}},be=async()=>{let{getPage:e}=N();const t=Z();let a=E();try{await e(a.path)}catch{w.error("Directory not found"),t.push({name:"drive"})}},xe=async e=>{let{getSearch:t}=N();try{await t(e)}catch{w.error("File not found")}},Ie=()=>{let e=L(),t=f(""),a=new X(ee);const s=E([]);return{modals:e,handleSumbit:l=>{l.preventDefault(),e.changeCreateDirectory(!1),w.promise(a.postJson({directory:`${s.path}/${t.value}`}),{loading:"Loading...",success:c=>c,error:c=>c}),t.value=""},nameDirectory:t}},Ce=y({__name:"dashboard-create-directory.layout.component",setup(e){let{modals:t,handleSumbit:a,nameDirectory:s}=Ie();return(n,l)=>b((u(),v(z,null,{default:_(()=>[i(C,{class:"CreateDirectory","is-show":o(t).createDirectory},{default:_(()=>[r("button",{class:"CreateDirectory-close",onClick:l[0]||(l[0]=c=>o(t).changeCreateDirectory(!1))},[i(H)]),i(U,{title:"Create a New Directory"},{default:_(()=>[i(J,{label:"Enter the directory name:",modelValue:o(s),"onUpdate:modelValue":l[1]||(l[1]=c=>R(s)?s.value=c:s=c)},null,8,["modelValue"]),i(V,{text:"Create",onClick:o(a)},null,8,["onClick"])]),_:1})]),_:1},8,["is-show"])]),_:1},512)),[[x,o(t).createDirectory]])}}),Fe=()=>{let e=L();const t=E();return{modals:e,path:t,handleSumbit:async s=>{var p;s.preventDefault(),e.changeUploadFiles(!1);let n=document.getElementById("form-upload-file");if(!n)return;const l=n.querySelector('input[type="file"]');if(!l)return;if((((p=l.files)==null?void 0:p.length)||0)==0){w.error("Error: No files have been selected");return}const c=new FormData(n);try{const d=await fetch(te(t.path),{method:"POST",body:c});if(!d.ok){const h=await d.json();w.error("Error:",h.error);return}w.success("Success")}catch{w.error("Error")}finally{n.reset()}}}},ke=r("input",{class:"upload-file",type:"file",id:"filesInput",name:"files",multiple:""},null,-1),Me=r("label",{class:"upload-file-label",for:"filesInput"},"Select files...",-1),Ue=y({__name:"dashboard-upload-files.layout.component",setup(e){let t=Fe();return(a,s)=>b((u(),v(z,null,{default:_(()=>[i(C,{class:"CreateFiles","is-show":o(t).modals.uploadFiles},{default:_(()=>[r("button",{class:"CreateFiles-close",onClick:s[0]||(s[0]=n=>o(t).modals.changeUploadFiles(!1))},[i(H)]),i(U,{title:"Upload files",enctype:"multipart/form-data",id:"form-upload-file"},{default:_(()=>[ke,Me,i(V,{text:"Upload",onClick:o(t).handleSumbit},null,8,["onClick"])]),_:1})]),_:1},8,["is-show"])]),_:1},512)),[[x,o(t).modals.uploadFiles]])}}),Le="/assets/drive-icon.png",Ee={},Pe={viewBox:"0 0 1024 1024",fill:"#fff"},Be=r("path",{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8"},null,-1),qe=[Be];function Re(e,t){return u(),g("svg",Pe,qe)}const Ve=D(Ee,[["render",Re]]),Ae={class:"Aside"},ze=r("div",{class:"Aside-icon"},[r("img",{src:Le,alt:"Drive Icon"}),r("span",null,"Drive Clone")],-1),He={class:"Aside-new",id:"aside-new"},Ne=r("span",null,"New",-1),je={class:"Aside-nav"},Te={class:"Aside-storage"},Ye=y({__name:"dashboard-aside.layout.component",setup(e){let{user:t}=A();return(a,s)=>{const n=ae("RouterLink");return u(),g("aside",Ae,[ze,r("button",He,[i(Ve),Ne]),r("div",je,[i(n,{to:{name:"drive"}},{default:_(()=>[T("My drive")]),_:1}),i(n,{to:{name:"trash"}},{default:_(()=>[T("Trash")]),_:1})]),r("div",Te,[r("p",null,"Storage: "+F(o(t).total_size),1)])])}}}),Oe={},Xe={class:"Main"};function Je(e,t){return u(),g("div",Xe,[S(e.$slots,"default")])}const Ge=D(Oe,[["render",Je]]),Ke=()=>{let e=f(""),{changeSearch:t,resetSearch:a}=N();return se(e,()=>{e.value?xe(e.value):a(),t(e.value)}),{inputSearch:e}},Qe={class:"Search"},We=y({__name:"dashboard-search.layout.component",setup(e){let{inputSearch:t}=Ke();return(a,s)=>(u(),g("div",Qe,[i(J,{class:"Search-input",modelValue:o(t),"onUpdate:modelValue":s[0]||(s[0]=n=>R(t)?t.value=n:t=n),type:"text",placeholder:"Search in Drive"},null,8,["modelValue"])]))}}),Ze=e=>({handleChange:s=>{const n=s.target.files[0],l=document.getElementById("img-preview");n?(l.src=URL.createObjectURL(n),e("changeShowImage",!0)):(l.src="",e("changeShowImage",!1))},handleSubmit:async s=>{s.preventDefault();let n=document.getElementById("form-upload-icon");if(!n)return;const l=new FormData(n);try{const c=await fetch(ne,{method:"POST",body:l});if(!c.ok){const p=await c.json();w.error("Error:",p.error);return}w.success("Success")}catch{w.error("Error")}}}),et=r("label",{class:"upload-file-label",for:"fileInput"},"Select file...",-1),tt={id:"img-preview",alt:"Image selected"},at=y({__name:"dashboard-upload-icon.layout.component",props:{show:{type:Boolean,required:!0},showImage:{type:Boolean,required:!0}},emits:["changeShowImage"],setup(e,{emit:t}){const a=t,{handleChange:s,handleSubmit:n}=Ze(a);return(l,c)=>(u(),v(C,{class:"Header-modal","is-show":e.show},{default:_(()=>[i(U,{title:"Upload your New Icon",enctype:"multipart/form-data",id:"form-upload-icon"},{default:_(()=>[r("input",{class:"upload-file",type:"file",accept:"image/jpge,image/jpg,image/png,image/svg,image/webp",onChange:c[0]||(c[0]=(...p)=>o(s)&&o(s)(...p)),id:"fileInput",name:"icon"},null,32),et,b(r("img",tt,null,512),[[x,e.showImage]]),i(V,{text:"Upload Icon",onClick:o(n)},null,8,["onClick"])]),_:1})]),_:1},8,["is-show"]))}}),st=()=>{let e=L(),t=E([]),a=new X(oe);return{modals:e,handleSumbit:async n=>{n.preventDefault(),e.changeDeleteDF(!1);let l=t.path+"/"+e.deleteItem;w.promise(a.deleteJson({directory:l}),{loading:"Loading...",success:c=>c,error:c=>c})}}},nt={class:"Options"},ot=y({__name:"dashboard-delete.layout.component",setup(e){let t=st();return(a,s)=>b((u(),v(z,null,{default:_(()=>[i(C,{class:"DeleteDF","is-show":!0},{default:_(()=>[r("button",{class:"DeleteDF-close",onClick:s[0]||(s[0]=n=>o(t).modals.changeDeleteDF(!1))},[i(H)]),i(U,{title:"Are you sure you want to delete?"},{default:_(()=>[r("div",nt,[r("button",{class:"Options-button --no",onClick:s[1]||(s[1]=n=>o(t).modals.changeDeleteDF(!1))}," No "),r("button",{class:"Options-button --yes",onClick:s[2]||(s[2]=n=>o(t).handleSumbit(n))}," Yes ")])]),_:1})]),_:1})]),_:1},512)),[[x,o(t).modals.deleteDF]])}}),rt={},lt={fill:"none",stroke:"#fff",viewBox:"0 0 24 24"},ct=r("path",{d:"M22 12a10 10 0 0 1-10 10A10 10 0 0 1 2 12a10 10 0 0 1 20 0z"},null,-1),it=r("path",{d:"m12 8-4 4 4 4m4-4H8"},null,-1),ut=[ct,it];function dt(e,t){return u(),g("svg",lt,ut)}const ht=D(rt,[["render",dt]]),_t=e=>{let t=k(()=>{let s="Drive";if(e.pathMatch)for(let n of e.pathMatch)s+=" <span>⟩</span> "+n;return s}),a=k(()=>{be();let s="/dashboard/drive",n=e.pathMatch?[...e.pathMatch]:[];return n.length>1&&(n.pop(),s+="/"+n.join("/")),s});return{totalPath:t,to:a}},mt={class:"Path"},ft=["href"],pt=["innerHTML"],gt=y({__name:"dashboard-path.layout.component",props:{pathMatch:{type:Array}},setup(e){const t=e;let{totalPath:a,to:s}=_t(t);return(n,l)=>(u(),g("div",mt,[b(r("a",{href:o(s),class:"Path-arrow"},[i(ht)],8,ft),[[x,o(a)!="Drive"]]),r("p",{class:"Path-path",innerHTML:o(a)},null,8,pt)]))}}),B=300,q=145,wt=()=>{let{changePosition:e,changeIsShow:t,state:a}=G(),s=f(!1),n=f(!1);const l=d=>n.value=d,c=d=>{d.preventDefault();let h=d.clientX+window.scrollX,$=d.clientY+window.scrollY;const I=document.getElementById("upload-icon");if(!I)return;const m=I.getBoundingClientRect();n&&m.x<h&&h<m.x+m.width&&m.y<$&&$<m.y+m.height||a.x<h&&h<a.x+B&&a.y<$&&$<a.y+q||(h>window.innerWidth-B&&(h-=B),$>window.innerHeight-q&&($-=q),e(h,$),t(!0))},p=d=>{let h=d.clientX+window.scrollX,$=d.clientY+window.scrollY;const I=document.getElementById("aside-new");if(!I)return;const m=I.getBoundingClientRect();m.x<h&&h<m.x+m.width&&m.y<$&&$<m.y+m.height?(e(m.x,m.y+m.height+10),t(!0)):t(!1)};return document.addEventListener("contextmenu",c),document.addEventListener("click",p),re(()=>{document.removeEventListener("contextmenu",c),document.removeEventListener("click",p)}),{changeShowImage:l,showModal:s,showImage:n}},yt={class:"Header"},vt={class:"Header-search"},Ht=y({__name:"dashboard.layout",setup(e){let{user:t}=A();const a=O();let{changeShowImage:s,showModal:n,showImage:l}=wt();return(c,p)=>(u(),v(de,null,{default:_(()=>[i(fe),i(Ye),i(Ge,null,{default:_(()=>[r("div",yt,[r("div",vt,[o(a).name=="drive"||o(a).name=="drive_path"?(u(),v(We,{key:0})):Y("",!0)]),i(le,{onClick:p[0]||(p[0]=d=>R(n)?n.value=!o(n):n=!o(n)),icon:o(ce)(o(t).id),name:o(t).username},null,8,["icon","name"]),i(at,{onChangeShowImage:o(s),show:o(n),showImage:o(l),id:"upload-icon"},null,8,["onChangeShowImage","show","showImage"])]),o(a).name=="drive"||o(a).name=="drive_path"?(u(),v(gt,{key:0,pathMatch:o(a).params.pathMatch},null,8,["pathMatch"])):Y("",!0),S(c.$slots,"default")]),_:3}),i(Ce),i(Ue),i(ot)]),_:3}))}}),$t={},Dt={viewBox:"0 0 16 16",fill:"#fff"},St=r("path",{d:"M.513 1.513A1.75 1.75 0 0 1 1.75 1h3.5c.55 0 1.07.26 1.4.7l.9 1.2a.25.25 0 0 0 .2.1H13a1 1 0 0 1 1 1v.5H2.75a.75.75 0 0 0 0 1.5h11.978a1 1 0 0 1 .994 1.117L15 13.25A1.75 1.75 0 0 1 13.25 15H1.75A1.75 1.75 0 0 1 0 13.25V2.75c0-.464.184-.91.513-1.237"},null,-1),bt=[St];function xt(e,t){return u(),g("svg",Dt,bt)}const It=D($t,[["render",xt]]),Ct={},Ft={viewBox:"0 0 1024 1024",fill:"#fff"},kt=r("path",{d:"M854.6 288.7c6 6 9.4 14.1 9.4 22.6V928c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h424.7c8.5 0 16.7 3.4 22.7 9.4zM790.2 326 602 137.8V326z"},null,-1),Mt=[kt];function Ut(e,t){return u(),g("svg",Ft,Mt)}const Lt=D(Ct,[["render",Ut]]),Et={class:"File"},Pt={class:"File-icon"},Bt={class:"File-info"},qt={key:0,class:"File-info-name"},Rt=["href","target"],Vt={class:"File-info-size"},Nt=y({__name:"file.component",props:{path:{type:String,required:!0},size:{type:String,required:!0},name:{type:String,required:!0},showLink:{type:Boolean}},setup(e){const t=e;let a=k(()=>t.name.includes("."));return(s,n)=>(u(),g("div",Et,[r("div",Pt,[o(a)?(u(),v(Lt,{key:0})):(u(),v(It,{key:1}))]),r("div",Bt,[e.showLink?(u(),g("a",{key:1,href:e.path,class:"File-info-name",target:o(a)?"_blank":"_self"},F(e.name),9,Rt)):(u(),g("p",qt,F(e.name),1)),r("p",Vt,F(e.size),1)]),S(s.$slots,"default")]))}});export{Nt as _,N as a,Ht as b,L as u};
