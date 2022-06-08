import * as React from "react"
import Layout from "../components/layout"
import NameAndPicture from "../components/NameAndPicture"
import '../components/goodreads.css'
import CoolAnimation from "../components/CoolAnimation"



const IndexPage = () => {

 return (<Layout>
     <NameAndPicture></NameAndPicture>
     <h1>About Me</h1>
     <p>
         I'm a 4th year software engineering student at uOttawa. I can do frontend and backend dev with JS, Java, Python or Clojure. 
         I've recently been working with kubernetes and terraform as a systems engineer. 
         I also like jazz, hip-hop, league of legends,  and anything sci-fi or fantasy. I've also been learning to skateboard!
     </p>
     <CoolAnimation />
 </Layout>)
}

export default IndexPage;
