import { Header, StyledLink } from "./SharedLayout.styled";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Loader from "components/Loader/Loader";

const SharedLayout = () => {
    return (
         <> 
    <Header>
      <nav>
        <StyledLink to={'/'}>Home</StyledLink>
        <StyledLink to={'/movies'}>Movies</StyledLink>
      </nav>
    </Header>
    <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </> 
    )
}

export default SharedLayout;