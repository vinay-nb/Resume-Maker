module.exports = ({ firstname,
lastname,
email,
contactno,
dob,
bio,
about,

institution1,
degree1,
graduationyear1,
grade1,


institution2,
degree2,
graduationyear2,
grade2,


skills,
        projects,
        awards,
        certificates,
        languages,
        patents,
        hobbies,
        github,
        linkedin,
        personalsite,
        descriptions,
        achievement1,
        achievement2,
        activites1
}) => {
  return `
    <!doctype html>
    <html>
        <head>
            <!-- Font Awesome -->
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css">
            <!-- Bootstrap core CSS -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">
            <!-- Material Design Bootstrap -->
            <link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/css/mdb.min.css" rel="stylesheet">

            <style>
            html{
                zoom: 0.55;
            }    
            .rule{
              border-bottom: 1px solid black;
              width:80%;
            }
            .contactno{
              margin-top:-10px;
            }
            .email{
              margin-bottom: 0;    
            }
            body{
              font-family: 'Garamond';
            }
          </style>
      
      </head>
      <body>

      <div class="col-lg-8 mx-auto">
      <br/><br/>
      <div class="row text-center">
          <div class="col-lg-6">
              <h1><b>${firstname}${lastname}</b></h1>
              <p class="lead email"><strong>Email:</strong> ${email}</p>
              <p class="lead"><strong>Contact No:</strong> (+91)${contactno}</p>
              <p class="lead"><strong>Date of Birth:</strong> ${dob}</p>
             

          </div>    
      </div>
    
      <hr/>
      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Bio</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${bio}</p>
      </div>
      <hr/>
      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>About</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${about}</p>
      </div>

      
      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Education</b></h3>
      </div>
      <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${institution1}, ${degree1}</b> </p>
            <p class="mt-0">${grade1},${graduationyear1}</p>
      </div>
      <div class="col-lg-8 mx-auto">
      <p class="lead"><b>${institution2}, ${degree2}</b></p>
      <p class="mt-0">${grade2},${graduationyear2}</p>
      </div>

      
      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Skills</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${skills}</p>
      </div>

      <div class="col-lg-8 mx-auto bg-light">
      <h3><b>Awards</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${awards}</p>
      </div>

      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Certificates</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${certificates}</p>
      </div>



      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Patents</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${patents}</p>
      </div>


      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Projects</b></h3>
      </div>
      <div class="col-lg-8 mx-auto">
            <p class="lead"><b>${projects}</b> (${descriptions})</p>
      </div>

      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Activites</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${activites1}</p>
      </div>

      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Languages</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${languages}</p>
      </div>

      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Hobbies</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${hobbies}</p>
      </div>

      <div class="col-lg-8 mx-auto bg-light">
            <h3><b>Achievements</b></h3>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${achievement1}</p>
      </div>
      <div class="col-lg-8 row mx-auto">
          <p class="lead"> ${achievement2}</p>
      </div>





        
        <div class="col-lg-8 mx-auto bg-light">
              <h3><b>Connections</b></h3>
    
        </div>
        <div class="col-lg-8 mx-auto">
              <ul>
                <li><p class="lead">Github :${github} </p></li>
                <li><p class="lead">LinkedIn:${linkedin} </p></li>
                <li><p class="lead">Personal Site:${personalsite} </p></li>
              </ul>
              
        </div>
        
            <!-- JQuery -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <!-- Bootstrap tooltips -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
            <!-- Bootstrap core JavaScript -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>
            <!-- MDB core JavaScript -->
            <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.5/js/mdb.min.js"></script>
        </body>
    </html> 
  `;
}