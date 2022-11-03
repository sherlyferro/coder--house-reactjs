import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ data }) => {
    console.log(data)
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={data.img} />
            <Card.Body>
                <Card.Title>{data.nombre}</Card.Title>
                <Card.Text>
                    {data.precio}
                </Card.Text>
                <Button variant="primary">ver mas</Button>
            </Card.Body>
        </Card>
    )
}

export default Item;