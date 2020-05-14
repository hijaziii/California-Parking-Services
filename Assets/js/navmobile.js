 // Sidenav
 const sideNav = document.querySelector('.sidenav');
 M.Sidenav.init(sideNav, {});

 // Slider
 const slider = document.querySelector('.slider');
 M.Slider.init(slider, {
   indicators: false,
   height: 500,
   transition: 500,
   interval: 6000
 });


 // ScrollSpy
 const ss = document.querySelectorAll('.scrollspy');
 M.ScrollSpy.init(ss, {});

 var elems = document.querySelectorAll('.modal');
 M.Modal.init(elems, {

 });