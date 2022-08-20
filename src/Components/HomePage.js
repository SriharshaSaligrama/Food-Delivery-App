import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const HomePage = props => {
  return (
    <div>
        <div style={{marginBottom: '0%', fontSize: '20px', fontFamily: 'Lucida handwriting, Cursive'}}>Food delivery App</div>
        <div style={{backgroundImage: 'url(https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png)', height:'100vh', backgroundSize: 'cover', marginTop: '1%'}}>
            <div style={{position: 'absolute', top: '30%', width: '100%', textAlign: 'center', fontSize: '40px', color: 'orange', fontFamily: 'Lucida handwriting, Cursive'}}>
                <div style={{textDecoration: 'underline'}}>Order your favourite food</div>
                <div style={{display: 'flex', columnGap:'150px', marginLeft: '150px', marginTop: '30px'}}>
                    <Card style={{ width: '18rem', height: '300px' }}>
                        <Link to='/Indian'><Card.Img variant="top" src="https://www.pngmart.com/files/5/Indian-Food-PNG-Image.png" /></Link>
                        <Card.Body>
                            <Card.Link href="/Indian">Indian</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Link to='/American'><Card.Img variant="top" src="https://media.istockphoto.com/photos/american-food-picture-id1005290918" style={{width: '280px'}} /></Link>
                        <Card.Body>
                            <Card.Link href="/American">American</Card.Link>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Link to='/Chinese'><Card.Img variant="top" src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2950%2Ftrend20201005112101.jpg" style={{width: '280px', height: '190px'}} /></Link>
                        <Card.Body>
                            <Card.Link href="/Chinese">Chinese</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    </div>
  )
}
