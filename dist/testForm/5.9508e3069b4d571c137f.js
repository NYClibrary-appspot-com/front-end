(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"/VYK":function(n,l,t){"use strict";t.d(l,"a",function(){return a}),t.d(l,"b",function(){return s}),t("dWZg"),t("CcnG");var o=t("n6gG"),e=(t("G5J1"),t("K9Ia")),i=t("bne5"),u=t("Rney"),r=t("ny24"),a=function(){function n(n,l,t){this._elementRef=n,this._platform=l,this._ngZone=t,this._destroyed=new e.a,this._enabled=!0,this._previousMinRows=-1,this._textareaElement=this._elementRef.nativeElement}return Object.defineProperty(n.prototype,"minRows",{get:function(){return this._minRows},set:function(n){this._minRows=n,this._setMinHeight()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"maxRows",{get:function(){return this._maxRows},set:function(n){this._maxRows=n,this._setMaxHeight()},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"enabled",{get:function(){return this._enabled},set:function(n){n=Object(o.c)(n),this._enabled!==n&&((this._enabled=n)?this.resizeToFitContent(!0):this.reset())},enumerable:!0,configurable:!0}),n.prototype._setMinHeight=function(){var n=this.minRows&&this._cachedLineHeight?this.minRows*this._cachedLineHeight+"px":null;n&&(this._textareaElement.style.minHeight=n)},n.prototype._setMaxHeight=function(){var n=this.maxRows&&this._cachedLineHeight?this.maxRows*this._cachedLineHeight+"px":null;n&&(this._textareaElement.style.maxHeight=n)},n.prototype.ngAfterViewInit=function(){var n=this;this._platform.isBrowser&&(this._initialHeight=this._textareaElement.style.height,this.resizeToFitContent(),this._ngZone.runOutsideAngular(function(){Object(i.a)(window,"resize").pipe(Object(u.a)(16),Object(r.a)(n._destroyed)).subscribe(function(){return n.resizeToFitContent(!0)})}))},n.prototype.ngOnDestroy=function(){this._destroyed.next(),this._destroyed.complete()},n.prototype._cacheTextareaLineHeight=function(){if(!this._cachedLineHeight){var n=this._textareaElement.cloneNode(!1);n.rows=1,n.style.position="absolute",n.style.visibility="hidden",n.style.border="none",n.style.padding="0",n.style.height="",n.style.minHeight="",n.style.maxHeight="",n.style.overflow="hidden",this._textareaElement.parentNode.appendChild(n),this._cachedLineHeight=n.clientHeight,this._textareaElement.parentNode.removeChild(n),this._setMinHeight(),this._setMaxHeight()}},n.prototype.ngDoCheck=function(){this._platform.isBrowser&&this.resizeToFitContent()},n.prototype.resizeToFitContent=function(n){var l=this;if(void 0===n&&(n=!1),this._enabled&&(this._cacheTextareaLineHeight(),this._cachedLineHeight)){var t=this._elementRef.nativeElement,o=t.value;if(n||this._minRows!==this._previousMinRows||o!==this._previousValue){var e=t.placeholder;t.classList.add("cdk-textarea-autosize-measuring"),t.placeholder="",t.style.height=t.scrollHeight-4+"px",t.classList.remove("cdk-textarea-autosize-measuring"),t.placeholder=e,this._ngZone.runOutsideAngular(function(){"undefined"!=typeof requestAnimationFrame?requestAnimationFrame(function(){return l._scrollToCaretPosition(t)}):setTimeout(function(){return l._scrollToCaretPosition(t)})}),this._previousValue=o,this._previousMinRows=this._minRows}}},n.prototype.reset=function(){void 0!==this._initialHeight&&(this._textareaElement.style.height=this._initialHeight)},n.prototype._noopInputHandler=function(){},n.prototype._scrollToCaretPosition=function(n){this._destroyed.isStopped||document.activeElement!==n||n.setSelectionRange(n.selectionStart,n.selectionEnd)},n}(),s=function(){return function(){}}()},L6id:function(n,l,t){"use strict";t.r(l);var o=t("CcnG"),e=function(){return function(){}}(),i=t("pMnS"),u=t("gIcY"),r=t("Ip0R"),a=t("bujt"),s=t("UodH"),b=t("dWZg"),c=t("lLAP"),d=t("wFw1"),p=t("Mr+X"),g=t("SMsm"),h=t("fqlJ"),m=function(){function n(n,l){this.router=n,this.libService=l,this.book_name=null,this.book_list=null,this.welcome=null}return n.prototype.ngOnInit=function(){this.bookList()},n.prototype.welocome=function(){var n=this;this.libService.welcomeMessage().subscribe(function(l){n.welcome=l.success,console.log(n.welcome)})},n.prototype.bookList=function(){var n=this;this.libService.get_booklist().subscribe(function(l){n.book_list=l,console.log(n.book_list)})},n.prototype.download_a_book=function(){this.libService.download_a_book("FALL2019.PNG").subscribe(function(n){console.log(n)})},n.prototype.searchBook=function(n){var l=this;console.log(n),null!=n?this.libService.search_a_book(n).subscribe(function(n){console.log(n.book_name),l.book_name=n.book_name,console.log(l.book_name)}):console.log("null value is not exceptable")},n.prototype.addBook=function(){this.router.navigate(["/home/addBook"])},n}(),f=t("ZYCi"),_=o.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{padding:16px;text-align:center}.book[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:30px}.mat-card-cvr[_ngcontent-%COMP%]{top:50%;width:100%;text-align:center;position:fixed}.add-book-button[_ngcontent-%COMP%]{z-index:5;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:5px;margin-left:80%}input[type=text][_ngcontent-%COMP%]{width:30%;padding:12px 20px;margin:50px 500px;display:inline-block;border:1px solid #b3a9a9;box-sizing:border-box}input[type=submit][_ngcontent-%COMP%]{padding:12px 20px;display:inline-block;border:1px solid #b3a9a9;box-sizing:border-box}#bookSearchButton[_ngcontent-%COMP%]{margin:8px -500px;background-color:#fff;color:#000;border:2px solid #555;border-radius:8px;-webkit-transition-duration:.4s}#bookSearchButton[_ngcontent-%COMP%]:hover, #uploadBookButton[_ngcontent-%COMP%]:hover{background-color:#4169e1;color:#fff}#uploadBookButton[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:2px solid #555;border-radius:8px;-webkit-transition-duration:.4s}#uploadfile[_ngcontent-%COMP%]{margin-left:550px}.hide_file[_ngcontent-%COMP%]{position:absolute;z-index:1000;opacity:0;cursor:pointer;right:0;top:0;height:100%;font-size:24px;width:100%}.mat-button[_ngcontent-%COMP%]{border:1px solid #4169e1}.uploadPic[_ngcontent-%COMP%]{position:relative;text-align:center;float:left;cursor:pointer;margin-left:10%}body[_ngcontent-%COMP%]{background:url(/assets/img/homegb.jpg) center center no-repeat fixed}"]],data:{}});function y(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,10,"div",[],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(2,null,[" ",""])),(n()(),o.rb(3,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(4,null,[" ",""])),(n()(),o.rb(5,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(6,null,[" ",""])),(n()(),o.rb(7,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(8,null,[" ",""])),(n()(),o.rb(9,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(10,null,[" ",""]))],null,function(n,l){var t=l.component;n(l,2,0,t.book_list[0]),n(l,4,0,t.book_list[1]),n(l,6,0,t.book_list[2]),n(l,8,0,t.book_list[3]),n(l,10,0,t.book_list[4])})}function x(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,13,"div",[],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,12,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],function(n,l,t){var e=!0,i=n.component;return"submit"===l&&(e=!1!==o.Ab(n,3).onSubmit(t)&&e),"reset"===l&&(e=!1!==o.Ab(n,3).onReset()&&e),"ngSubmit"===l&&(e=!1!==i.searchBook(o.Ab(n,3).value)&&e),e},null,null)),o.qb(2,16384,null,0,u.q,[],null,null),o.qb(3,4210688,[["bookTag",4]],0,u.l,[[8,null],[8,null]],null,{ngSubmit:"ngSubmit"}),o.Eb(2048,null,u.b,null,[u.l]),o.qb(5,16384,null,0,u.k,[[4,u.b]],null,null),(n()(),o.rb(6,0,null,null,5,"input",[["name","book_name"],["ngModel",""],["placeholder","Enter book name"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(n,l,t){var e=!0;return"input"===l&&(e=!1!==o.Ab(n,7)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==o.Ab(n,7).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Ab(n,7)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Ab(n,7)._compositionEnd(t.target.value)&&e),e},null,null)),o.qb(7,16384,null,0,u.c,[o.F,o.k,[2,u.a]],null,null),o.Eb(1024,null,u.h,function(n){return[n]},[u.c]),o.qb(9,671744,null,0,u.m,[[2,u.b],[8,null],[8,null],[6,u.h]],{name:[0,"name"],model:[1,"model"]},null),o.Eb(2048,null,u.i,null,[u.m]),o.qb(11,16384,null,0,u.j,[[4,u.i]],null,null),(n()(),o.rb(12,0,null,null,0,"input",[["class","mybutton"],["id","bookSearchButton"],["type","submit"],["value","submit"]],null,null,null,null,null)),(n()(),o.rb(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.rb(14,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,["Some available books of our library: "])),(n()(),o.ib(16777216,null,null,1,null,y)),o.qb(17,16384,null,0,r.j,[o.Q,o.N],{ngIf:[0,"ngIf"]},null),(n()(),o.rb(18,0,null,null,5,"div",[["class","add-book-button"]],null,null,null,null,null)),(n()(),o.rb(19,0,null,null,4,"a",[["color","primary"],["mat-fab",""],["style","margin-right: 14px"]],[[1,"tabindex",0],[1,"disabled",0],[1,"aria-disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0,i=n.component;return"click"===l&&(e=!1!==o.Ab(n,20)._haltDisabledEvents(t)&&e),"click"===l&&(e=!1!==i.addBook()&&e),e},a.c,a.a)),o.qb(20,180224,null,0,s.a,[b.a,c.j,o.k,[2,d.a]],{color:[0,"color"]},null),(n()(),o.rb(21,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,p.b,p.a)),o.qb(22,9158656,null,0,g.b,[o.k,g.d,[8,null],[2,g.a]],null,null),(n()(),o.Hb(-1,0,["add"])),(n()(),o.rb(24,0,null,null,1,"p",[],null,[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.download_a_book()&&o),o},null,null)),(n()(),o.Hb(-1,null,["download"]))],function(n,l){var t=l.component;n(l,9,0,"book_name",""),n(l,17,0,null!=t.book_list),n(l,20,0,"primary"),n(l,22,0)},function(n,l){n(l,1,0,o.Ab(l,5).ngClassUntouched,o.Ab(l,5).ngClassTouched,o.Ab(l,5).ngClassPristine,o.Ab(l,5).ngClassDirty,o.Ab(l,5).ngClassValid,o.Ab(l,5).ngClassInvalid,o.Ab(l,5).ngClassPending),n(l,6,0,o.Ab(l,11).ngClassUntouched,o.Ab(l,11).ngClassTouched,o.Ab(l,11).ngClassPristine,o.Ab(l,11).ngClassDirty,o.Ab(l,11).ngClassValid,o.Ab(l,11).ngClassInvalid,o.Ab(l,11).ngClassPending),n(l,19,0,o.Ab(l,20).disabled?-1:o.Ab(l,20).tabIndex||0,o.Ab(l,20).disabled||null,o.Ab(l,20).disabled.toString(),"NoopAnimations"===o.Ab(l,20)._animationMode),n(l,21,0,o.Ab(l,22).inline,"primary"!==o.Ab(l,22).color&&"accent"!==o.Ab(l,22).color&&"warn"!==o.Ab(l,22).color)})}function k(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,1,"app-home",[],null,null,null,x,_)),o.qb(1,114688,null,0,m,[f.k,h.a],null,null)],function(n,l){n(l,1,0)},null)}var v=o.nb("app-home",m,k,{},{},[]),C=function(){function n(n,l){this.router=n,this.libService=l,this.fileToUpload=null,this.formdata=null,this.upload_mess=null}return n.prototype.ngOnInit=function(){this.formdata=new u.e({})},n.prototype.handleFileInput=function(n){this.fileToUpload=n.item(0)},n.prototype.uploadFileToActivity=function(){null!=this.fileToUpload?(this.libService.add_a_book(this.fileToUpload).subscribe(function(n){console.log(n)}),this.router.navigate(["/home"])):(console.log("null value is not exceptable"),this.router.navigate(["/home"]))},n}(),w=o.pb({encapsulation:0,styles:[["p[_ngcontent-%COMP%]{padding:16px;text-align:center}.book[_ngcontent-%COMP%]{margin-top:25px;margin-bottom:30px}.add-book-button[_ngcontent-%COMP%]{z-index:5;position:fixed;display:flex;align-self:flex-end;bottom:7%;margin-bottom:5px;margin-left:80%}input[type=text][_ngcontent-%COMP%]{width:30%;padding:12px 20px;margin:50px 500px;display:inline-block;border:1px solid #b3a9a9;box-sizing:border-box}input[type=submit][_ngcontent-%COMP%]{padding:12px 20px;display:inline-block;border:1px solid #b3a9a9;box-sizing:border-box}#bookSearchButton[_ngcontent-%COMP%]{margin:8px -500px;background-color:#fff;color:#000;border:2px solid #555;border-radius:8px;-webkit-transition-duration:.4s}#bookSearchButton[_ngcontent-%COMP%]:hover, #uploadBookButton[_ngcontent-%COMP%]:hover{background-color:#4169e1;color:#fff}#uploadBookButton[_ngcontent-%COMP%]{background-color:#fff;color:#000;border:2px solid #555;border-radius:8px;-webkit-transition-duration:.4s}#uploadfile[_ngcontent-%COMP%]{margin-left:550px}.hide_file[_ngcontent-%COMP%]{position:absolute;z-index:1000;opacity:0;cursor:pointer;right:0;top:0;height:100%;font-size:24px;width:100%}.mat-button[_ngcontent-%COMP%]{border:1px solid #4169e1}.uploadPic[_ngcontent-%COMP%]{position:relative;text-align:center;float:left;cursor:pointer;margin-left:10%}body[_ngcontent-%COMP%]{background:url(/assets/img/homegb.jpg) center center no-repeat fixed}"]],data:{}});function M(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,8,"div",[["class","container"]],null,null,null,null,null)),(n()(),o.rb(1,0,null,null,4,"div",[["class","uploadPic"]],null,null,null,null,null)),(n()(),o.rb(2,0,null,null,0,"input",[["class","hide_file"],["type","file"]],null,[[null,"change"]],function(n,l,t){var o=!0;return"change"===l&&(o=!1!==n.component.handleFileInput(t.target.files)&&o),o},null,null)),(n()(),o.rb(3,0,null,null,2,"button",[["color","primary"],["mat-flat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,a.d,a.b)),o.qb(4,180224,null,0,s.b,[o.k,b.a,c.j,[2,d.a]],{color:[0,"color"]},null),(n()(),o.Hb(-1,0,["Upload File"])),(n()(),o.rb(6,0,null,null,2,"button",[["class","uploadButton"],["color","primary"],["mat-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.uploadFileToActivity()&&o),o},a.d,a.b)),o.qb(7,180224,null,0,s.b,[o.k,b.a,c.j,[2,d.a]],{color:[0,"color"]},null),(n()(),o.Hb(-1,0,["submit"]))],function(n,l){n(l,4,0,"primary"),n(l,7,0,"primary")},function(n,l){n(l,3,0,o.Ab(l,4).disabled||null,"NoopAnimations"===o.Ab(l,4)._animationMode),n(l,6,0,o.Ab(l,7).disabled||null,"NoopAnimations"===o.Ab(l,7)._animationMode)})}function A(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,1,"app-add-book",[],null,null,null,M,w)),o.qb(1,114688,null,0,C,[f.k,h.a],null,null)],function(n,l){n(l,1,0)},null)}var P=o.nb("app-add-book",C,A,{},{},[]),O=function(){function n(){}return n.prototype.ngOnInit=function(){},n}(),H=o.pb({encapsulation:0,styles:[[""]],data:{}});function S(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),o.Hb(-1,null,[" book-list works!\n"]))],null,null)}function B(n){return o.Jb(0,[(n()(),o.rb(0,0,null,null,1,"app-book-list",[],null,null,null,S,H)),o.qb(1,114688,null,0,O,[],null,null)],function(n,l){n(l,1,0)},null)}var R=o.nb("app-book-list",O,B,{},{},[]),T=t("M2Lx"),L=t("Wf4p"),j=function(){return function(){}}(),q=t("Fzqc"),z=t("ZYjt"),F=t("4c35");t("mrSG"),t("K9Ia"),t("pugT"),t("bne5"),t("F/XL"),t("p0ib"),t("gI3B"),t("ihYY"),t("p0Sj"),t("ad02"),t("ny24"),t("n6gG"),t("YSh2");var I=function(){return function(){}}(),E=t("FVSy"),J=t("/VYK"),G=t("seP3"),N=t("b716");t.d(l,"HomeModuleNgFactory",function(){return V});var V=o.ob(e,[],function(n){return o.xb([o.yb(512,o.j,o.db,[[8,[i.a,v,P,R]],[3,o.j],o.y]),o.yb(4608,r.l,r.k,[o.v,[2,r.v]]),o.yb(4608,u.d,u.d,[]),o.yb(4608,u.r,u.r,[]),o.yb(4608,T.b,T.b,[]),o.yb(4608,L.b,L.b,[]),o.yb(1073742336,r.b,r.b,[]),o.yb(1073742336,f.m,f.m,[[2,f.s],[2,f.k]]),o.yb(1073742336,j,j,[]),o.yb(1073742336,u.p,u.p,[]),o.yb(1073742336,u.n,u.n,[]),o.yb(1073742336,q.a,q.a,[]),o.yb(1073742336,L.h,L.h,[[2,L.c],[2,z.g]]),o.yb(1073742336,F.g,F.g,[]),o.yb(1073742336,b.b,b.b,[]),o.yb(1073742336,L.o,L.o,[]),o.yb(1073742336,T.c,T.c,[]),o.yb(1073742336,c.a,c.a,[]),o.yb(1073742336,I,I,[]),o.yb(1073742336,E.a,E.a,[]),o.yb(1073742336,g.c,g.c,[]),o.yb(1073742336,s.c,s.c,[]),o.yb(1073742336,J.b,J.b,[]),o.yb(1073742336,G.a,G.a,[]),o.yb(1073742336,N.a,N.a,[]),o.yb(1073742336,u.f,u.f,[]),o.yb(1073742336,e,e,[]),o.yb(1024,f.i,function(){return[[{path:"",component:m},{path:"addBook",component:C},{path:"bookList",component:O}]]},[])])})},b716:function(n,l,t){"use strict";t.d(l,"a",function(){return o}),t("mrSG"),t("/VYK"),t("CcnG"),t("n6gG"),t("dWZg"),t("Wf4p"),t("K9Ia");var o=function(){return function(){}}()}}]);