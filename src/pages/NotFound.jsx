import { Container, Heading, Image } from "@chakra-ui/react";


function NotFound(props) {
    return (
        <Container>
            <Image src='not_found.png' fallbackSrc='https://via.placeholder.com/150' />
            <Heading>Ooops! Not Found</Heading>
        </Container>
    );
}

export default NotFound;