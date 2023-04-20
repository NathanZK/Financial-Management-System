import { Container, Heading, Image } from "@chakra-ui/react";


function NotFound(props) {
    return (
        <Container mt='150px'>
            <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFc3D5lnamlkQhg78kaJbfZ2317r7TrOQLVg&usqp=CAU' />
            <Heading>Ooops! Not Found</Heading>
        </Container>
    );
}

export default NotFound;