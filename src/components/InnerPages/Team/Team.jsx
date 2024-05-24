
import React from "react";
//= Data
import data from "@/data/InnerPages/Team/team.json";

function Team() {
  return (
    <section className="team-crev section-padding sub-bg">
      <style>
        {`
          @keyframes slide {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .main-marq {
            display: flex;
            overflow: hidden;
          }
          .slide-har {
            display: flex;
            white-space: nowrap;
            animation: slide 20s linear infinite;
          }
          .box {
            display: flex;
          }
          .item {
            display: inline-block;
            padding-right: 20px;
          }
          .img img {
            width: 200px; /* Adjust the width as needed */
            height: auto;
          }
          .team-image {
            overflow: hidden; /* Ensures images stay within bounds */
          }
          .info {
            margin-top: 20px;
            text-align: center;
          }
          .team-member {
            margin-top: 40px;
          }
        `}
      </style>
      <div className="container">
        <div className="row md-marg">
          <div className="col-12 text-center mb-5">
            
          </div>
          <div className="col-12 mb-5">
            <div className="main-marq team-image">
              <div className="slide-har st1 non-strok">
                <div className="box">
                  {data.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="img">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="box">
                  {data.map((item, index) => (
                    <div className="item" key={index}>
                      <div className="img">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {data.map((item) => (
            <div className="col-lg-4 team-member" key={item.id}>
              <div className="item">
                <div className="info">
                  <h4 className="mb-1">{item.name}</h4>
                  <p className="text-muted">{item.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;










// import React from "react";
// //= Data
// import data from "@/data/InnerPages/Team/team.json";

// function Team() {
//   return (
    
//     <section className="team-crev section-padding sub-bg">
//       <div className="container">
//         <div className="row md-marg">
//           {data.map((item) => (
//             <div className="col-lg-4" key={item.id}>
//               <div className="swiper-slide mb-50">
//                 <div className="item">
//                   <div className="img">
//                     <img src={item.image} alt="" />
//                   </div>
//                   <div className="info">

//                     <div className="main-marq team-position">
//                       <div className="slide-har st1 non-strok">
//                         <div className="box">
//                           {new Array(5).fill().map((_, i) => (
//                             <div className="item" key={i}>
//                               <h4>{item.position}</h4>
//                             </div>
//                           ))}
//                         </div>
                        
//                         <div className="box">
//                           {new Array(5).fill().map((_, i) => (
//                             <div className="item" key={i}>
//                               <h4>{item.position}</h4>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="main-marq team-name">
//                       <div className="slide-har st1 non-strok">
//                         <div className="box">
//                           {new Array(5).fill().map((_, i) => (
//                             <div className="item" key={i}>
//                               <h4>{item.name}</h4>
//                             </div>
//                           ))}
//                         </div>
//                          <div className="box">
//                           {new Array(5).fill().map((_, i) => (
//                             <div className="item" key={i}>
//                               <h4>{item.name}</h4>
//                             </div>
//                           ))}
//                         </div> 
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Team;
