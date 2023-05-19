const url = window.location;

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
    url: url+'/project.json',
    cache: false,
    success: function(resp){
        console.log(resp);
        resp.forEach(dat => {
            $("#project-item").append(project_html(dat));
        });
    }
});