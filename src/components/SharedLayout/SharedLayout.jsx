import { Header, StyledLink } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader";
import { Container } from "components/App/App.styled";

const SharedLayout = () => {
    return (
         <> 
    <Header>
      <Container>
        <nav>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/movies'}>Movies</StyledLink>
      </nav>
      </Container>
    </Header>
    <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </> 
    )
}

export default SharedLayout;