




import React from "react";
//= Data
import data from "@/data/InnerPages/Team/team.json";

function Team() {
  return (
    <>
      <style>
        {`
          .team-container {
            overflow: hidden;
            white-space: nowrap;
            width: 100%;
            position: relative;
          }

          .scroll-container {
            display: flex;
            animation: scroll 10s linear infinite;
          }

          .team-item {
            flex: 0 0 10%; /* 100% / 4 = 25% */
            box-sizing: border-box;
            padding: 22px;
          }

          .item {
           
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.0);
            text-align: center;
          }

          .img img {
            width: 200px !important;
            border-radius: 10px 10px 0 0;
          }

          .info {
            padding: 10px;
          }

          .team-position,
          .team-name {
            margin-bottom: 10px;
            opacity: 0.7
  
          }

          .position-item,
          .name-item {
            margin-bottom: 0px;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .scroll-container:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      <section className="team-crev section-padding sub-bg">
        <div className="team-container">
          <div className="scroll-container">
            {data.map((item, index) => (
              <div className="team-item" key={index}>
                <div className="item">
                  <div className="img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="info">
                    <div className="team-name">
                      {new Array(1).fill().map((_, i) => (
                        <div className="name-item" key={i}>
                          <h5>{item.name}</h5>
                        </div>
                      ))}
                    </div>
                    <div className="team-position">
                      {new Array(1).fill().map((_, i) => (
                        <div className="position-item" key={i}>
                          <h6>{item.position}</h6>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
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
