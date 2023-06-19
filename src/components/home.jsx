import Nav from "./nav"
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import search_img from '../assets/search-img.png'
import './home.css'
import data from '../data/videodata.js'

function Home(){
    return(
        <div>
            <Nav/>
            <div className="home-header">

                <p>We tackle interesting topics everyday</p>

                <div>
                    <div className="search-box">
                        <img src={search_img} alt="" />
                        <p>Find Courses</p>
                    </div>

                    <div className="home-header-view">
                         <img src={img2} alt=""/>
                         <img src={img1} alt=""/>
                    </div>
                </div>
            </div>

            <div className="home-videos">
                <Tags/>
                <div className="videocard-cont" id="videocard-cont">
                {
                    data.map((i,key)=>{
                        return <Videocard category={i.category} title={i.title} imglink={i.imglink}/>
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Home

function filter(value){
    const videocontainer = document.getElementById('videocard-cont')
    //count of child elements
    const len = videocontainer.childElementCount


     // initialy remove the display class from all element
    for(let i=0 ;i<len;i++){
        const a = videocontainer.getElementsByClassName('videocard')[i]
        a.classList.remove('display')
    }
       
       // if all is clicked all will be displayed
      if(value=='All')return

   
    for(let i=0 ;i<len;i++){
        const elem = videocontainer.childNodes[i]
        const elem_1 = elem.childNodes
        const elem_2 = elem_1[1].childNodes
        const elem_3 = elem_2[0].childNodes
        const elem_value = elem_3[0].data

       const a = videocontainer.getElementsByClassName('videocard')[i]

       if(elem_value!==value){
           a.classList.add('display')
       }
         
    }
    
}

export function Tags(){
    return(
       <div className="tags">
           <div onClick={()=>filter('All')}>All</div>
           <div onClick={()=>filter('Technology')}>Technology</div>
           <div onClick={()=>filter('Education')}>Education</div>
           <div onClick={()=>filter('Lifestyle')}>Lifestyle</div>
           <div onClick={()=>filter('Healthcare')}>Healthcare</div>
           <div onClick={()=>filter('Sport')}>Sport</div>
           <div onClick={()=>filter('Food')}>Food</div>
       </div>
    )
}

export function Videocard({category,title,imglink}){
    return(
        <div className="videocard">
            <img src={require(`../assets/${imglink}`)} alt="" />
            
            <div className="videocard-sub-1">
                <p className="video-tag">{category}</p>
                <p className="two-hrs-ago">2 hours ago</p>
            </div>

            <p className="video-title">{title}</p>

            <p className="video-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
            
            <div className="read-more">
                <p>Read more</p>
                <img src={require('../assets/arrow-right.png')} alt="" />
            </div>
        </div>
    )
}