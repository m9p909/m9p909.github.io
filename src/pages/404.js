import * as React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout";
import {Container, Image, Row} from "react-bootstrap";


const NotFoundPage = () => {
    const sorryImage = "https://media0.giphy.com/media/QLXPK5HFpzCjS/giphy.gif?cid=ecf05e4748pcdh28m7f6uby6vhkubs66lnl9m16z8qqqx9km&rid=giphy.gif&ct=g";
    return (
        <main>
            <Layout>
                <Container>
                    <div class={"text-center"}>
                        <h1>404 Page not found</h1>
                        <Image
                            src={sorryImage}></Image>
                    </div>
                </Container>
            </Layout>
        </main>
    )
}

export default NotFoundPage
