(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{71:function(e,t,i){"use strict";function r(){this._=null}function n(e){e.U=e.C=e.L=e.R=e.P=e.N=null}function f(e,t){var i=t,r=t.R,n=i.U;n?n.L===i?n.L=r:n.R=r:e._=r,r.U=n,i.U=r,i.R=r.L,i.R&&(i.R.U=i),r.L=i}function s(e,t){var i=t,r=t.L,n=i.U;n?n.L===i?n.L=r:n.R=r:e._=r,r.U=n,i.U=r,i.L=r.R,i.L&&(i.L.U=i),r.R=i}function l(e){for(;e.L;)e=e.L;return e}r.prototype={constructor:r,insert:function(e,t){var i,r,n;if(e){if(t.P=e,t.N=e.N,e.N&&(e.N.P=t),e.N=t,e.R){for(e=e.R;e.L;)e=e.L;e.L=t}else e.R=t;i=e}else this._?(e=l(this._),t.P=null,t.N=e,e.P=e.L=t,i=e):(t.P=t.N=null,this._=t,i=null);for(t.L=t.R=null,t.U=i,t.C=!0,e=t;i&&i.C;)i===(r=i.U).L?(n=r.R)&&n.C?(i.C=n.C=!1,r.C=!0,e=r):(e===i.R&&(f(this,i),i=(e=i).U),i.C=!1,r.C=!0,s(this,r)):(n=r.L)&&n.C?(i.C=n.C=!1,r.C=!0,e=r):(e===i.L&&(s(this,i),i=(e=i).U),i.C=!1,r.C=!0,f(this,r)),i=e.U;this._.C=!1},remove:function(e){e.N&&(e.N.P=e.P),e.P&&(e.P.N=e.N),e.N=e.P=null;var t,i,r,n=e.U,a=e.L,u=e.R;if(i=a?u?l(u):a:u,n?n.L===e?n.L=i:n.R=i:this._=i,a&&u?(r=i.C,i.C=e.C,i.L=a,a.U=i,i!==u?(n=i.U,i.U=e.U,e=i.R,n.L=e,i.R=u,u.U=i):(i.U=n,n=i,e=i.R)):(r=e.C,e=i),e&&(e.U=n),!r)if(e&&e.C)e.C=!1;else{do{if(e===this._)break;if(e===n.L){if((t=n.R).C&&(t.C=!1,n.C=!0,f(this,n),t=n.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,s(this,t),t=n.R),t.C=n.C,n.C=t.R.C=!1,f(this,n),e=this._;break}}else if((t=n.L).C&&(t.C=!1,n.C=!0,s(this,n),t=n.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,f(this,t),t=n.L),t.C=n.C,n.C=t.L.C=!1,s(this,n),e=this._;break}t.C=!0,e=n,n=n.U}while(!e.C);e&&(e.C=!1)}}};var a=r;function u(e,t,i,r){var n=[null,null],f=A.push(n)-1;return n.left=e,n.right=t,i&&o(n,e,t,i),r&&o(n,t,e,r),k[e.index].halfedges.push(f),k[t.index].halfedges.push(f),n}function h(e,t,i){var r=[t,i];return r.left=e,r}function o(e,t,i,r){e[0]||e[1]?e.left===i?e[1]=r:e[0]=r:(e[0]=r,e.left=t,e.right=i)}function c(e,t,i,r,n){var f,s=e[0],l=e[1],a=s[0],u=s[1],h=0,o=1,c=l[0]-a,v=l[1]-u;if(f=t-a,c||!(f>0)){if(f/=c,c<0){if(f<h)return;f<o&&(o=f)}else if(c>0){if(f>o)return;f>h&&(h=f)}if(f=r-a,c||!(f<0)){if(f/=c,c<0){if(f>o)return;f>h&&(h=f)}else if(c>0){if(f<h)return;f<o&&(o=f)}if(f=i-u,v||!(f>0)){if(f/=v,v<0){if(f<h)return;f<o&&(o=f)}else if(v>0){if(f>o)return;f>h&&(h=f)}if(f=n-u,v||!(f<0)){if(f/=v,v<0){if(f>o)return;f>h&&(h=f)}else if(v>0){if(f<h)return;f<o&&(o=f)}return!(h>0||o<1)||(h>0&&(e[0]=[a+h*c,u+h*v]),o<1&&(e[1]=[a+o*c,u+o*v]),!0)}}}}}function v(e,t,i,r,n){var f=e[1];if(f)return!0;var s,l,a=e[0],u=e.left,h=e.right,o=u[0],c=u[1],v=h[0],C=h[1],d=(o+v)/2,g=(c+C)/2;if(C===c){if(d<t||d>=r)return;if(o>v){if(a){if(a[1]>=n)return}else a=[d,i];f=[d,n]}else{if(a){if(a[1]<i)return}else a=[d,n];f=[d,i]}}else if(l=g-(s=(o-v)/(C-c))*d,s<-1||s>1)if(o>v){if(a){if(a[1]>=n)return}else a=[(i-l)/s,i];f=[(n-l)/s,n]}else{if(a){if(a[1]<i)return}else a=[(n-l)/s,n];f=[(i-l)/s,i]}else if(c<C){if(a){if(a[0]>=r)return}else a=[t,s*t+l];f=[r,s*r+l]}else{if(a){if(a[0]<t)return}else a=[r,s*r+l];f=[t,s*t+l]}return e[0]=a,e[1]=f,!0}function C(e,t){var i=e.site,r=t.left,n=t.right;return i===n&&(n=r,r=i),n?Math.atan2(n[1]-r[1],n[0]-r[0]):(i===r?(r=t[1],n=t[0]):(r=t[0],n=t[1]),Math.atan2(r[0]-n[0],n[1]-r[1]))}function d(e,t){return t[+(t.left!==e.site)]}function g(e,t){return t[+(t.left===e.site)]}var L,p=[];function R(e){var t=e.P,i=e.N;if(t&&i){var r=t.site,f=e.site,s=i.site;if(r!==s){var l=f[0],a=f[1],u=r[0]-l,h=r[1]-a,o=s[0]-l,c=s[1]-a,v=2*(u*c-h*o);if(!(v>=-E)){var C=u*u+h*h,d=o*o+c*c,g=(c*C-h*d)/v,R=(u*d-o*C)/v,b=p.pop()||new function(){n(this),this.x=this.y=this.arc=this.site=this.cy=null};b.arc=e,b.site=f,b.x=g+l,b.y=(b.cy=R+a)+Math.sqrt(g*g+R*R),e.circle=b;for(var U=null,M=m._;M;)if(b.y<M.y||b.y===M.y&&b.x<=M.x){if(!M.L){U=M.P;break}M=M.L}else{if(!M.R){U=M;break}M=M.R}m.insert(U,b),U||(L=b)}}}}function b(e){var t=e.circle;t&&(t.P||(L=t.N),m.remove(t),p.push(t),n(t),e.circle=null)}var U=[];function M(e){var t=U.pop()||new function(){n(this),this.edge=this.site=this.circle=null};return t.site=e,t}function y(e){b(e),x.remove(e),U.push(e),n(e)}function N(e){var t=e.circle,i=t.x,r=t.cy,n=[i,r],f=e.P,s=e.N,l=[e];y(e);for(var a=f;a.circle&&Math.abs(i-a.circle.x)<q&&Math.abs(r-a.circle.cy)<q;)f=a.P,l.unshift(a),y(a),a=f;l.unshift(a),b(a);for(var h=s;h.circle&&Math.abs(i-h.circle.x)<q&&Math.abs(r-h.circle.cy)<q;)s=h.N,l.push(h),y(h),h=s;l.push(h),b(h);var c,v=l.length;for(c=1;c<v;++c)h=l[c],a=l[c-1],o(h.edge,a.site,h.site,n);a=l[0],(h=l[v-1]).edge=u(a.site,h.site,null,n),R(a),R(h)}function P(e){for(var t,i,r,n,f=e[0],s=e[1],l=x._;l;)if((r=w(l,s)-f)>q)l=l.L;else{if(!((n=f-_(l,s))>q)){r>-q?(t=l.P,i=l):n>-q?(t=l,i=l.N):t=i=l;break}if(!l.R){t=l;break}l=l.R}!function(e){k[e.index]={site:e,halfedges:[]}}(e);var a=M(e);if(x.insert(t,a),t||i){if(t===i)return b(t),i=M(t.site),x.insert(a,i),a.edge=i.edge=u(t.site,a.site),R(t),void R(i);if(i){b(t),b(i);var h=t.site,c=h[0],v=h[1],C=e[0]-c,d=e[1]-v,g=i.site,L=g[0]-c,p=g[1]-v,U=2*(C*p-d*L),y=C*C+d*d,N=L*L+p*p,P=[(p*y-d*N)/U+c,(C*N-L*y)/U+v];o(i.edge,h,g,P),a.edge=u(h,e,null,P),i.edge=u(e,g,null,P),R(t),R(i)}else a.edge=u(t.site,a.site)}}function w(e,t){var i=e.site,r=i[0],n=i[1],f=n-t;if(!f)return r;var s=e.P;if(!s)return-1/0;var l=(i=s.site)[0],a=i[1],u=a-t;if(!u)return l;var h=l-r,o=1/f-1/u,c=h/u;return o?(-c+Math.sqrt(c*c-2*o*(h*h/(-2*u)-a+u/2+n-f/2)))/o+r:(r+l)/2}function _(e,t){var i=e.N;if(i)return w(i,t);var r=e.site;return r[1]===t?r[0]:1/0}var x,k,m,A,q=1e-6,E=1e-12;function J(e,t,i){return(e[0]-i[0])*(t[1]-e[1])-(e[0]-t[0])*(i[1]-e[1])}function j(e,t){return t[1]-e[1]||t[0]-e[0]}function z(e,t){var i,r,n,f=e.sort(j).pop();for(A=[],k=new Array(e.length),x=new a,m=new a;;)if(n=L,f&&(!n||f[1]<n.y||f[1]===n.y&&f[0]<n.x))f[0]===i&&f[1]===r||(P(f),i=f[0],r=f[1]),f=e.pop();else{if(!n)break;N(n.arc)}if(function(){for(var e,t,i,r,n=0,f=k.length;n<f;++n)if((e=k[n])&&(r=(t=e.halfedges).length)){var s=new Array(r),l=new Array(r);for(i=0;i<r;++i)s[i]=i,l[i]=C(e,A[t[i]]);for(s.sort(function(e,t){return l[t]-l[e]}),i=0;i<r;++i)l[i]=t[s[i]];for(i=0;i<r;++i)t[i]=l[i]}}(),t){var s=+t[0][0],l=+t[0][1],u=+t[1][0],o=+t[1][1];!function(e,t,i,r){for(var n,f=A.length;f--;)v(n=A[f],e,t,i,r)&&c(n,e,t,i,r)&&(Math.abs(n[0][0]-n[1][0])>q||Math.abs(n[0][1]-n[1][1])>q)||delete A[f]}(s,l,u,o),function(e,t,i,r){var n,f,s,l,a,u,o,c,v,C,L,p,R=k.length,b=!0;for(n=0;n<R;++n)if(f=k[n]){for(s=f.site,l=(a=f.halfedges).length;l--;)A[a[l]]||a.splice(l,1);for(l=0,u=a.length;l<u;)L=(C=g(f,A[a[l]]))[0],p=C[1],c=(o=d(f,A[a[++l%u]]))[0],v=o[1],(Math.abs(L-c)>q||Math.abs(p-v)>q)&&(a.splice(l,0,A.push(h(s,C,Math.abs(L-e)<q&&r-p>q?[e,Math.abs(c-e)<q?v:r]:Math.abs(p-r)<q&&i-L>q?[Math.abs(v-r)<q?c:i,r]:Math.abs(L-i)<q&&p-t>q?[i,Math.abs(c-i)<q?v:t]:Math.abs(p-t)<q&&L-e>q?[Math.abs(v-t)<q?c:e,t]:null))-1),++u);u&&(b=!1)}if(b){var U,M,y,N=1/0;for(n=0,b=null;n<R;++n)(f=k[n])&&(y=(U=(s=f.site)[0]-e)*U+(M=s[1]-t)*M)<N&&(N=y,b=f);if(b){var P=[e,t],w=[e,r],_=[i,r],x=[i,t];b.halfedges.push(A.push(h(s=b.site,P,w))-1,A.push(h(s,w,_))-1,A.push(h(s,_,x))-1,A.push(h(s,x,P))-1)}}for(n=0;n<R;++n)(f=k[n])&&(f.halfedges.length||delete k[n])}(s,l,u,o)}this.edges=A,this.cells=k,x=m=A=k=null}z.prototype={constructor:z,polygons:function(){var e=this.edges;return this.cells.map(function(t){var i=t.halfedges.map(function(i){return d(t,e[i])});return i.data=t.site.data,i})},triangles:function(){var e=[],t=this.edges;return this.cells.forEach(function(i,r){if(f=(n=i.halfedges).length)for(var n,f,s,l=i.site,a=-1,u=t[n[f-1]],h=u.left===l?u.right:u.left;++a<f;)s=h,h=(u=t[n[a]]).left===l?u.right:u.left,s&&h&&r<s.index&&r<h.index&&J(l,s,h)<0&&e.push([l.data,s.data,h.data])}),e},links:function(){return this.edges.filter(function(e){return e.right}).map(function(e){return{source:e.left.data,target:e.right.data}})},find:function(e,t,i){for(var r,n,f=this,s=f._found||0,l=f.cells.length;!(n=f.cells[s]);)if(++s>=l)return null;var a=e-n.site[0],u=t-n.site[1],h=a*a+u*u;do{n=f.cells[r=s],s=null,n.halfedges.forEach(function(i){var r=f.edges[i],l=r.left;if(l!==n.site&&l||(l=r.right)){var a=e-l[0],u=t-l[1],o=a*a+u*u;o<h&&(h=o,s=l.index)}})}while(null!==s);return f._found=r,null==i||h<=i*i?n.site:null}}}}]);