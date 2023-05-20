const url = window.origin;

const project_html = (dat)=>{
    return `<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
    <div class="service-item rounded overflow-hidden" style="box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)">
        <img class="img-fluid" src="karikatur-assets/foto/${dat.image}" alt="">
        <div class="position-relative p-4 pt-0">
            <h4 class="mb-3 mt-3">${dat.title}</h4>
            <h6 class="text-primary">${dat.desk}</h6>
        </div>
    </div>
</div>`;
}

$.ajax({
    url: url+'/json/project.json',
    cache: false,
    success: function(resp){
        resp.forEach(dat => {
            $("#project-item").append(project_html(dat));
        });
    }
});

const finishing_html = (dat)=>{
    return `<div class="col-lg-4 col-md-6  first">
    <div class="rounded overflow-hidden">
        <img class="img-fluid" src="karikatur-assets/foto/${dat.image}" alt="">
    </div>
</div>`;
}

$.ajax({
    url: url+'/json/finishing.json',
    cache: false,
    success: function(resp){
        resp.forEach(dat => {
            $("#finishing-item").append(finishing_html(dat));
        });
    }
});

const testi_html = (dat)=>{
    let idd = dat.image.replaceAll(".","").replaceAll(" ","_")
    return `<li id="carousel__slide1"
    tabindex="0"
    class="carousel__slide">
  <div class="carousel__snapper">
      <img class="img-fluid" src="karikatur-assets/foto/${dat.image}" alt="">
  </div>
</li>`;
}

$.ajax({
    url: url+'/json/testimoni.json',
    cache: false,
    success: function(resp){
        resp.forEach(dat => {
            $("#testi-item").append(testi_html(dat));
        });
    }
});

$('img').on('click', function(){
    alert($(this).attr('src'))
})