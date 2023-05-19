let url = window.location;
let url_s = url.href.search("/#")
if(url_s != '-1'){
    let url_is = url.href.split('/#')
    url = url_is[0];
}

const project_html = (dat)=>{
    return `<div class="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
    <div class="service-item rounded overflow-hidden" style="box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5)">
        <img class="img-fluid" src="karikatur-assets/foto/${dat.image}" alt="">
        <div class="position-relative p-4 pt-0">
            <h4 class="mb-3 mt-3">${dat.title}</h4>
            <p>${dat.desk}</p>
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
    return `<div class="testimonial-item text-center">
    <div class="col-lg-4 col-md-6 portfolio-item first">
        <div class="portfolio-img rounded overflow-hidden">
            <img class="img-fluid" src="karikatur-assets/foto/${dat.image}" alt="">
        </div>
    </div>
</div>`;
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